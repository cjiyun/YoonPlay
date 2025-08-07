import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSearchPaginated } from '@/hooks/useSearchPaginated';
import MovieCard from '@/components/common/MovieCard';
import SkeletonMovieList from '@/components/common/SkeletonMovieList';
import Pagination from '@/components/common/Pagination';
import SearchBar from '@/components/search/SearchBar';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initQuery = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(initQuery);
  const navigate = useNavigate();

  const { movies, totalPages, hasMore, page, setPage, isLoading, isError, isPlaceholderData } =
    useSearchPaginated(query);

  const handleSearch = inputValue => {
    setQuery(inputValue);
    setSearchParams({ q: inputValue });
    navigate(`/search?query=${encodeURIComponent(inputValue)}`);
    setPage(1);
  };

  const handlePrev = () => setPage(old => Math.max(old - 1, 1));
  const handleNext = () => {
    if (!isPlaceholderData && hasMore) {
      setPage(old => old + 1);
    }
  };

  const showSkeleton = isLoading || isPlaceholderData;

  return (
    <>
      <SearchBar
        initialValue={initQuery}
        onDebounced={val => setQuery(val)}
        onSearch={handleSearch}
      />
      {isError ? (
        <p className="text-pink100 mt-8 text-center sm:text-lg">검색 중 오류가 발생했습니다.</p>
      ) : !query ? (
        <div className="mt-8 flex justify-center">
          <p className="text-gray200 text-center sm:text-lg">검색어를 입력해주세요.</p>
        </div>
      ) : showSkeleton ? (
        <div className="grid-auto-fill-120 mt-8 gap-5">
          <SkeletonMovieList />
        </div>
      ) : movies.length === 0 ? (
        <div className="mt-8 flex justify-center">
          <p className="w-1/2 text-center sm:text-lg">
            검색어 {query}에 해당하는 데이터가 없습니다.
          </p>
        </div>
      ) : (
        <>
          <div className="grid-auto-fill-120 mt-8 gap-5">
            {movies.map(movie => (
              <MovieCard key={`${movie.id}`} movie={movie} />
            ))}
          </div>
          <Pagination
            page={page}
            totalPages={totalPages}
            hasMore={hasMore}
            isPlaceholderData={isPlaceholderData}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </>
      )}
    </>
  );
};

export default SearchPage;

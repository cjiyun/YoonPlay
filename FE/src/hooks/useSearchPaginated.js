import { useEffect, useState } from 'react';
import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from '@/apis/axiosInstance';

export const useSearchPaginated = query => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const fetchMovies = async (page = 1) => {
    const res = await axios.get('/search/movie', { params: { query: query, page: page } });
    return res.data;
  };

  const { data, isLoading, isError, error, isFetching, isPlaceholderData } = useQuery({
    queryKey: ['search', query, page],
    queryFn: () => fetchMovies(page),
    enabled: !!query,
    placeholderData: keepPreviousData,
  });

  const movies = data?.results ?? [];
  const totalPages = data?.total_pages ?? 1;
  const hasMore = page < totalPages;

  useEffect(() => {
    if (!isPlaceholderData && hasMore) {
      queryClient.prefetchQuery({
        queryKey: ['search', query, page + 1],
        queryFn: () => fetchMovies(page + 1),
      });
    }
  }, [isPlaceholderData, hasMore, queryClient, query, page, fetchMovies]);
  console.log(data);
  console.log(movies, totalPages, hasMore);

  return {
    movies,
    totalPages,
    hasMore,
    page,
    setPage,
    isLoading,
    isError,
    error,
    isFetching,
    isPlaceholderData,
  };
};

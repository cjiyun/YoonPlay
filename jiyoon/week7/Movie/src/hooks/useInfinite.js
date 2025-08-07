import { useInfiniteQuery } from '@tanstack/react-query';
import axios from '@/apis/axiosInstance';

export const useInfiniteMovies = category => {
  const fetchMovies = async ({ pageParam = 1 }) => {
    const res = await axios.get(`/movie/${category}`, {
      params: { language: 'ko-KR', page: pageParam },
    });
    return {
      results: res.data.results,
      nextPage: pageParam < res.data.total_pages ? pageParam + 1 : undefined,
    };
  };
  return useInfiniteQuery({
    queryKey: ['movies', category],
    queryFn: fetchMovies,
    getNextPageParam: last => last.nextPage,
  });
};

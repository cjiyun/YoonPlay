import { useQuery } from '@tanstack/react-query';
import axios from '@/apis/axiosInstance';

export const useMovieDetails = movieId => {
  return useQuery({
    queryKey: ['movie', movieId],
    queryFn: async () => {
      const { data } = await axios.get(`/movie/${movieId}`, {
        params: { language: 'ko-KR' },
      });
      return data;
    },
  });
};

export const useMovieCredits = movieId => {
  return useQuery({
    queryKey: ['credits', movieId],
    queryFn: async () => {
      const { data } = await axios.get(`/movie/${movieId}/credits`, {
        params: { language: 'ko-KR' },
      });
      return data;
    },
  });
};

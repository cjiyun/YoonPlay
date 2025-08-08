import { BadGatewayException, HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { TmdbMovieCategory } from '@src/tmdb/types/tmdb.types';
import { MovieListQueryDto } from '@src/tmdb/dto/movie-list-query.dto';

@Injectable()
export class TmdbService {
  private readonly client = axios.create({
    baseURL: process.env.MOVIE_API_URL,
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  });

  async getMovieList(
    category: TmdbMovieCategory,
    { language, page }: MovieListQueryDto,
  ) {
    try {
      const { data } = await this.client.get(`/movie/${category}`, {
        params: { language, page },
      });
      return data;
    } catch (e: any) {
      if (e.response) {
        throw new HttpException(e.response.data, e.response.status);
      }
      throw new BadGatewayException('TMDB upstream error');
    }
  }
}

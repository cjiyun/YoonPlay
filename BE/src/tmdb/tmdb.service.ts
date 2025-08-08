import { BadGatewayException, HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { TmdbMovieCategory } from '@src/tmdb/types/tmdb.types';
import { MovieListQueryDto } from '@src/tmdb/dto/movie-list-query.dto';
import { SearchMovieQueryDto } from '@src/tmdb/dto/search-movie.dto';

@Injectable()
export class TmdbService {
  private readonly client = axios.create({
    baseURL: process.env.MOVIE_API_URL,
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  });

  // 카테고리별 목록
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

  // 상세
  async getMovieDetails(
    id: number,
    { language }: Pick<MovieListQueryDto, 'language'>,
  ) {
    try {
      const { data } = await this.client.get(`/movie/${id}`, {
        params: { language },
      });
      return data;
    } catch (e: any) {
      this.rethrow(e);
    }
  }

  // 크레딧
  async getMovieCredits(
    id: number,
    { language }: Pick<MovieListQueryDto, 'language'>,
  ) {
    try {
      const { data } = await this.client.get(`/movie/${id}/credits`, {
        params: { language },
      });
      return data;
    } catch (e: any) {
      this.rethrow(e);
    }
  }

  // 검색 (페이지네이션)
  async searchMovies({
    query,
    language,
    page,
    include_adult,
  }: SearchMovieQueryDto) {
    try {
      const { data } = await this.client.get('/search/movie', {
        params: { query, language, page, include_adult },
      });
      return data; // { results, total_pages, ... }
    } catch (e: any) {
      this.rethrow(e);
    }
  }

  private rethrow(e: any): never {
    if (e?.response)
      throw new HttpException(e.response.data, e.response.status);
    throw new BadGatewayException('TMDB upstream error');
  }
}

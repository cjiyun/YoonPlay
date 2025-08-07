import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TmdbService {
  private readonly client = axios.create({
    baseURL: process.env.MOVIE_API_URL,
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  });

  async getPopular() {
    const { data } = await this.client.get('/movie/popular');
    return data;
  }
}

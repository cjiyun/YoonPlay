import { IsIn } from 'class-validator';
import {
  TMDB_MOVIE_CATEGORIES,
  TmdbMovieCategory,
} from '.././types/tmdb.types';

export class MovieCategoryParamDto {
  @IsIn(TMDB_MOVIE_CATEGORIES as unknown as string[])
  category!: TmdbMovieCategory;
}

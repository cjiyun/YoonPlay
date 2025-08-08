import { Controller, Get, Param, Query } from '@nestjs/common';
import { TmdbService } from './tmdb.service';
import { MovieCategoryParamDto } from '@src/tmdb/dto/movie-category.dto';
import { MovieListQueryDto } from '@src/tmdb/dto/movie-list-query.dto';

@Controller('movie')
export class TmdbController {
  constructor(private readonly tmdb: TmdbService) {}

  @Get(':category')
  getByCategory(
    @Param() { category }: MovieCategoryParamDto,
    @Query() query: MovieListQueryDto,
  ) {
    return this.tmdb.getMovieList(category, query);
  }
}

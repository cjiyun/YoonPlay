import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { TmdbService } from './tmdb.service';
import { MovieCategoryParamDto } from '@src/tmdb/dto/movie-category.dto';
import { MovieListQueryDto } from '@src/tmdb/dto/movie-list-query.dto';

@Controller('movie')
export class TmdbController {
  constructor(private readonly tmdb: TmdbService) {}

  // 목록
  @Get(':category(popular|now_playing|top_rated|upcoming)')
  getByCategory(
    @Param() { category }: MovieCategoryParamDto,
    @Query() query: MovieListQueryDto,
  ) {
    return this.tmdb.getMovieList(category, query);
  }

  // 상세
  @Get(':id(\\d+)')
  getDetails(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: MovieListQueryDto,
  ) {
    return this.tmdb.getMovieDetails(id, query);
  }

  // 크레딧: /movie/:id/credits
  @Get(':id(\\d+)/credits')
  getCredits(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: MovieListQueryDto,
  ) {
    return this.tmdb.getMovieCredits(id, query);
  }
}

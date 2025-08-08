import { Controller, Get, Query } from '@nestjs/common';
import { TmdbService } from './tmdb.service';
import { SearchMovieQueryDto } from './dto/search-movie.dto';

@Controller('search')
export class TmdbSearchController {
  constructor(private readonly tmdb: TmdbService) {}

  // /search/movie?query=...&page=...
  @Get('movie')
  searchMovie(@Query() query: SearchMovieQueryDto) {
    return this.tmdb.searchMovies(query);
  }
}

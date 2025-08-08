import { Controller, Get, Query } from '@nestjs/common';
import { TmdbService } from './tmdb.service';

@Controller('movie')
export class TmdbController {
  constructor(private readonly tmdb: TmdbService) {}

  @Get('popular')
  getPopular(@Query('language') language = 'ko-KR', @Query('page') page = 1) {
    return this.tmdb.getPopular(language, Number(page));
  }
}

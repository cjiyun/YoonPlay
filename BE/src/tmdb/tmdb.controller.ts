import { Controller, Get } from '@nestjs/common';
import { TmdbService } from './tmdb.service';

@Controller('movies')
export class TmdbController {
  constructor(private readonly tmdb: TmdbService) {}

  @Get('popular')
  getPopular() {
    return this.tmdb.getPopular();
  }
}

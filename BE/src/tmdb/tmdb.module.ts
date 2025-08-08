import { Module } from '@nestjs/common';
import { TmdbService } from './tmdb.service';
import { TmdbController } from './tmdb.controller';
import { TmdbSearchController } from '@src/tmdb/tmdb.search.controller';

@Module({
  providers: [TmdbService],
  controllers: [TmdbController, TmdbSearchController],
})
export class TmdbModule {}

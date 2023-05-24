import { Module } from '@nestjs/common';
import { PodcastService } from './podcasts/podcasts.service';
import { PodcastController } from './podcasts/podcasts.controller';

@Module({
  imports: [],
  controllers: [PodcastController],
  providers: [PodcastService],
})
export class AppModule {}

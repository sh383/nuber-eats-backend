import { Podcast } from './entities/podcast.entity';
import { Episode } from './entities/episode.entity';
export declare class PodcastService {
    private podcast;
    private episode;
    getAll(): Podcast[];
    getOne(id: string): Podcast;
    deleteOne(id: string): void;
    create(podData: any): void;
    update(id: string, updateData: any): void;
    getEpisode(id: string): Episode[];
    postEpisode(episodeData: any): void;
    patchEpisode(id: string, updateData: any): void;
    removeEpisode(id: string): void;
}

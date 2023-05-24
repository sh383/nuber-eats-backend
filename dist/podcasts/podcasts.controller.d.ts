import { PodcastService } from './podcasts.service';
export declare class PodcastController {
    private readonly podcastsService;
    constructor(podcastsService: PodcastService);
    getAll(): import("./entities/podcast.entity").Podcast[];
    getEpisode(podcastId: string): import("./entities/episode.entity").Episode[];
    getOne(podcastId: string): import("./entities/podcast.entity").Podcast;
    create(podData: any): void;
    send(podcastId: string, updateData: any): void;
    remove(podcastId: string): void;
    postEpisode(episodeData: any): void;
    patchEpisode(podcastId: string, updateData: any): void;
    removeEpisode(podcastId: string): void;
}

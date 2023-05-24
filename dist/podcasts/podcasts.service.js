"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodcastService = void 0;
const common_1 = require("@nestjs/common");
let PodcastService = class PodcastService {
    constructor() {
        this.podcast = [];
        this.episode = [];
    }
    getAll() {
        return this.podcast;
    }
    getOne(id) {
        const podcast = this.podcast.find((podcast) => podcast.id === parseInt(id));
        if (!podcast) {
            throw new common_1.NotFoundException('Error');
        }
        return podcast;
    }
    deleteOne(id) {
        this.podcast = this.podcast.filter((podcast) => podcast.id !== +id);
    }
    create(podData) {
        this.podcast.push(Object.assign({ id: this.podcast.length + 1 }, podData));
    }
    update(id, updateData) {
        const podcast = this.getOne(id);
        this.deleteOne(id);
        this.podcast.push(Object.assign(Object.assign({}, podcast), updateData));
    }
    getEpisode(id) {
        const podcast = this.podcast.find((podcast) => podcast.id === parseInt(id));
        if (!podcast) {
            throw new common_1.NotFoundException('Error');
        }
        return podcast.episodes;
    }
    postEpisode(episodeData) {
        this.episode.push(Object.assign({ id: this.episode.length + 1 }, episodeData));
    }
    patchEpisode(id, updateData) {
        const episode = this.getEpisode(id);
        this.removeEpisode(id);
        this.episode.push(Object.assign(Object.assign({}, episode), updateData));
    }
    removeEpisode(id) {
        this.episode = this.episode.filter((episode) => episode.id !== +id);
    }
};
PodcastService = __decorate([
    (0, common_1.Injectable)()
], PodcastService);
exports.PodcastService = PodcastService;
//# sourceMappingURL=podcasts.service.js.map
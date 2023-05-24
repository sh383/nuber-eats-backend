"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodcastController = void 0;
const common_1 = require("@nestjs/common");
const podcasts_service_1 = require("./podcasts.service");
let PodcastController = class PodcastController {
    constructor(podcastsService) {
        this.podcastsService = podcastsService;
    }
    getAll() {
        return this.podcastsService.getAll();
    }
    getEpisode(podcastId) {
        return this.podcastsService.getEpisode(podcastId);
    }
    getOne(podcastId) {
        return this.podcastsService.getOne(podcastId);
    }
    create(podData) {
        return this.podcastsService.create(podData);
    }
    send(podcastId, updateData) {
        return this.podcastsService.update(podcastId, updateData);
    }
    remove(podcastId) {
        return this.podcastsService.deleteOne(podcastId);
    }
    postEpisode(episodeData) {
        return this.podcastsService.postEpisode(episodeData);
    }
    patchEpisode(podcastId, updateData) {
        return this.podcastsService.update(podcastId, updateData);
    }
    removeEpisode(podcastId) {
        return this.podcastsService.deleteOne(podcastId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PodcastController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id/episodes'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PodcastController.prototype, "getEpisode", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PodcastController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PodcastController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PodcastController.prototype, "send", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PodcastController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/episodes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PodcastController.prototype, "postEpisode", null);
__decorate([
    (0, common_1.Patch)(':id/episodes'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PodcastController.prototype, "patchEpisode", null);
__decorate([
    (0, common_1.Delete)(':id/episodes'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PodcastController.prototype, "removeEpisode", null);
PodcastController = __decorate([
    (0, common_1.Controller)('podcasts'),
    __metadata("design:paramtypes", [podcasts_service_1.PodcastService])
], PodcastController);
exports.PodcastController = PodcastController;
//# sourceMappingURL=podcasts.controller.js.map
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
exports.PostsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const crud_1 = require("@nestjsx/crud");
const multer_1 = require("multer");
const multer_filter_1 = require("../middleware/multer.filter");
const posts_entity_1 = require("./posts.entity");
const posts_service_1 = require("./posts.service");
const swagger_1 = require("@nestjs/swagger");
let PostsController = class PostsController {
    constructor(service) {
        this.service = service;
    }
    async createOne(postBody, files) {
        return await this.service.createPost(postBody, files);
    }
};
__decorate([
    common_1.Post(),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('imgs', 20, {
        storage: multer_1.diskStorage(multer_filter_1.multerStorage),
        fileFilter: multer_filter_1.imageFileFilter
    })),
    openapi.ApiResponse({ status: 201, type: require("./posts.entity").Posts }),
    __param(0, common_1.Body()), __param(1, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [posts_entity_1.Posts, Array]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "createOne", null);
PostsController = __decorate([
    swagger_1.ApiTags('Posts'),
    common_1.UsePipes(common_1.ValidationPipe),
    crud_1.Crud({
        model: {
            type: posts_entity_1.Posts,
        },
        query: {
            join: {
                user: {
                    eager: true,
                    exclude: ['password'],
                },
                category: {
                    eager: true,
                },
            },
        },
    }),
    common_1.Controller('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map
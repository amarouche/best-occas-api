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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const typeorm_2 = require("typeorm");
const posts_entity_1 = require("./posts.entity");
const imgbbUploader = require("imgbb-uploader");
const fs = require("fs");
let PostsService = class PostsService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(postsRepository) {
        super(postsRepository);
        this.postsRepository = postsRepository;
    }
    async createPost(post, images) {
        let postSave = new posts_entity_1.Posts();
        try {
            if (images != undefined) {
                for (let i = 0; i < images.length; i++) {
                    post.imgs.push(await this.uploadImg(images[i]));
                }
            }
            console.log(post.imgs);
            postSave = await this.postsRepository.save(post);
        }
        catch (ex) {
            console.log(ex);
            if (ex.code === '23505') {
                throw new common_1.ConflictException('Category already exists.');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
        return postSave;
    }
    async uploadImg(image) {
        let res = null;
        try {
            res = await imgbbUploader("832911a9383ae5756287096b4e25cb5c", "./files/" + image.filename);
            try {
                fs.unlinkSync("./files/" + image.filename);
            }
            catch (err) {
                console.error(err);
            }
        }
        catch (error) {
            console.log('sss', error);
            throw new common_1.InternalServerErrorException();
        }
        return res.url;
    }
};
PostsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(posts_entity_1.Posts)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map
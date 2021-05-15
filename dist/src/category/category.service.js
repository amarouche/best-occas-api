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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./category.entity");
const imgbbUploader = require("imgbb-uploader");
const fs = require("fs");
let CategoryService = class CategoryService {
    constructor(categoriesRepository, http) {
        this.categoriesRepository = categoriesRepository;
        this.http = http;
    }
    async getAllCategories() {
        return this.categoriesRepository.find().then(data => {
            return data;
        }).catch(err => {
            return err;
        });
    }
    async getOneCategory(id) {
        return await this.categoriesRepository.findOne(id);
    }
    async createCategory(category, image) {
        let categorySave = new category_entity_1.Category();
        try {
            category.img = await this.uploadImg(image);
            categorySave = await this.categoriesRepository.save(category);
        }
        catch (ex) {
            if (ex.code === '23505') {
                throw new common_1.ConflictException('Category already exists.');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
        return categorySave;
    }
    async updateCategory(id, category) {
        return await this.categoriesRepository.save(Object.assign(Object.assign({}, category), { id: Number(id) }));
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
            console.log(error);
            throw new common_1.InternalServerErrorException();
        }
        return res.url;
    }
};
CategoryService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository, common_1.HttpService])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map
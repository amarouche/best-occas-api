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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const multer_filter_1 = require("../middleware/multer.filter");
const category_entity_1 = require("./category.entity");
const category_service_1 = require("./category.service");
const swagger_1 = require("@nestjs/swagger");
let CategoryController = class CategoryController {
    constructor(service) {
        this.service = service;
    }
    async getAll() {
        return await this.service.getAllCategories();
    }
    async getOne(id) {
        return await this.service.getOneCategory(id);
    }
    async createOne(categoryBody, file) {
        return await this.service.createCategory(categoryBody, file);
    }
    async updateOne(id, categoryBody) {
        return await this.service.updateCategory(id, categoryBody);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('img', {
        storage: multer_1.diskStorage(multer_filter_1.multerStorage),
        fileFilter: multer_filter_1.imageFileFilter
    })),
    __param(0, common_1.Body()), __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_entity_1.Category, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createOne", null);
__decorate([
    common_1.UsePipes(common_1.ValidationPipe),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, category_entity_1.Category]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "updateOne", null);
CategoryController = __decorate([
    swagger_1.ApiTags('categories'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Controller('categories'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map
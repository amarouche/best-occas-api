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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const posts_entity_1 = require("../posts/posts.entity");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let Category = class Category {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, img: { required: true, type: () => String }, posts: { required: true, type: () => [require("../posts/posts.entity").Posts] }, created_date: { required: true, type: () => Date }, updated_date: { required: true, type: () => Date } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: false }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Category.prototype, "img", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => posts_entity_1.Posts }),
    typeorm_1.OneToMany(() => posts_entity_1.Posts, post => post.category),
    __metadata("design:type", Array)
], Category.prototype, "posts", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Category.prototype, "created_date", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Category.prototype, "updated_date", void 0);
Category = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(['name'])
], Category);
exports.Category = Category;
//# sourceMappingURL=category.entity.js.map
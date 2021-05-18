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
exports.Posts = void 0;
const openapi = require("@nestjs/swagger");
const category_entity_1 = require("../category/category.entity");
const user_entity_1 = require("./../user/user.entity");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
let Posts = class Posts {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, title: { required: true, type: () => String }, description: { required: true, type: () => String }, imgs: { required: true, type: () => [String] }, category: { required: true, type: () => require("../category/category.entity").Category }, user: { required: true, type: () => require("../user/user.entity").User }, created_date: { required: true, type: () => Date }, updated_date: { required: true, type: () => Date } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Posts.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: false }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], Posts.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: false }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], Posts.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("text", { array: true }),
    __metadata("design:type", Array)
], Posts.prototype, "imgs", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => category_entity_1.Category }),
    typeorm_1.ManyToOne(() => category_entity_1.Category, category => category.posts),
    __metadata("design:type", category_entity_1.Category)
], Posts.prototype, "category", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => user_entity_1.User }),
    typeorm_1.ManyToOne(() => user_entity_1.User, user => user.posts, { nullable: true }),
    __metadata("design:type", user_entity_1.User)
], Posts.prototype, "user", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Posts.prototype, "created_date", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Posts.prototype, "updated_date", void 0);
Posts = __decorate([
    typeorm_1.Entity()
], Posts);
exports.Posts = Posts;
//# sourceMappingURL=posts.entity.js.map
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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const bcrypt = require("bcrypt");
let AuthService = class AuthService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(userRepository, jwtService, userService) {
        super(userRepository);
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async login(user) {
        const userData = await this.userRepository.findOne({
            where: {
                email: user.email,
            },
        });
        if (!(await bcrypt.compare(user.password, userData.password))) {
            throw new common_1.UnauthorizedException('Invalide username or password');
        }
        delete userData.password;
        let payload = `${userData.email}`;
        const accessToken = this.jwtService.sign(payload);
        return {
            expires_in: 3600,
            access_token: accessToken,
            user_id: userData,
            status: 200
        };
    }
    async register(user) {
        user.password = await bcrypt.hashSync(user.password, 10);
        let registerdUser = new user_entity_1.User();
        try {
            registerdUser = await this.userRepository.save(user);
        }
        catch (ex) {
            if (ex.code === '23505') {
                throw new common_1.ConflictException('Email already exists.');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
        return registerdUser;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        jwt_1.JwtService,
        user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
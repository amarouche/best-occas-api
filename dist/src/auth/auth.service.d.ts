import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
export declare class AuthService extends TypeOrmCrudService<User> {
    private userRepository;
    private readonly jwtService;
    private userService;
    constructor(userRepository: Repository<User>, jwtService: JwtService, userService: UserService);
    login(user: User): Promise<any | {
        status: number;
    }>;
    register(user: User): Promise<any>;
}

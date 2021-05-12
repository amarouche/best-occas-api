import { Repository } from 'typeorm';
import { User } from './user.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
export declare class UserService extends TypeOrmCrudService<User> {
    private userRepository;
    constructor(userRepository: Repository<User>);
}

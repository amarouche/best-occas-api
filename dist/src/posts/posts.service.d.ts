import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Posts } from './posts.entity';
export declare class PostsService extends TypeOrmCrudService<Posts> {
    private postsRepository;
    constructor(postsRepository: Repository<Posts>);
}

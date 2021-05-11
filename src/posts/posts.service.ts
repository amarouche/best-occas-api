import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Posts } from './posts.entity';

@Injectable()
export class PostsService extends TypeOrmCrudService<Posts>{
  constructor(@InjectRepository(Posts) private postsRepository: Repository<Posts>){
    super(postsRepository)
  }
}

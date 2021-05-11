import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Posts } from './posts.entity';
import { PostsService } from './posts.service';

@UsePipes(ValidationPipe)
@Crud({
  model: {
    type: Posts,
  },
  query: {
    join: {
      user: {
        eager: true,
        exclude: ['password'],
      },
      category: {
        eager: true,
      },
    },
  },
})
@Controller('posts')
export class PostsController {
  constructor(public service: PostsService) {
  }
}

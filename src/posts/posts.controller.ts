import { Body, Controller, Post, UploadedFile, UploadedFiles, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Crud } from '@nestjsx/crud';
import { diskStorage } from 'multer';
import { imageFileFilter, multerStorage } from 'src/middleware/multer.filter';
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

  @Post()
  @UseInterceptors(FilesInterceptor('imgs', 20 ,{
    storage: diskStorage(multerStorage),
    fileFilter:imageFileFilter}))
  async createOne(@Body() postBody : Posts, @UploadedFiles() files: Array<Express.Multer.File>): Promise<Posts> {
    return await this.service.createPost(postBody, files)
  }
}

import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Posts } from './posts.entity';
import * as imgbbUploader  from "imgbb-uploader"
import * as fs from "fs"
import { util } from 'prettier';

@Injectable()
export class PostsService extends TypeOrmCrudService<Posts>{
  constructor(@InjectRepository(Posts) private postsRepository: Repository<Posts>){
    super(postsRepository)
  }
  async createPost(post: Posts, images): Promise<Posts> {
    let postSave  = new Posts()
    try {
      if(images != undefined){
        for (let i = 0; i < images.length; i++) {
          post.imgs.push(await this.uploadImg( images[i]))
        }
      }
      
      // images.forEach(async image => {
      //   // console.log(await this.uploadImg(image))
      //    post.imgs.push( (await this.uploadImg(image)))
      // });
      console.log(post.imgs)
      postSave = await this.postsRepository.save(post)
   } catch (ex) {
     console.log(ex)
     if (ex.code === '23505') {
       throw new ConflictException('Category already exists.');
     } else {
       throw new InternalServerErrorException();
     }
   }
    return postSave
  }

   async uploadImg(image){
    let res = null
    try {
      res = await imgbbUploader("832911a9383ae5756287096b4e25cb5c", "./files/"+ image.filename)
      try {
        fs.unlinkSync("./files/"+ image.filename)
      } catch(err) {
        console.error(err)
      }
    } catch (error) {
      console.log('sss',error)
      throw new InternalServerErrorException();
    }
    return res.url
  }
}



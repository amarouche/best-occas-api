import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import * as imgbbUploader  from "imgbb-uploader"
import * as fs from "fs"
import { util } from 'prettier';

@Injectable()
export class ProductService extends TypeOrmCrudService<Product>{
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>){
    super(productRepository)
  }
  async createProduct(product: Product, images): Promise<Product> {
    console.log(product,'ds')
    let productSave  = new Product()
    try {
      product.imgs = []
      if(images != undefined){
        for (let i = 0; i < images.length; i++) {
          product.imgs.push(await this.uploadImg(images[i]))
        }
      }
      // console.log(post.imgs)
      productSave = await this.productRepository.save(product)
   } catch (ex) {
     console.log(ex)
     if (ex.code === '23505') {
       throw new ConflictException('Category already exists.');
     } else {
       throw new InternalServerErrorException();
     }
   }
    return productSave
  }

   async uploadImg(image){
    let res = null
    try {
      res = await imgbbUploader(process.env.IMGBDDTOKEN, "./files/"+ image.filename)
      try {
        fs.unlinkSync("./files/"+ image.filename)
      } catch(err) {
        console.error(err)
      }
    } catch (error) {
      throw new InternalServerErrorException();
    }
    return res.url
  }
}



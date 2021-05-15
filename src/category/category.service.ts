import { ConflictException, HttpService, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Category } from './category.entity';
import * as imgbbUploader  from "imgbb-uploader"
import * as fs from "fs"

@Injectable() 
export class CategoryService {
  
  constructor(@InjectRepository(Category) private categoriesRepository: Repository<Category>,private http: HttpService){
  }
  async getAllCategories(): Promise<Category[]> {
    return this.categoriesRepository.find().then(data => {
      return data
    }).catch(err => {
      return err
    })
  }

  async getOneCategory(id: number): Promise<Category> {
    return await this.categoriesRepository.findOne(id)
  }

  async createCategory(category: Category, image): Promise<Category> {
    let categorySave  = new Category()
    try {
      category.img = await this.uploadImg(image)
      categorySave = await this.categoriesRepository.save(category)
   } catch (ex) {
     if (ex.code === '23505') {
       throw new ConflictException('Category already exists.');
     } else {
       throw new InternalServerErrorException();
     }
   }
    return categorySave
  }
  
  async updateCategory(id: number, category: Category): Promise<Category> {
    return await this.categoriesRepository.save({ ...category, id: Number(id) });
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
      console.log(error)
      throw new InternalServerErrorException();
    }
    return res.url
  }
}

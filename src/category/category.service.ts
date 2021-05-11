import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Category } from './category.entity';

@Injectable() 
export class CategoryService {
  
  constructor(@InjectRepository(Category) private categoriesRepository: Repository<Category>,){
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

  async createCategory(category: Category): Promise<Category> {
    let categorySave  = new Category()
    try {
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
}

import { Body, Controller, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@UseGuards(AuthGuard('jwt'))
@Controller('categories')
export class CategoryController {
  constructor(readonly service : CategoryService){
  }
  @Get()
  async getAll(): Promise<Category[]> {
    return await this.service.getAllCategories()
  }

  @Get(':id')
  async getOne(@Param('id') id : number): Promise<Category> {
    return await this.service.getOneCategory(id)
  }
  @UsePipes(ValidationPipe)
  @Post()
  async createOne(@Body() categoryBody : Category): Promise<Category> {
    return await this.service.createCategory(categoryBody)
  }
  @UsePipes(ValidationPipe)
  @Put(':id')
  async updateOne(@Param('id') id: number, @Body() categoryBody : Category): Promise<Category> {
    return await this.service.updateCategory(id, categoryBody)
  }
}

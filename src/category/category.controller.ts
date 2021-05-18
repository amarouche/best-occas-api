import { Body, Controller, Get, Param, Post, Put, Req, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { imageFileFilter, multerStorage } from 'src/middleware/multer.filter';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('categories')
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
  // @UsePipes(ValidationPipe)
  @Post()
  @UseInterceptors(FileInterceptor('img', {
    storage: diskStorage(multerStorage),
    fileFilter:imageFileFilter}))
  async createOne(@Body() categoryBody : Category,  @UploadedFile() file: Express.Multer.File): Promise<Category> {
    return await this.service.createCategory(categoryBody, file)
  }
  @UsePipes(ValidationPipe)
  @Put(':id')
  async updateOne(@Param('id') id: number, @Body() categoryBody : Category): Promise<Category> {
    return await this.service.updateCategory(id, categoryBody)
  }
  // @Post("upload")
  // @UseInterceptors(FileInterceptor('img', {
  //   storage: diskStorage(multerStorage),
  //   fileFilter:imageFileFilter}))
  //   uploadSingleFileWithPost(@UploadedFile() file: Express.Multer.File, @Body() body) {
  //   console.log(file);
  //   console.log(body.firstName);
  //   return file
  // }

}

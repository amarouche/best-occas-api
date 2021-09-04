import { Body, Controller, Post, UploadedFile, UploadedFiles, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Crud } from '@nestjsx/crud';
import { diskStorage } from 'multer';
import { imageFileFilter, multerStorage } from 'src/middleware/multer.filter';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product')
@UsePipes(ValidationPipe)
@Crud({
  model: {
    type: Product,
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
@Controller('product')
export class ProductController {
  constructor(public service: ProductService) {
  }
  @Post()
  @UseInterceptors(FilesInterceptor('imgs', 20 ,{
    storage: diskStorage(multerStorage),
    fileFilter:imageFileFilter}))
  async createOne(@Body() productBody : Product, @UploadedFiles() files: Array<Express.Multer.File>): Promise<Product> {
    return await this.service.createProduct(productBody, files)
  }
}

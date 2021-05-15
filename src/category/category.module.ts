import { HttpModule, Module, Post } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CategoryController } from './category.controller';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), MulterModule.register({
    dest: './uploads',
  }), AuthModule,HttpModule
],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}

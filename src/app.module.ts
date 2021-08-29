import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { typeOrmConfig } from '../config/typeOrm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { PostsModule } from './posts/posts.module';
import { FavoriteModule } from './favorite/favorite.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
    imports: [TypeOrmModule.forRoot(typeOrmConfig), 
    UserModule, AuthModule, CategoryModule, PostsModule, FavoriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/typeOrm.config';
import { FavoriteController } from './favorite.controller';
import { Favorite } from './favorite.entity';
import { FavoriteService } from './favorite.service';

@Module({
  imports:[TypeOrmModule.forFeature([Favorite])],
  providers: [FavoriteService],
  controllers: [FavoriteController]

})
export class FavoriteModule {}

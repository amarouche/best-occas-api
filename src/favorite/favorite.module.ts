import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/typeOrm.config';
import { Favorite } from './favorite.entity';
import { FavoriteService } from './favorite.service';

@Module({
  imports:[TypeOrmModule.forFeature([Favorite])],
  providers: [FavoriteService]
})
export class FavoriteModule {}

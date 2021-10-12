import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Favorite } from './favorite.entity';

@Injectable()
export class FavoriteService extends TypeOrmCrudService<Favorite> {
  constructor(@InjectRepository(Favorite)private favoriteRepository: Repository<Favorite>){
    super(favoriteRepository)
  }
}

import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Favorite } from './favorite.entity';
export declare class FavoriteService extends TypeOrmCrudService<Favorite> {
    private favoriteRepository;
    constructor(favoriteRepository: Repository<Favorite>);
}

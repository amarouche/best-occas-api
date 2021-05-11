import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Favorite } from './favorite.entity';
import { FavoriteService } from './favorite.service';


@Crud({
  model: {
    type: Favorite
  }
})
@Controller('favorite')
export class FavoriteController {
  constructor(private favoriteService: FavoriteService){}
}

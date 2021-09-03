import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Exclude } from 'class-transformer';
import { Favorite } from './favorite.entity';
import { FavoriteService } from './favorite.service';

@Crud({
  model:{
    type:Favorite
  },
  query:{
    join:{
      user:{
        eager:true,
        exclude:['password']
      },
      product:{
        eager:true
      }
    }
  }
})

@Controller('favorite')
export class FavoriteController {
  constructor(public service : FavoriteService){}
}

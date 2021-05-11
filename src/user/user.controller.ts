import {Controller, UsePipes, ValidationPipe} from '@nestjs/common';
import {UserService} from './user.service';
import {User} from './user.entity';
import {Crud} from '@nestjsx/crud';
// import {ApiUseTags} from '@nestjs/swagger';

@UsePipes(ValidationPipe)
@Crud({
  model: {
    type: User
  }
})
@Controller('users')

export class UserController {
  constructor(public service: UserService) {
  }
}
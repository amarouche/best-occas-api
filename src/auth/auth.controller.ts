import { Body, Controller, Get, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private  readonly  authService:  AuthService) {}
  
  @Post('login')
    async login(@Body() user: User): Promise<any> {
      return await this.authService.login(user);
  }  
  @UsePipes(ValidationPipe)
  @Post('register')
  async register(@Body() user: User): Promise<any> {
    console.log(user)
    return await this.authService.register(user);
  }  

  @UseGuards(AuthGuard())
  @Get('me')
  async test(@Req() req){
    console.log(req)
  }  
}

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'igasklhfad-08e3jdasdHDsa-(321asDSa',
      // signOptions:{expiresIn:3600}
    }),
    PassportModule.register({defaultStrategy:'jwt'})
  ],
  controllers: [AuthController],
  providers: [UserService, AuthService, JwtStrategy], 
  exports:[JwtStrategy]
  
})
export class AuthModule {}

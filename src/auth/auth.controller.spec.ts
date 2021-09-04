import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

describe('AuthController', () => {
  let controller: AuthController;

  const mockAuthService = {}
  const mockUserService = {}
  const mockJwt = {}
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[
        JwtModule.register({
          secret: 'igasklhfad-08e3jdasdHDsa-(321asDSa',
          // signOptions:{expiresIn:3600}
        }),
        PassportModule.register({defaultStrategy:'jwt'})
      ],
      controllers: [AuthController],
      providers:[UserService, AuthService, JwtStrategy]
    }).overrideProvider(AuthService).useValue(mockAuthService)
    .overrideProvider(UserService).useValue(mockUserService)
    .overrideProvider(JwtStrategy).useValue(mockJwt)
    .compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

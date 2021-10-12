import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

describe('AuthController', () => {
  let controller: AuthController;

  const mockAuthService = {
    register: jest.fn(entity =>{
      return {id: Date.now(),...entity}
    }),
    metadata: {
      metadata: { columns: [], connection: { options: { type: '' } } }
    }
  }
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

  it('should be register user', () => {
    const bodyUser = {
      id: Date.now(),
      firstName: 'dsds',
      lastName: "qw",
      email: "tesew@test.com",
      password: "123",
      phone:"0123456789",
      isActive: true
  }
    // expect(controller.register({firstName: 'dsds'})).toEqual({
    //   id: expect.any(Number),
    //   firstName: 'dsds'
    // });
    // expect(mockAuthService.register).toHaveBeenCalled()
  });


});

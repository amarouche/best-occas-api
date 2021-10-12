import { Test, TestingModule } from '@nestjs/testing';
import { CrudRequest } from '@nestjsx/crud';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  const req: CrudRequest = { parsed: null, options: null };
  // const createEntity: User = {firstName: 'test'};
  const mockUserService = {
    metadata: {
      columns: [{
          propertyName: 'id',
          isPrimary: true
      }],
      relations: []
    }
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers:[UserService]
    }).overrideProvider(UserService).useValue(mockUserService).compile();
    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be create user', () => {
    const bodyUser = {
      id: Date.now(),
      firstName: 'dsds',
      lastName: "qw",
      email: "tesew@test.com",
      password: "123",
      phone:"0123456789",
      isActive: true
  }
    // expect(controller.service.createOne(req, createEntity)).toEqual({
    //   id: expect.any(Number),
    //   firstName: 'test'
    // });
  });
});

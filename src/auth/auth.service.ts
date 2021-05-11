import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from  '@nestjs/jwt';
import { UserService } from  '../user/user.service';
import { User } from  '../user/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import * as bcrypt from 'bcrypt';



@Injectable()
export class AuthService extends TypeOrmCrudService<User> {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private userService: UserService,
) {
  super(userRepository);
 }

  public async login(user: User): Promise< any | { status: number }>{
    const userData = await this.userRepository.findOne({
      where: {
        email: user.email,
      },
    })
    if(! (await bcrypt.compare(user.password, userData.password))){
        throw new UnauthorizedException('Invalide username or password');
      }
      delete userData.password;
      let payload = `${userData.email}`;
      const accessToken = this.jwtService.sign(payload);
      return {
        expires_in: 3600,
        access_token: accessToken,
        user_id: userData,
        status: 200
      };
  }

  public async register(user: User): Promise<any>{
    user.password = await bcrypt.hashSync(user.password, 10)
    let registerdUser  = new User()
    try {
       registerdUser = await this.userRepository.save(user)  
    } catch (ex) {
      if (ex.code === '23505') {
        throw new ConflictException('Email already exists.');
      } else {
        throw new InternalServerErrorException();
      }
    }
    return registerdUser
  } 
}

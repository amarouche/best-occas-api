import { User } from 'src/user/user.entity';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: User): Promise<any>;
    register(user: User): Promise<any>;
    test(req: any): Promise<void>;
}

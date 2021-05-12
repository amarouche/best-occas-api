import { Posts } from '../posts/posts.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    posts: Posts[];
    created_date: Date;
    updated_date: Date;
}

import { Posts } from "src/posts/posts.entity";
import { User } from "src/user/user.entity";
export declare class Favorite {
    id: number;
    user: User;
    post: Posts;
    created_date: Date;
    updated_date: Date;
}

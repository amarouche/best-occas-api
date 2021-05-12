import { Posts } from "src/posts/posts.entity";
export declare class Category {
    id: number;
    name: string;
    img: string;
    posts: Posts[];
    created_date: Date;
    updated_date: Date;
}

import { Category } from "src/category/category.entity";
import { User } from "./../user/user.entity";
export declare class Posts {
    id: number;
    title: string;
    description: string;
    imgs: string[];
    category: Category;
    user: User;
    created_date: Date;
    updated_date: Date;
}

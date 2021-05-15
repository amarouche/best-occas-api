/// <reference types="multer" />
import { Category } from './category.entity';
import { CategoryService } from './category.service';
export declare class CategoryController {
    readonly service: CategoryService;
    constructor(service: CategoryService);
    getAll(): Promise<Category[]>;
    getOne(id: number): Promise<Category>;
    createOne(categoryBody: Category, file: Express.Multer.File): Promise<Category>;
    updateOne(id: number, categoryBody: Category): Promise<Category>;
}

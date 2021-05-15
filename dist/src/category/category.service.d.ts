import { HttpService } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
export declare class CategoryService {
    private categoriesRepository;
    private http;
    constructor(categoriesRepository: Repository<Category>, http: HttpService);
    getAllCategories(): Promise<Category[]>;
    getOneCategory(id: number): Promise<Category>;
    createCategory(category: Category, image: any): Promise<Category>;
    updateCategory(id: number, category: Category): Promise<Category>;
    uploadImg(image: any): Promise<any>;
}

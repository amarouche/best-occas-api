import { Repository } from 'typeorm';
import { Category } from './category.entity';
export declare class CategoryService {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<Category>);
    getAllCategories(): Promise<Category[]>;
    getOneCategory(id: number): Promise<Category>;
    createCategory(category: Category): Promise<Category>;
    updateCategory(id: number, category: Category): Promise<Category>;
}

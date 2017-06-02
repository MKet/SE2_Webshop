import { autoinject } from 'aurelia-framework';
import { catalogService } from '../services/catalogService';
import { Product } from '../entities/Product';
import { Category } from '../entities/Category';

@autoinject
export class Catalog {  
    
    products: Product[];
    categories: Category[];

    selectedCategory: number = null;

    constructor(private catalogService: catalogService, private number: number = 1) {}

    async attached() {
        this.products = await this.catalogService.getPage(this.number);
        this.categories = await this.catalogService.getTopLevelCategories();
    }
}
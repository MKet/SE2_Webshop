import { autoinject } from 'aurelia-framework';
import { catalogService, PageResponse } from '../services/catalogService';
import { CartService } from '../services/CartService';
import { Product } from '../entities/Product';
import { Category } from '../entities/Category';

@autoinject
export class Catalog {  
    
    products: Product[] = [];
    categories: Category[] = [];

    selectedCategory: number = null;
    pageAmount: number = 1;
    number: number = 1;

    constructor(private catalogService: catalogService, private cartService: CartService) { }

    async attached() {
        this.categories = await this.catalogService.getTopLevelCategories();
    }

    async refreshPage(pageNumber: number) : Promise<void>{
        let page: PageResponse;
        if (this.selectedCategory == null) {
            page = await this.catalogService.getPage(pageNumber);
        } else {
            page = await this.catalogService.getPageWithCategory(pageNumber, this.selectedCategory);
        }
        this.products = page.item1;
        this.pageAmount = page.item2;
    }

    async activate(params, routeConfig) {
        if (params.number != null)
            this.number = params.number;
        else
            this.number = 1;
        await this.refreshPage(this.number);
    }
}
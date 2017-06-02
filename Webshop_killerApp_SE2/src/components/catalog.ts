import { autoinject } from 'aurelia-framework';
import { catalogService } from '../services/catalogService';
import { Product } from '../entities/Product';

@autoinject
export class Catalog {  
    
    products: Product[];

    constructor(private catalogService: catalogService, private number: number = 1) {}

    async attached() {
        this.products = await this.catalogService.getPage(this.number);
    }
}
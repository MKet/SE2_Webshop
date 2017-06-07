import { autoinject } from 'aurelia-framework';
import { catalogService } from '../services/catalogService';
import { Product } from '../entities/Product';

@autoinject
export class ProductDetail {    

    private product: Product;

    constructor(private catalogService: catalogService) { }

    async activate(params, routeConfig) {
        console.info(params.id);
        this.product = await this.catalogService.getProduct(params.id);
    }
}
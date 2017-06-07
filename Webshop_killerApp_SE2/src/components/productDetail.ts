import { autoinject } from 'aurelia-framework';
import { catalogService } from '../services/catalogService';
import { Product } from '../entities/Product';
import { Review } from '../entities/Review';

@autoinject
export class ProductDetail {    

    private product: Product;
    private reviews: Review[];

    constructor(private catalogService: catalogService) { }

    async activate(params, routeConfig) {
        console.info(params.id);
        this.product = await this.catalogService.getProduct(params.id);
        this.reviews = await this.catalogService.getReviews(params.id);
    }
}
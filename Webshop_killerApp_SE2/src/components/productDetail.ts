import { autoinject } from 'aurelia-framework';
import { AuthService } from 'aurelia-authentication';
import { catalogService } from '../services/catalogService';
import { CartService } from '../services/CartService';
import { Product } from '../entities/Product';
import { Review } from '../entities/Review';
import * as jwt_decode from 'jwt-decode';

@autoinject
export class ProductDetail {    

    private product: Product;
    private reviews: Review[];
    private postedReview: Review;

    constructor(private catalogService: catalogService, private auth: AuthService, private cartService: CartService)
    {
        this.postedReview = new Review();
    }

    async activate(params, routeConfig) {
        this.product = await this.catalogService.getProduct(params.id);
        this.reviews = await this.catalogService.getReviews(params.id);

        if (this.auth.isAuthenticated()) {

            let userid = jwt_decode(this.auth.getAccessToken()).userid;
            this.postedReview.user = userid;
            this.postedReview.product = params.id;
            for (let item of this.reviews) {
                if (item.user == userid) {
                    this.postedReview = item;
                    break;
                }
            }
        }
    }

    async addToCart() {
        await this.cartService.addProduct(this.product);
    }

    async postReview() {
        await this.catalogService.postReview(this.postedReview);
        this.reviews = await this.catalogService.getReviews(this.product.id);
    }
}
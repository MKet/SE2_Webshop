import { autoinject } from 'aurelia-framework';
import { OrderService } from '../services/OrderService';
import { Product } from '../entities/Product';
import { AuthService } from 'aurelia-authentication';
import * as jwt_decode from 'jwt-decode';

@autoinject
export class OrderedProducts {    
    products: Product[];
  
    constructor(private OrderService: OrderService, private auth: AuthService) { }

    async attached() {
        let userid = jwt_decode(this.auth.getAccessToken()).userid;
        this.products = await this.OrderService.getOrderedProducts(userid);
    }

    get isEmpty(): boolean {
        return this.products == null || this.products.length === 0;
    }
}
import { autoinject } from 'aurelia-framework';
import { Product } from "../entities/Product";
import { CartService } from "../services/CartService";
import { OrderService } from "../services/OrderService";
import { AuthService } from 'aurelia-authentication';
import { Router } from 'aurelia-router';
import * as jwt_decode from 'jwt-decode';

@autoinject
export class OrderConfirmation {
    value: Product[] = [];
    discount: string;

    constructor(private cartService: CartService, private orderService: OrderService, private auth: AuthService, private router: Router) { }

    get isEmpty(): boolean {
        return this.value == null || this.value.length === 0;
    }

    async attached() {
        this.value = await this.cartService.getCart();
    }

    async addOrder() {
        this.value = await this.cartService.getCart();
        
        let userid = jwt_decode(this.auth.getAccessToken()).userid;

        if (!await this.orderService.addOrder(userid, this.discount, this.value))
            alert("placing order failed");
        else {
            await this.cartService.emptyCart();
            this.router.history.navigateBack();
        }

    }

}
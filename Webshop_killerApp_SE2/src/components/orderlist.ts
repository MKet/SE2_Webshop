import { autoinject } from 'aurelia-framework';
import { OrderService } from '../services/OrderService';
import { Product } from '../entities/Product';
import { Order } from '../entities/Order';
import { AuthService } from 'aurelia-authentication';
import * as jwt_decode from 'jwt-decode';

@autoinject
export class orderlist {    

    orders: Order[] = []; 
    products: Product[] = [];

    selectedOrder : number;
  
    constructor(private OrderService: OrderService, private auth: AuthService) { }

    async attached() {
        let userid = jwt_decode(this.auth.getAccessToken()).userid;

        this.orders = await this.OrderService.getOrdersByUser(userid);

        if (!this.isOrderEmpty)
        {
            await this.selectOrder(this.orders[0].id);
        }
    }

    get isOrderEmpty(): boolean {
        return this.orders == null || this.orders.length === 0;
    }

    get isProductEmpty(): boolean {
        return this.products == null || this.products.length === 0;
    }
    
    async selectOrder(order: number) {
        this.selectedOrder = order;
        this.products = await this.OrderService.getProductsByOrder(order);
    }

}
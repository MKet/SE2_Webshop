import { HttpClient, json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';
import { Product } from '../entities/Product';

import { Order } from '../entities/Order';

@autoinject
export class OrderService {

    constructor(private http: HttpClient) {
    }

    public async getOrderedProducts(user: number): Promise<Product[]> {
        alert(user);
        let response: Response = await this.http.fetch('/order/products', {
            body: json({
                "Item1": user
            })
        });
        return await response.json();
    }

    public async getProductsByOrder(order: number): Promise<Product[]> {
        alert(user);
        let response: Response = await this.http.fetch('/order/products/order', {
            body: json({
                "Item1": order
            })
        });
        return await response.json();
    }

    public async getOrdersByUser(user: number): Promise<Order[]> {
        alert(user);
        let response: Response = await this.http.fetch('/order/orders', {
            body: json({
                "Item1": user
            })
        });
        return await response.json();
    }
}
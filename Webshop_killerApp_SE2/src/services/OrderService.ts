import { HttpClient, json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';
import { Product } from '../entities/Product';

import { Order } from '../entities/Order';

@autoinject
export class OrderService {

    constructor(private http: HttpClient) {
    }

    public async addOrder(user: number, discount: string, products: Product[]) : Promise<boolean> {
        let response: Response = await this.http.fetch('/order/add', {
            body: json({
                "Item1": user,
                "Item2": discount,
                "Item3": products
            })
        });
        return response.ok;
    }

    public async getOrderedProducts(user: number): Promise<Product[]> {
        let response: Response = await this.http.fetch('/order/products', {
            body: json({
                "Item1": user
            })
        });
        return await response.json();
    }

    public async getProductsByOrder(order: number): Promise<Product[]> {
        let response: Response = await this.http.fetch('/order/products/order', {
            body: json({
                "Item1": order
            })
        });
        return await response.json();
    }

    public async getOrdersByUser(user: number): Promise<Order[]> {
        let response: Response = await this.http.fetch('/order/orders', {
            body: json({
                "Item1": user
            })
        });
        return await response.json();
    }
}
import { HttpClient, json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';
import { Product } from '../entities/Product';

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
}
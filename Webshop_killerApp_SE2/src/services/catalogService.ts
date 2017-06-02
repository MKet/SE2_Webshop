import { HttpClient, json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';
import { Product } from '../entities/Product';

@autoinject
export class catalogService {

    constructor(private http: HttpClient) {
    }

    public async getPage(number: number): Promise<Product[]> {
        let response: Response = await this.http.fetch('catalog/products', {
            body: json({
                "Item1": 1
            })
        });
        return await response.json();
    }

}
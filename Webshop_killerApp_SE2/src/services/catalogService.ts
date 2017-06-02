import { HttpClient, json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';
import { Product } from '../entities/Product';
import { Category } from '../entities/Category';

@autoinject
export class catalogService {

    constructor(private http: HttpClient) {
    }

    public async getPage(number: number): Promise<Product[]> {
        let response: Response = await this.http.fetch('catalog/products', {
            body: json({
                "Item1": number
            })
        });
        return await response.json();
    }

    public async getPageWithCategory(number: number, category: number): Promise<Product[]> {
        let response: Response = await this.http.fetch('catalog/products', {
            body: json({
                "Item1": number,
                "Item2": category
            })
        });
        return await response.json();
    }

    public async getTopLevelCategories(): Promise<Category[]> {
        let response: Response = await this.http.fetch('catalog/categories');
        return await response.json();
    }

}
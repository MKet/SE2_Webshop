import { HttpClient, json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';
import { Category } from '../entities/Category';
import { Product } from '../entities/Product';

@autoinject
export class catalogService {

    constructor(private http: HttpClient) {
    }

    public async getPage(number: number): Promise<PageResponse> {
        console.log(`page: ${number}`);
        let response: Response = await this.http.fetch('catalog/products', {
            body: json({
                "Item1": number
            })
        });
        return await response.json();
    }

    public async getPageWithCategory(number: number, category: number): Promise<PageResponse> {
        console.log(`page: ${number}, category: ${category}`);
        let response: Response = await this.http.fetch('catalog/category/products', {
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

export class PageResponse {
    Item1: Product[];
    Item2: number;
}
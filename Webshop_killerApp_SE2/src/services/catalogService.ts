import { HttpClient, json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';
import { Category } from '../entities/Category';
import { Product } from '../entities/Product';
import { Review } from '../entities/Review';

@autoinject
export class catalogService {

    constructor(private http: HttpClient) {
    }

    public async getPage(number: number): Promise<PageResponse> {
        let response: Response = await this.http.fetch('catalog/products', {
            body: json({
                "Item1": number
            })
        });
        return await response.json();
    }

    public async getPageWithCategory(number: number, category: number): Promise<PageResponse> {
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

    public async getProduct(Id: number): Promise<Product> {
        let response: Response = await this.http.fetch('catalog/product', {
            body: json({
                "Item1": Id
            })
        });
        return await response.json();
    }

    public async getReviews(Id: number): Promise<Review[]> {
        let response: Response = await this.http.fetch('catalog/reviews', {
            body: json({
                "Item1": Id
            })
        });
        return await response.json();
    }

    public async postReview(review: Review): Promise<void> {
        await this.http.fetch('catalog/reviews/post', { body: json(review) });
    }
}

export class PageResponse {
    item1: Product[];
    item2: number;
}
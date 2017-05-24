import { HttpClient, json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';
import { Product } from '../entities/Product';

@autoinject
export class catalogService {

    constructor(private http: HttpClient) {
    }

    public async getPage(I: number): Promise<Product[]> {
        let response: Response = await this.http.fetch('');
        let data = await response.json();
        return data;
    }

}
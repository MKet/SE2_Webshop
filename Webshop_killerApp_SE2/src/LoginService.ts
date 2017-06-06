import { HttpClient, json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';
import { User } from '../entities/User';

@autoinject
export class loginService {

    constructor(private http: HttpClient) {
    }

    public async login(username: string, password: string) : Promise<any> {
        let response: Response = await this.http.fetch('catalog/products', {
            body: json({
                "username": username,
                "password": password
            })
        });
        return await response.json();
    }

}
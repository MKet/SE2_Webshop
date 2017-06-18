import { HttpClient, json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';
import { User } from '../entities/User';

@autoinject
export class UserService {

    constructor(private http: HttpClient) {
    }

    public async Register(user: User, password: string): Promise<void> {
        await this.http.fetch('/Auth/Register', {
            body: json({
                "item1": user,
                "item2": password
            })
        });
    }
}
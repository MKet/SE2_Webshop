import { RouterConfiguration, Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';
import { FetchConfig, AuthService } from 'aurelia-authentication';

@autoinject
export class login {
    username: string;
    password: string;

    message: string;
    constructor(private http: HttpClient, private auth: AuthService, private router: Router) { }

    async login() {

        await this.auth.login({
            "username": this.username,
            "password": this.password
        }).catch(Error => {
            this.message = Error.response;
        });
    }

    async logout() {
        this.auth.logout('');
    }

}
import { RouterConfiguration, Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';
import { FetchConfig, AuthService } from 'aurelia-authentication';
import * as jwt_decode from 'jwt-decode';

@autoinject
export class login {
    username: string;
    password: string;

    constructor(private http: HttpClient, private auth: AuthService, private router: Router) {

    }

    async login(): Promise<void> {
        let validCredentials;

        if (this.auth.authenticated) {
            this.auth.logout('');
        }
        else {
            if (this.username != '' && this.password != null) {
                let data: Response = await this.http.fetch('auth/login', {
                    body: json({
                        "username": this.username,
                        "password": this.password
                    })
                });
                validCredentials = await data.json();
            }
            else {
                validCredentials = false;
            }

            if (validCredentials) {
                await this.auth.login({
                    username: this.username
                })
            }
        }

    }
}
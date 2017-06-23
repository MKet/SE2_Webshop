import { RouterConfiguration, Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';
import { FetchConfig, AuthService } from 'aurelia-authentication';
import { User } from '../entities/User';
import { UserService } from '../services/UserService';

@autoinject
export class login {
    username: string = '';
    password: string = '';

    newUser: User;
    newPassword: string = '';

    message: string;
    constructor(private http: HttpClient, private auth: AuthService, private userService: UserService, private router: Router) {
        this.newUser = new User();
    }

    async login() {

        await this.auth.login({
            "username": this.username,
            "password": this.password
        }).catch(Error => {
            this.message = "Inloggen mislukt";
        });
    }

    async register() {
        this.message = await this.userService.Register(this.newUser, this.newPassword);
    }

    async logout() {
        this.auth.logout('');
    }

}
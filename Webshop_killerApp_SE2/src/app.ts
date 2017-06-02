import { autoinject } from 'aurelia-framework';
import 'bootstrap';
import { Router, RouterConfiguration } from 'aurelia-router'
import { HttpClient, json } from 'aurelia-fetch-client';

@autoinject
export class App {

    constructor(private http: HttpClient, private router: Router, routerConfig: RouterConfiguration) {
        this.configHttp(http);
        this.configureRouter(routerConfig);
    }

    configureRouter(config: RouterConfiguration) : void {
        config.title = 'Aurelia';
        config.options.pushState = true;
        config.map([
            { title: 'Home', route: ['', 'home'], name: 'home', moduleId: 'components/home', nav: true },
            { title: 'Catalog', route: 'catalog/', name: 'catalog', moduleId: 'components/catalog', nav: true },
            { route: 'catalog/:number', name: 'catalog', moduleId: 'components/catalog' }
        ]);
        config.mapUnknownRoutes('error-404');
    }

    configHttp(http): void {
        http.configure(config => {
            config
                .withBaseUrl('api/')
                .withDefaults({
                    method: "POST",
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json',
                        'X-Requested-With': 'Fetch'
                    }
                })
                .withInterceptor({
                    request(request) {
                        console.log(`Requesting ${request.method} ${request.url}`);
                        return request;
                    },
                    response(response: Response) {
                        console.log(`Received ${response.status} ${response.url}`);
                        return response;
                    }
                });
        });
    }
}
import { autoinject } from 'aurelia-framework';
import 'bootstrap';
import { Router, RouterConfiguration, NavigationInstruction, Next, Redirect } from 'aurelia-router'
import { HttpClient, json } from 'aurelia-fetch-client';
import { FetchConfig, AuthService } from 'aurelia-authentication';
import { EventAggregator, Subscription } from 'aurelia-event-aggregator';
import * as jwt_decode from 'jwt-decode';

@autoinject
export class App {

    public userId: string;
    private subscription: Subscription;

    constructor(private http: HttpClient,
        private router: Router,
        routerConfig: RouterConfiguration,
        private config: FetchConfig,
        private auth: AuthService,
        private eventAggregator: EventAggregator) {
        this.configHttp(http);
        this.configureRouter(routerConfig);
    }

    public attached() {
        // ReSharper disable once TsResolvedFromInaccessibleModule
        if (this.auth.authenticated) this.userId = jwt_decode(this.auth.getAccessToken()).userid;

        this.subscription = this.eventAggregator.subscribe('authentication-change',
            () => {
                // ReSharper disable once TsResolvedFromInaccessibleModule
                if (this.auth.authenticated) {
                    this.userId = jwt_decode(this.auth.getAccessToken()).userid;
                } else {
                    this.userId = null;
                }
                this.router.navigateToRoute('home');
            });
    }

    public detached() {
        this.subscription.dispose();
    }

    async logout() {
        this.auth.logout();
    }

    configureRouter(config: RouterConfiguration) : void {
        config.title = 'Aurelia';
        config.options.pushState = true;
        config.map([
            { title: 'Home', route: ['', 'home'], name: 'home', moduleId: 'components/home', nav: true },
            { title: 'Catalog', route: 'catalog/', name: 'catalog', moduleId: 'components/catalog', nav: true },
            { title: 'Catalog', route: 'catalog/:number', name: 'catalogNum', moduleId: 'components/catalog' },
            { title: 'Product', route: 'catalog/product/:id', name: 'product', moduleId: 'components/productDetail' },
            { title: 'My Products', route: 'my-products', name: 'orderedProducts', moduleId: 'components/ordered-products', auth: true },
            { title: 'My Order', route: 'my-order', name: 'MyOrders', moduleId: 'components/orderlist', auth: true },
            { title: 'Order Confirmation', route: 'order-confirm', name: 'OrderConfirmation', moduleId: 'components/orderconfirmation', auth: true },
            { title: 'Login', route: 'login', name: 'login', moduleId: 'components/login' }
        ]);
        config.addPipelineStep('authorize', AuthorizeStep);
        config.mapUnknownRoutes('error-404');
    }

    configHttp(http): void {
        http.configure(config => {
            config
                .withBaseUrl('api')
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

@autoinject
class AuthorizeStep {
    constructor(private authService: AuthService) { }

    run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
        if (navigationInstruction.getAllInstructions().some(i => i.config.auth)) {
            let isLoggedIn = this.authService.isAuthenticated();
            if (!isLoggedIn) {
                return next.cancel(new Redirect('login'));
            }
        }
        return next();
    }
}
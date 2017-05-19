import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
    router: Router;

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Aurelia';
        config.options.pushState = true;
        config.map([
            { route: ['/', 'home'], name: 'home', moduleId: 'components/home' }
        ]);
    }
}
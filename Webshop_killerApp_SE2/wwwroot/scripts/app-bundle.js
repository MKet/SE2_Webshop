var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "aurelia-router", "aurelia-fetch-client", "bootstrap"], function (require, exports, aurelia_framework_1, aurelia_router_1, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(http, router, routerConfig) {
            this.http = http;
            this.router = router;
            this.configHttp(http);
            this.configureRouter(routerConfig);
        }
        App.prototype.configureRouter = function (config) {
            config.title = 'Aurelia';
            config.options.pushState = true;
            config.map([
                { title: 'Home', route: ['', 'home'], name: 'home', moduleId: 'components/home', nav: true },
                { route: 'catalog/page/:number', name: 'catalog', moduleId: 'components/catalog' },
                { title: 'Catalog', route: 'catalog', name: 'catalog', moduleId: 'components/catalog', nav: true }
            ]);
            config.mapUnknownRoutes('error-404');
        };
        App.prototype.configHttp = function (http) {
            http.configure(function (config) {
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
                    request: function (request) {
                        console.log("Requesting " + request.method + " " + request.url);
                        return request;
                    },
                    response: function (response) {
                        console.log("Received " + response.status + " " + response.url);
                        return response;
                    }
                });
            });
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient, aurelia_router_1.Router, aurelia_router_1.RouterConfiguration])
    ], App);
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQSxJQUFhLEdBQUc7UUFFWixhQUFvQixJQUFnQixFQUFVLE1BQWMsRUFBRSxZQUFpQztZQUEzRSxTQUFJLEdBQUosSUFBSSxDQUFZO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUN4RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkI7WUFDdkMsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1AsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO2dCQUM1RixFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTtnQkFDbEYsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTthQUNyRyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUVELHdCQUFVLEdBQVYsVUFBVyxJQUFJO1lBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQ2pCLE1BQU07cUJBQ0QsV0FBVyxDQUFDLE1BQU0sQ0FBQztxQkFDbkIsWUFBWSxDQUFDO29CQUNWLE1BQU0sRUFBRSxNQUFNO29CQUNkLFdBQVcsRUFBRSxhQUFhO29CQUMxQixPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsa0JBQWtCLEVBQUUsT0FBTztxQkFDOUI7aUJBQ0osQ0FBQztxQkFDRCxlQUFlLENBQUM7b0JBQ2IsT0FBTyxZQUFDLE9BQU87d0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxPQUFPLENBQUMsTUFBTSxTQUFJLE9BQU8sQ0FBQyxHQUFLLENBQUMsQ0FBQzt3QkFDM0QsTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFDbkIsQ0FBQztvQkFDRCxRQUFRLFlBQUMsUUFBa0I7d0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBWSxRQUFRLENBQUMsTUFBTSxTQUFJLFFBQVEsQ0FBQyxHQUFLLENBQUMsQ0FBQzt3QkFDM0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztvQkFDcEIsQ0FBQztpQkFDSixDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDTCxVQUFDO0lBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtJQTFDWSxHQUFHO1FBRGYsOEJBQVU7eUNBR21CLGlDQUFVLEVBQWtCLHVCQUFNLEVBQWdCLG9DQUFtQjtPQUZ0RixHQUFHLENBMENmO0lBMUNZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyQ29uZmlndXJhdGlvbiB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJ1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBqc29uIH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCByb3V0ZXJDb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgdGhpcy5jb25maWdIdHRwKGh0dHApO1xuICAgICAgICB0aGlzLmNvbmZpZ3VyZVJvdXRlcihyb3V0ZXJDb25maWcpO1xuICAgIH1cblxyXG4gICAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbikgOiB2b2lkIHtcclxuICAgICAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSc7XHJcbiAgICAgICAgY29uZmlnLm9wdGlvbnMucHVzaFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICBjb25maWcubWFwKFtcclxuICAgICAgICAgICAgeyB0aXRsZTogJ0hvbWUnLCByb3V0ZTogWycnLCAnaG9tZSddLCBuYW1lOiAnaG9tZScsIG1vZHVsZUlkOiAnY29tcG9uZW50cy9ob21lJywgbmF2OiB0cnVlIH0sXHJcbiAgICAgICAgICAgIHsgcm91dGU6ICdjYXRhbG9nL3BhZ2UvOm51bWJlcicsIG5hbWU6ICdjYXRhbG9nJywgbW9kdWxlSWQ6ICdjb21wb25lbnRzL2NhdGFsb2cnIH0sXHJcbiAgICAgICAgICAgIHsgdGl0bGU6ICdDYXRhbG9nJywgcm91dGU6ICdjYXRhbG9nJywgbmFtZTogJ2NhdGFsb2cnLCBtb2R1bGVJZDogJ2NvbXBvbmVudHMvY2F0YWxvZycsIG5hdjogdHJ1ZSB9XHJcbiAgICAgICAgXSk7XG4gICAgICAgIGNvbmZpZy5tYXBVbmtub3duUm91dGVzKCdlcnJvci00MDQnKTtcclxuICAgIH1cblxuICAgIGNvbmZpZ0h0dHAoaHR0cCk6IHZvaWQge1xuICAgICAgICBodHRwLmNvbmZpZ3VyZShjb25maWcgPT4ge1xuICAgICAgICAgICAgY29uZmlnXG4gICAgICAgICAgICAgICAgLndpdGhCYXNlVXJsKCdhcGkvJylcbiAgICAgICAgICAgICAgICAud2l0aERlZmF1bHRzKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdGZXRjaCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLndpdGhJbnRlcmNlcHRvcih7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QocmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlcXVlc3RpbmcgJHtyZXF1ZXN0Lm1ldGhvZH0gJHtyZXF1ZXN0LnVybH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZShyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS51cmx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot('app'); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQWRELDhCQWNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1cmVsaWF9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJ1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZmVhdHVyZSgncmVzb3VyY2VzJyk7XG5cbiAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG4gIH1cblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XG4gIH1cblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoJ2FwcCcpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('components/catalog',["require", "exports", "aurelia-framework", "../services/catalogService"], function (require, exports, aurelia_framework_1, catalogService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Catalog = (function () {
        function Catalog(catalogService, number) {
            if (number === void 0) { number = 1; }
            this.catalogService = catalogService;
            this.number = number;
        }
        Catalog.prototype.attached = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this.catalogService.getPage(this.number)];
                        case 1:
                            _a.products = _b.sent();
                            return [2];
                    }
                });
            });
        };
        return Catalog;
    }());
    Catalog = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [catalogService_1.catalogService, Number])
    ], Catalog);
    exports.Catalog = Catalog;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2F0YWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1BLElBQWEsT0FBTztRQUloQixpQkFBb0IsY0FBOEIsRUFBVSxNQUFrQjtZQUFsQix1QkFBQSxFQUFBLFVBQWtCO1lBQTFELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtZQUFVLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBRyxDQUFDO1FBRTVFLDBCQUFRLEdBQWQ7Ozs7Ozs0QkFDSSxLQUFBLElBQUksQ0FBQTs0QkFBWSxXQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQTs7NEJBQTlELEdBQUssUUFBUSxHQUFHLFNBQThDLENBQUM7Ozs7O1NBQ2xFO1FBQ0wsY0FBQztJQUFELENBVEEsQUFTQyxJQUFBO0lBVFksT0FBTztRQURuQiw4QkFBVTt5Q0FLNkIsK0JBQWM7T0FKekMsT0FBTyxDQVNuQjtJQVRZLDBCQUFPIiwiZmlsZSI6ImNvbXBvbmVudHMvY2F0YWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBjYXRhbG9nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NhdGFsb2dTZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vZW50aXRpZXMvUHJvZHVjdCc7XG5cbkBhdXRvaW5qZWN0XG5leHBvcnQgY2xhc3MgQ2F0YWxvZyB7ICBcbiAgICBcclxuICAgIHByb2R1Y3RzOiBQcm9kdWN0W107XHJcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2F0YWxvZ1NlcnZpY2U6IGNhdGFsb2dTZXJ2aWNlLCBwcml2YXRlIG51bWJlcjogbnVtYmVyID0gMSkge31cblxuICAgIGFzeW5jIGF0dGFjaGVkKCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gYXdhaXQgdGhpcy5jYXRhbG9nU2VydmljZS5nZXRQYWdlKHRoaXMubnVtYmVyKTtcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('components/error-404',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Error404 = (function () {
        function Error404() {
            this.message = 'Hello world';
        }
        return Error404;
    }());
    exports.Error404 = Error404;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZXJyb3ItNDA0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBR0U7WUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztRQUMvQixDQUFDO1FBQ0gsZUFBQztJQUFELENBTkEsQUFNQyxJQUFBO0lBTlksNEJBQVEiLCJmaWxlIjoiY29tcG9uZW50cy9lcnJvci00MDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRXJyb3I0MDQgeyAgICBcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gJ0hlbGxvIHdvcmxkJztcbiAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('components/home',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home() {
            this.message = 'Hello world';
        }
        return Home;
    }());
    exports.Home = Home;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUdFO1lBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7UUFDL0IsQ0FBQztRQUNILFdBQUM7SUFBRCxDQU5BLEFBTUMsSUFBQTtJQU5ZLG9CQUFJIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIb21lIHsgICAgXG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWVzc2FnZSA9ICdIZWxsbyB3b3JsZCc7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('elements/product-item',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProductItem = (function () {
        function ProductItem() {
        }
        ProductItem.prototype.valueChanged = function (newValue, oldValue) {
        };
        return ProductItem;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], ProductItem.prototype, "product", void 0);
    exports.ProductItem = ProductItem;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3Byb2R1Y3QtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFFQTtRQUFBO1FBTUEsQ0FBQztRQUhDLGtDQUFZLEdBQVosVUFBYSxRQUFRLEVBQUUsUUFBUTtRQUUvQixDQUFDO1FBQ0gsa0JBQUM7SUFBRCxDQU5BLEFBTUMsSUFBQTtJQUxXO1FBQVQsNEJBQVE7O2dEQUFTO0lBRFAsa0NBQVciLCJmaWxlIjoiZWxlbWVudHMvcHJvZHVjdC1pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgY2xhc3MgUHJvZHVjdEl0ZW0ge1xuICBAYmluZGFibGUgcHJvZHVjdDtcblxuICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG5cbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('entities/Category',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Category = (function () {
        function Category() {
        }
        return Category;
    }());
    exports.Category = Category;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL0NhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFLQSxDQUFDO1FBQUQsZUFBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBTFksNEJBQVEiLCJmaWxlIjoiZW50aXRpZXMvQ2F0ZWdvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2F0ZWdvcnkge1xyXG4gICAgaWQgOiBudW1iZXJcclxuICAgIHN1YkNhdGVnb3J5T2YgOiBudW1iZXJcclxuICAgIG5hbWUgOiBzdHJpbmdcclxuICAgIHRleHQgOiBzdHJpbmdcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('entities/Format',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Format = (function () {
        function Format() {
        }
        return Format;
    }());
    exports.Format = Format;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL0Zvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBRUEsQ0FBQztRQUFELGFBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLHdCQUFNIiwiZmlsZSI6ImVudGl0aWVzL0Zvcm1hdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGb3JtYXQge1xyXG4gICAgdGV4dDogc3RyaW5nXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('entities/Log',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Log = (function () {
        function Log() {
        }
        return Log;
    }());
    exports.Log = Log;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL0xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBTUEsQ0FBQztRQUFELFVBQUM7SUFBRCxDQU5BLEFBTUMsSUFBQTtJQU5ZLGtCQUFHIiwiZmlsZSI6ImVudGl0aWVzL0xvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMb2cge1xyXG4gICAgaWQ6IG51bWJlclxyXG4gICAgdXNlcjogc3RyaW5nXHJcbiAgICBwcm9kdWN0OiBudW1iZXJcclxuICAgIGFjdGlvbjogc3RyaW5nXHJcbiAgICBkYXRlOiBudW1iZXJcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('entities/Order',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Order = (function () {
        function Order() {
        }
        return Order;
    }());
    exports.Order = Order;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL09yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFLQSxDQUFDO1FBQUQsWUFBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBTFksc0JBQUsiLCJmaWxlIjoiZW50aXRpZXMvT3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgT3JkZXIge1xyXG4gICAgaWQgOiBudW1iZXJcclxuICAgIHVzZXIgOiBzdHJpbmcgXHJcbiAgICBkaXNjb3VudENvZGUgOiBzdHJpbmdcclxuICAgIHByaWNlIDogbnVtYmVyIFxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('entities/Product',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Product = (function () {
        function Product() {
        }
        return Product;
    }());
    exports.Product = Product;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL1Byb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQVdBLENBQUM7UUFBRCxjQUFDO0lBQUQsQ0FYQSxBQVdDLElBQUE7SUFYWSwwQkFBTyIsImZpbGUiOiJlbnRpdGllcy9Qcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByb2R1Y3Qge1xyXG4gICAgaWQgOiBudW1iZXIgICAgICAgICBcclxuICAgIG5hbWUgOiBzdHJpbmcgICAgIFxyXG4gICAgaW1hZ2UgOiBzdHJpbmcgICAgXHJcbiAgICBsb2NhdGlvbiA6IHN0cmluZ1xyXG4gICAgcHJpY2UgOiBudW1iZXIgICBcclxuICAgIGNhdGVnb3J5IDogbnVtYmVyICAgXHJcbiAgICBpc3Zpc2libGUgIDogYm9vbGVhbiBcclxuICAgIGF1dGhvciAgIDogc3RyaW5nXHJcbiAgICBkaXNjb3VudCA6IHN0cmluZ1xyXG4gICAgdGV4dCA6IHN0cmluZyAgICAgXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('entities/Review',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Review = (function () {
        function Review() {
        }
        return Review;
    }());
    exports.Review = Review;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL1Jldmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBS0EsQ0FBQztRQUFELGFBQUM7SUFBRCxDQUxBLEFBS0MsSUFBQTtJQUxZLHdCQUFNIiwiZmlsZSI6ImVudGl0aWVzL1Jldmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZXZpZXcge1xyXG4gICAgdXNlcjogc3RyaW5nO1xyXG4gICAgcHJvZHVjdDogbnVtYmVyO1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgcmF0aW5nOiBudW1iZXI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('entities/Tag',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Tag = (function () {
        function Tag() {
        }
        return Tag;
    }());
    exports.Tag = Tag;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL1RhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBRUEsQ0FBQztRQUFELFVBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLGtCQUFHIiwiZmlsZSI6ImVudGl0aWVzL1RhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUYWcge1xyXG4gICAgdGV4dDogc3RyaW5nXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('entities/User',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var User = (function () {
        function User() {
        }
        return User;
    }());
    exports.User = User;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL1VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQUdBLENBQUM7UUFBRCxXQUFDO0lBQUQsQ0FIQSxBQUdDLElBQUE7SUFIWSxvQkFBSSIsImZpbGUiOiJlbnRpdGllcy9Vc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('services/catalogService',["require", "exports", "aurelia-fetch-client", "aurelia-framework"], function (require, exports, aurelia_fetch_client_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var catalogService = (function () {
        function catalogService(http) {
            this.http = http;
        }
        catalogService.prototype.getPage = function (number) {
            return __awaiter(this, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.http.fetch('catalog/' + 1)];
                        case 1:
                            response = _a.sent();
                            return [4, response.json()];
                        case 2: return [2, _a.sent()];
                    }
                });
            });
        };
        return catalogService;
    }());
    catalogService = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], catalogService);
    exports.catalogService = catalogService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NhdGFsb2dTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0EsSUFBYSxjQUFjO1FBRXZCLHdCQUFvQixJQUFnQjtZQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ3BDLENBQUM7UUFFWSxnQ0FBTyxHQUFwQixVQUFxQixNQUFjOzs7OztnQ0FDTixXQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRSxDQUFDLENBQUMsRUFBQTs7dUNBQXBDLFNBQW9DOzRCQUN0RCxXQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQTtnQ0FBNUIsV0FBTyxTQUFxQixFQUFDOzs7O1NBQ2hDO1FBRUwscUJBQUM7SUFBRCxDQVZBLEFBVUMsSUFBQTtJQVZZLGNBQWM7UUFEMUIsOEJBQVU7eUNBR21CLGlDQUFVO09BRjNCLGNBQWMsQ0FVMUI7SUFWWSx3Q0FBYyIsImZpbGUiOiJzZXJ2aWNlcy9jYXRhbG9nU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIGpzb24gfSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uL2VudGl0aWVzL1Byb2R1Y3QnO1xuXG5AYXV0b2luamVjdFxuZXhwb3J0IGNsYXNzIGNhdGFsb2dTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRQYWdlKG51bWJlcjogbnVtYmVyKTogUHJvbWlzZTxQcm9kdWN0W10+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5mZXRjaCgnY2F0YWxvZy8nKyAxKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle Navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"/\">\r\n        <i class=\"fa fa-home\"></i>\r\n        <span>${router.title}</span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\r\n          <a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"loader\" if.bind=\"router.isNavigating\">\r\n          <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\n \r\n  <router-view></router-view>\r\n </template>\r\n"; });
define('text!components/catalog.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"container\">\r\n    <div class=\"row\">\n      <div repeat.for=\"item of products\" class=\"panel panel-default col-md-3 \">\r\n        <div class=\"panel-heading\">${item.name}</div>\r\n        <div class=\"panel-body\">${item.text}</div>\r\n        <img src=\"${item.image}\" class=\"img-thumbnail\" alt=\"${item.name}\" width=\"304\" height=\"236\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>"; });
define('text!components/error-404.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"container\">\n    <h1>${message}</h1>\n  </div>\n</template>"; });
define('text!components/home.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-3\">Hello, world!</h1>\r\n      <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\r\n      <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more &raquo;</a></p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <!-- Example row of columns -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <h2>Heading</h2>\r\n        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <h2>Heading</h2>\r\n        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <h2>Heading</h2>\r\n        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\r\n        <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\r\n      </div>\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <footer>\r\n      <p>&copy; Company 2017</p>\r\n    </footer>\r\n  </div>\n</template>"; });
define('text!elements/product-item.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"panel panel-default col-md-3 \">\n\r\n    <div class=\"panel-heading\">${name}</div>\r\n    <div class=\"panel-body\">${text}</div>\n    <img src=\"${image}\" class=\"img-thumbnail\" alt=\"Cinque Terre\" width=\"304\" height=\"236\">\r\n  </div>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map
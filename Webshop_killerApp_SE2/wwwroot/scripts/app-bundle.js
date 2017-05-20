define('app',["require", "exports", "bootstrap"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Aurelia';
            config.options.pushState = true;
            config.map([
                { route: ['/', 'home'], name: 'home', moduleId: 'components/home' }
            ]);
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUFBO1FBV0EsQ0FBQztRQVJHLDZCQUFlLEdBQWYsVUFBZ0IsTUFBTSxFQUFFLE1BQU07WUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1AsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7YUFDdEUsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNMLFVBQUM7SUFBRCxDQVhBLEFBV0MsSUFBQTtJQVhZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwJztcclxuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb259IGZyb20gJ2F1cmVsaWEtcm91dGVyJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICByb3V0ZXI6IFJvdXRlcjtcclxuXHJcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSc7XHJcbiAgICAgICAgY29uZmlnLm9wdGlvbnMucHVzaFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICBjb25maWcubWFwKFtcclxuICAgICAgICAgICAgeyByb3V0ZTogWycvJywgJ2hvbWUnXSwgbmFtZTogJ2hvbWUnLCBtb2R1bGVJZDogJ2NvbXBvbmVudHMvaG9tZScgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

define('components/catalog',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Catalog = (function () {
        function Catalog() {
            this.message = 'Hello world';
        }
        return Catalog;
    }());
    exports.Catalog = Catalog;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2F0YWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUdFO1lBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7UUFDL0IsQ0FBQztRQUNILGNBQUM7SUFBRCxDQU5BLEFBTUMsSUFBQTtJQU5ZLDBCQUFPIiwiZmlsZSI6ImNvbXBvbmVudHMvY2F0YWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDYXRhbG9nIHsgICAgXHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gJ0hlbGxvIHdvcmxkJztcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL0xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBTUEsQ0FBQztRQUFELFVBQUM7SUFBRCxDQU5BLEFBTUMsSUFBQTtJQU5ZLGtCQUFHIiwiZmlsZSI6ImVudGl0aWVzL0xvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMb2cge1xuICAgIGlkOiBudW1iZXJcbiAgICB1c2VyOiBzdHJpbmdcbiAgICBwcm9kdWN0OiBudW1iZXJcbiAgICBhY3Rpb246IHN0cmluZ1xuICAgIGRhdGU6IG51bWJlclxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL09yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFLQSxDQUFDO1FBQUQsWUFBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBTFksc0JBQUsiLCJmaWxlIjoiZW50aXRpZXMvT3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgT3JkZXIge1xuICAgIGlkIDogbnVtYmVyXHJcbiAgICB1c2VyIDogc3RyaW5nIFxyXG4gICAgZGlzY291bnRDb2RlIDogc3RyaW5nXHJcbiAgICBwcmljZSA6IG51bWJlciBcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL1Byb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQVdBLENBQUM7UUFBRCxjQUFDO0lBQUQsQ0FYQSxBQVdDLElBQUE7SUFYWSwwQkFBTyIsImZpbGUiOiJlbnRpdGllcy9Qcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByb2R1Y3Qge1xuICAgIGlkIDogbnVtYmVyICAgICAgICAgXHJcbiAgICBuYW1lIDogc3RyaW5nICAgICBcclxuICAgIGltYWdlIDogc3RyaW5nICAgIFxyXG4gICAgbG9jYXRpb24gOiBzdHJpbmdcclxuICAgIHByaWNlIDogbnVtYmVyICAgXHJcbiAgICBjYXRlZ29yeSA6IG51bWJlciAgIFxyXG4gICAgaXN2aXNpYmxlICA6IGJvb2xlYW4gXHJcbiAgICBhdXRob3IgICA6IHN0cmluZ1xyXG4gICAgZGlzY291bnQgOiBzdHJpbmdcclxuICAgIHRleHQgOiBzdHJpbmcgICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

define('text!app.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n\n  <header> \n    <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle Navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <i class=\"fa fa-home\"></i>\r\n        <span>${router.title}</span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\r\n          <a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"loader\" if.bind=\"router.isNavigating\">\r\n          <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\n  </header>\n \n  <div class=\"container\">\r\n    <router-view></router-view>\r\n  </div>\r\n</template>\r\n"; });
define('text!components/home.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n</template>"; });
define('text!components/catalog.html', ['module'], function(module) { module.exports = "<template>\r\n  <h1>${message}</h1>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map
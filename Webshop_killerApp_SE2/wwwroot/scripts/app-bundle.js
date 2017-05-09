define('app',["require", "exports", "bootstrap"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.items = [{
                    title: "Charmander",
                    text: "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail."
                }, {
                    title: "Squirtle",
                    text: "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth."
                }, {
                    title: "Bulbasaur",
                    text: "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON."
                }];
        }
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUNFO1lBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO29CQUNaLEtBQUssRUFBRSxZQUFZO29CQUNuQixJQUFJLEVBQUUsK0ZBQStGO2lCQUN0RyxFQUFDO29CQUNBLEtBQUssRUFBRSxVQUFVO29CQUNqQixJQUFJLEVBQUUsK0ZBQStGO2lCQUN0RyxFQUFDO29CQUNBLEtBQUssRUFBRSxXQUFXO29CQUNsQixJQUFJLEVBQUUsaUdBQWlHO2lCQUN4RyxDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0gsVUFBQztJQUFELENBYkEsQUFhQyxJQUFBO0lBYlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAnO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFt7XG4gICAgICB0aXRsZTogXCJDaGFybWFuZGVyXCIsXG4gICAgICB0ZXh0OiBcIk9idmlvdXNseSBwcmVmZXJzIGhvdCBwbGFjZXMuIFdoZW4gaXQgcmFpbnMsIHN0ZWFtIGlzIHNhaWQgdG8gc3BvdXQgZnJvbSB0aGUgdGlwIG9mIGl0cyB0YWlsLlwiXG4gICAgfSx7XG4gICAgICB0aXRsZTogXCJTcXVpcnRsZVwiLFxuICAgICAgdGV4dDogXCJBZnRlciBiaXJ0aCwgaXRzIGJhY2sgc3dlbGxzIGFuZCBoYXJkZW5zIGludG8gYSBzaGVsbC4gUG93ZXJmdWxseSBzcHJheXMgZm9hbSBmcm9tIGl0cyBtb3V0aC5cIlxuICAgIH0se1xuICAgICAgdGl0bGU6IFwiQnVsYmFzYXVyXCIsXG4gICAgICB0ZXh0OiBcIkEgc3RyYW5nZSBzZWVkIHdhcyBwbGFudGVkIG9uIGl0cyBiYWNrIGF0IGJpcnRoLiBUaGUgcGxhbnQgc3Byb3V0cyBhbmQgZ3Jvd3Mgd2l0aCB0aGlzIFBPS8OpTU9OLlwiXG4gICAgfV1cbiAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <h1>${message}</h1>\r\n  \r\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\r\n\r\n  <!-- next, lets drive the accordion example through data in our view model -->\r\n  <div class=\"container\">\r\n\r\n    <h1>Pokémon</h1>\r\n\r\n    <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n      <div class=\"panel panel-default\" repeat.for=\"item of items\">\r\n        <div class=\"panel-heading\" role=\"tab\" id=\"heading-${$index}\">\r\n          <h4 class=\"panel-title\">\r\n            <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse-${$index}\" aria-expanded=\"true\" aria-controls=\"collapse-${$index}\">\r\n              ${item.title}\r\n            </a>\r\n          </h4>\r\n        </div>\r\n        <div id=\"collapse-${$index}\" class=\"panel-collapse collapse ${$first && 'in'}\" role=\"tabpanel\" aria-labelledby=\"heading-${index}\">\r\n          <div class=\"panel-body\">\r\n            ${item.text}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map
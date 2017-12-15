webpackJsonp(["home.component"],{

/***/ "../../../../../src/app/lazy-routed-components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\r\n    list-style: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lazy-routed-components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col-md-6 col-md-offset-3\">\n        <form (submit)=\"search($event)\" class=\"col-md-12\">\n            <div class=\"form-group col-md-7\">\n                <input class=\"form-control\" placeholder=\"Search article by title...\" (change)=\"inputToProp($event)\" name=\"article\" id=\"article\" type=\"text\">\n            </div>\n            <div class=\"form-group\">\n                <input class=\"btn btn-primary col-md-4\" type=\"submit\" value=\"Search\">\n            </div>\n        </form>\n    </div>\n    <div class=\"col-md-12 \">\n        <div *ngIf=\"articles\">\n            <div class=\"text-center\">Found {{articles.length}} articles</div>\n            <app-articles [articles]=\"articles\"></app-articles>\n        </div>\n        <div *ngIf=\"!articles?.length\" class=\"col-md-12\">\n            <h1 >Categories</h1>\n            <ul>\n                <li *ngFor=\"let category of categories\"><a routerLink=\"/category/{{category}}\">{{category}}</a></li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lazy-routed-components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_category_service__ = __webpack_require__("../../../../../src/app/services/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_article_article_service__ = __webpack_require__("../../../../../src/app/services/article/article.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(user, Article, category) {
        this.user = user;
        this.Article = Article;
        this.category = category;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.user.current();
        this.category.getAll().subscribe(function (c) {
            if (!c['error']) {
                _this.categories = c;
            }
            else {
                _this.error = c['error'];
            }
        });
    };
    HomeComponent.prototype.search = function (e) {
        var _this = this;
        e.preventDefault();
        this.Article.query({ title: (this.searchQuery || '') + '$regex' }).subscribe(function (articles) {
            if (!articles['error']) {
                _this.articles = articles;
            }
        });
    };
    HomeComponent.prototype.inputToProp = function (e) {
        this.searchQuery = e.target.value;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/lazy-routed-components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lazy-routed-components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_article_article_service__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_2__services_category_category_service__["a" /* CategoryService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

});
//# sourceMappingURL=home.component.chunk.js.map
webpackJsonp(["articlesByParam.component"],{

/***/ "../../../../../src/app/lazy-routed-components/articlesByParam/articlesByParam.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lazy-routed-components/articlesByParam/articlesByParam.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"text-center col-md-12\">\n    <h1 *ngIf=\"category\" >Category: {{category}} <button *ngIf=\"currentUser()?.roles\" routerLink=\"{{'/edit/category/'+category}}\" class=\"btn btn-primary btn-xs\">Edit</button></h1>\n    </div>\n    <app-articles [articles]=\"articles\"></app-articles>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lazy-routed-components/articlesByParam/articlesByParam.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesByParamComponent", function() { return ArticlesByParamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_article_article_service__ = __webpack_require__("../../../../../src/app/services/article/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticlesByParamComponent = (function () {
    function ArticlesByParamComponent(route, Article, User) {
        this.route = route;
        this.Article = Article;
        this.User = User;
        this.currentUser = this.User.current;
        this.sub$ = [];
    }
    ArticlesByParamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub$.push(this.route.params.subscribe(function (params) {
            var queryProp = Object.keys(params)[0];
            var queryValue = params[queryProp];
            if (queryProp === 'category') {
                _this.category = queryValue;
            }
            if (params[queryProp]) {
                _this.sub$.push(_this.Article.query((_a = {}, _a[queryProp] = queryValue, _a)).subscribe(function (articles) {
                    if (!articles['error']) {
                        _this.articles = articles;
                    }
                    else {
                        _this.error = articles['error'];
                    }
                }));
            }
            var _a;
        }));
    };
    ArticlesByParamComponent.prototype.ngOnDestroy = function () {
        this.sub$.forEach(function (s) {
            s.unsubscribe();
        });
    };
    ArticlesByParamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-articles-by-param',
            template: __webpack_require__("../../../../../src/app/lazy-routed-components/articlesByParam/articlesByParam.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lazy-routed-components/articlesByParam/articlesByParam.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_article_article_service__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_3__services_user_user_service__["a" /* UserService */]])
    ], ArticlesByParamComponent);
    return ArticlesByParamComponent;
}());



/***/ })

});
//# sourceMappingURL=articlesByParam.component.chunk.js.map
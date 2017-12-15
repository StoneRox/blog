webpackJsonp(["articleDetails.component"],{

/***/ "../../../../../src/app/lazy-routed-components/articleDetails/articleDetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lazy-routed-components/articleDetails/articleDetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-article [article]=\"article\" [single]=\"true\"></app-article>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/lazy-routed-components/articleDetails/articleDetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDetailsComponent", function() { return ArticleDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_article_article_service__ = __webpack_require__("../../../../../src/app/services/article/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleDetailsComponent = (function () {
    function ArticleDetailsComponent(route, Article, router) {
        this.route = route;
        this.Article = Article;
        this.router = router;
        this.sub$ = [];
    }
    ArticleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub$.push(this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.sub$.push(_this.Article.getById(params['id']).subscribe(function (article) {
                    if (!article['error']) {
                        _this.article = article[0];
                    }
                    else {
                        _this.error = article['error'];
                    }
                }));
            }
        }));
    };
    ArticleDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub$.forEach(function (s) {
            s.unsubscribe();
        });
    };
    ArticleDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-article-details',
            template: __webpack_require__("../../../../../src/app/lazy-routed-components/articleDetails/articleDetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lazy-routed-components/articleDetails/articleDetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_article_article_service__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ArticleDetailsComponent);
    return ArticleDetailsComponent;
}());



/***/ })

});
//# sourceMappingURL=articleDetails.component.chunk.js.map
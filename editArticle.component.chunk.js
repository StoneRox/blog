webpackJsonp(["editArticle.component"],{

/***/ "../../../../../src/app/lazy-routed-components/editArticle/editArticle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lazy-routed-components/editArticle/editArticle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n    <h1 class=\"col-md-6 col-md-offset-3\">Edit Article</h1>\n    <article-form [article]=\"article\" [edit]=\"true\"></article-form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/lazy-routed-components/editArticle/editArticle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditArticleComponent", function() { return EditArticleComponent; });
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




var EditArticleComponent = (function () {
    function EditArticleComponent(route, User, Article, router) {
        this.route = route;
        this.User = User;
        this.Article = Article;
        this.router = router;
        this.sub$ = [];
    }
    EditArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.User.current();
        this.sub$.push(this.route.params.subscribe(function (params) {
            var queryValue = params['id'];
            if (queryValue) {
                _this.sub$.push(_this.Article.query({ _id: params['id'] }).subscribe(function (articles) {
                    if (!user['error']) {
                        if (articles[0]['author'] === user['username']
                            || (user['roles'] &&
                                (user['roles'].includes('Admin')
                                    || user['roles'].includes('Mod')))) {
                            _this.article = articles[0];
                        }
                        else {
                            _this.router.navigate(['/article/' + queryValue]);
                        }
                    }
                    else {
                        _this.error = user['error'];
                    }
                }));
            }
        }));
    };
    EditArticleComponent.prototype.ngOnDestroy = function () {
        this.sub$.forEach(function (s) {
            s.unsubscribe();
        });
    };
    EditArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-article',
            template: __webpack_require__("../../../../../src/app/lazy-routed-components/editArticle/editArticle.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lazy-routed-components/editArticle/editArticle.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__services_article_article_service__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditArticleComponent);
    return EditArticleComponent;
}());



/***/ })

});
//# sourceMappingURL=editArticle.component.chunk.js.map
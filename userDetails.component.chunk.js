webpackJsonp(["userDetails.component"],{

/***/ "../../../../../src/app/lazy-routed-components/userDetails/userDetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lazy-routed-components/userDetails/userDetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col-md-12\">\n        <app-user [user]=\"user\" [allowControl]=\"allowControl\"></app-user>\n        <div *ngIf=\"articles\">\n            <span>Published articles: {{articles?.length}}</span>\n            <div class=\"col-md-6 col-md-offset-3\" *ngFor=\"let article of articles\" >\n                <app-article [article]=\"article\"></app-article>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lazy-routed-components/userDetails/userDetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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




var UserDetailsComponent = (function () {
    function UserDetailsComponent(route, User, Article, router) {
        this.route = route;
        this.User = User;
        this.Article = Article;
        this.router = router;
        this.sub$ = [];
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub$.push(this.route.params.subscribe(function (params) {
            var queryProp = Object.keys(params)[0];
            var queryValue = params[queryProp];
            if (!queryProp) {
                try {
                    queryProp = '_id';
                    queryValue = _this.User.current()['_id'];
                }
                catch (e) {
                    delete localStorage['user'];
                    _this.router.navigate(['/login']);
                }
            }
            if (queryValue) {
                _this.sub$.push(_this.User.query((_a = {}, _a[queryProp] = queryValue, _a)).subscribe(function (user) {
                    if (!user['error']) {
                        _this.user = user[0];
                        _this.allowControl = _this.user.allowControl;
                        _this.sub$.push(_this.Article.query({ author: user[0]['username'] }).subscribe(function (articles) {
                            if (!user['error']) {
                                _this.articles = articles;
                            }
                            else {
                                _this.error = user['error'];
                            }
                        }));
                    }
                    else {
                        _this.error = user['error'];
                    }
                }));
            }
            var _a;
        }));
    };
    UserDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub$.forEach(function (s) {
            s.unsubscribe();
        });
    };
    UserDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userDetails',
            template: __webpack_require__("../../../../../src/app/lazy-routed-components/userDetails/userDetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lazy-routed-components/userDetails/userDetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_article_article_service__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ })

});
//# sourceMappingURL=userDetails.component.chunk.js.map
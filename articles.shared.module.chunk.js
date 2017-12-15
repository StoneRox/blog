webpackJsonp(["articles.shared.module"],{

/***/ "../../../../../src/app/modules/shared/articles.shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedArticlesModule", function() { return SharedArticlesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_shared_module__ = __webpack_require__("../../../../../src/app/modules/shared/article.shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_articles_articles_component__ = __webpack_require__("../../../../../src/app/shared-components/articles/articles.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedArticlesModule = (function () {
    function SharedArticlesModule() {
    }
    SharedArticlesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__shared_components_articles_articles_component__["ArticlesComponent"]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__shared_components_articles_articles_component__["ArticlesComponent"], __WEBPACK_IMPORTED_MODULE_1__article_shared_module__["SharedArticleModule"]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__article_shared_module__["SharedArticleModule"]]
        })
    ], SharedArticlesModule);
    return SharedArticlesModule;
}());



/***/ })

});
//# sourceMappingURL=articles.shared.module.chunk.js.map
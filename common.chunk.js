webpackJsonp(["common"],{

/***/ "../../../../../src/app/modules/shared/article.shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedArticleModule", function() { return SharedArticleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_article_article_component__ = __webpack_require__("../../../../../src/app/shared-components/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipe_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe/pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedArticleModule = (function () {
    function SharedArticleModule() {
    }
    SharedArticleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__shared_components_article_article_component__["ArticleComponent"]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__shared_components_article_article_component__["ArticleComponent"], __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_4__pipe_pipe_module__["PipeModule"]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_4__pipe_pipe_module__["PipeModule"]]
        })
    ], SharedArticleModule);
    return SharedArticleModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared-components/article/article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    margin-right: 5px;\r\n}\r\ndiv:first-of-type{\r\n    margin-bottom: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared-components/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"{{single?'col-md-6 col-md-offset-3':'col-md-12'}}\">\n    <h1 class=\"text-center\">{{article?.title}}</h1>\n    <img class=\"width-100\" *ngIf=\"article && single && article?.imageUrl\" src=\"{{article?.imageUrl}}\" alt=\"\">\n    <div>{{single?article?.content:article?.content | slice:0:300}}\n        <a *ngIf=\"!single\" routerLink=\"/article/{{article?._id}}\">Read More</a>\n    </div>\n    <div *ngIf=\"article && single\">\n        Tags:\n        <a *ngFor=\"let tag of article?.tags\" routerLink=\"/tag/{{tag}}\">{{tag}}</a>\n    </div>\n    <div *ngIf=\"article?.author\">\n        Author: <a routerLink=\"/user/{{article.author}}\">{{article?.author}}</a>\n    </div>\n    <div *ngIf=\"single\">\n        Date published: {{article?.date | date: 'dd/MM/yyyy'}}\n    </div>\n    <div *ngIf=\"article?.allowControl && single\">\n        <button (click)=\"removeArticle()\">Delete</button>\n        <button routerLink=\"/edit/article/{{article?._id}}\">Edit</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared-components/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
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



var ArticleComponent = (function () {
    function ArticleComponent(Article, router) {
        this.Article = Article;
        this.router = router;
        this.sub$ = [];
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent.prototype.removeArticle = function () {
        var _this = this;
        this.sub$.push(this.Article.remove(this.article['_id']).subscribe(function (res) {
            if (!res['error']) {
                _this.router.navigate(['/']);
            }
        }));
    };
    ArticleComponent.prototype.ngOnDestroy = function () {
        this.sub$.forEach(function (s) {
            s.unsubscribe();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ArticleComponent.prototype, "article", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ArticleComponent.prototype, "single", void 0);
    ArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-article',
            template: __webpack_require__("../../../../../src/app/shared-components/article/article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared-components/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_article_article_service__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared-components/articleForm/articleForm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div:first-of-type{\r\n    margin-bottom: 20px;\r\n}\r\nimg{\r\n    display: none;\r\n}\r\n.show{\r\n    display: initial;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared-components/articleForm/articleForm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n    <div class=\"alert alert-success\" *ngIf=\"messageOnSuccess\">{{messageOnSuccess}}</div>\n    <form (ngSubmit)=\"save()\" [formGroup]=\"articleForm\" class=\"col-md-6 col-md-offset-3\">\n        <div  *ngFor=\"let controlName of controlsNames\" class=\"form-group \" [ngClass]=\"{'has-error': error.get(controlName)}\">\n            <label for=\"{{controlName}}\">{{controlName | splitByCapital | capitalize}}</label>\n            <input *ngIf=\"!['content','category'].includes(controlName)\" type=\"text\" class=\"form-control\"\n                   id=\"{{controlName}}\"\n                   formControlName=\"{{controlName}}\"\n                   >\n            <button type=\"button\" *ngIf=\"controlName==='imageUrl'\" (click)=\"showHideImage($event)\">{{showImage?'Hide':'Show'}} Image</button>\n            <img [class.show]=\"showImage\" *ngIf=\"articleForm?.value?.imageUrl&&controlName==='imageUrl'\" class=\"img-responsive\" src=\"{{articleForm.value[controlName]}}\" alt=\"\">\n            <textarea *ngIf=\"controlName === 'content'\" type=\"text\" class=\"form-control width-100\"\n                   formControlName=\"{{controlName}}\"\n            ></textarea>\n            <select class=\"form-control text-centered\" *ngIf=\"controlName==='category'\" name=\"{{controlName}}\" id=\"{{controlName}}\" formControlName=\"{{controlName}}\">\n                <option *ngFor=\"let categ of categories;let i = index\" selected=\"{{category===categ||i===0?'selected':''}}\" value=\"{{categ}}\">{{categ}}\n                </option>\n            </select>\n            <div class=\"alert alert-danger absolute\" *ngIf=\"error.get(controlName)\">\n                {{error.get(controlName) | splitByCapital:true | capitalize}}\n            </div>\n        </div>\n        <div>\n            <button type=\"submit\" class=\"btn btn-success\">{{edit?'Edit':'Post'}} article</button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared-components/articleForm/articleForm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleFormComponent", function() { return ArticleFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_input_error_messages_model__ = __webpack_require__("../../../../../src/app/models/input-error-messages.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_form_helper__ = __webpack_require__("../../../../../src/app/utils/form-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_category_category_service__ = __webpack_require__("../../../../../src/app/services/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_article_article_service__ = __webpack_require__("../../../../../src/app/services/article/article.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ArticleFormComponent = (function () {
    function ArticleFormComponent(fb, router, Category, Article, route) {
        this.fb = fb;
        this.router = router;
        this.Category = Category;
        this.Article = Article;
        this.route = route;
        this.error = {
            get: function (prop) {
                return this[prop];
            }
        };
        this.errorMessages = __WEBPACK_IMPORTED_MODULE_3__models_input_error_messages_model__["a" /* default */];
        this.showImage = false;
        this.sub$ = [];
    }
    ArticleFormComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.articleForm && changes && changes.article && changes.article.currentValue) {
            Object.keys(this.articleForm.controls).forEach(function (key) {
                var value = changes.article.currentValue[key];
                if (key === 'tags') {
                    value = value.join(', ');
                }
                _this.articleForm.controls[key].setValue(value);
            });
        }
    };
    ArticleFormComponent.prototype.sendErrorMessage = function (propName, c, submit) {
        if ((c.dirty && c.errors) || (submit && c.errors)) {
            for (var _i = 0, _a = Object.keys(c.errors); _i < _a.length; _i++) {
                var key = _a[_i];
                if (this.errorMessages[key]) {
                    this.error[propName] = this.errorMessages[key](propName, c.errors[key], key);
                    break;
                }
            }
        }
        else {
            if (this.error[propName] !== 'Invalid image url')
                delete this.error[propName];
        }
    };
    ArticleFormComponent.prototype.save = function () {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_form_helper__["b" /* trimFormInputs */])(this.articleForm);
        if (this.articleForm.invalid) {
            this.controlsNames.forEach(function (name) {
                _this.sendErrorMessage(name, _this.articleForm.controls[name], true);
            });
        }
        else {
            var reqBody_1 = this.articleForm.value;
            if (this.edit) {
                this.sub$.push(this.route.params.subscribe(function (params) {
                    if (!params['id']) {
                        _this.router.navigate(['/']);
                    }
                    reqBody_1['id'] = params['id'];
                }));
            }
            this.sub$.push(this.Article[this.edit ? 'edit' : 'create'](reqBody_1).subscribe(function (res) {
                if (res['error']) {
                    console.log(res['error']);
                }
                else {
                    _this.messageOnSuccess =  true ? 'edited' : 'sent';
                    _this.articleForm.reset();
                    setTimeout(function () { _this.router.navigate(['/article/' + res['_id']]); }, _this.edit ? 100 : 1);
                    setTimeout(function () {
                        _this.messageOnSuccess = '';
                    }, 3000);
                }
            }));
        }
    };
    ArticleFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub$.push(this.Category.getAll().subscribe(function (categories) {
            if (!categories['error']) {
                _this.categories = categories;
                _this.sub$.concat(Object.keys(_this.articleForm.controls).map(function (key) {
                    var control = _this.articleForm.get(key);
                    _this.articleForm.controls['category'].setValue(categories[0]);
                    return control.valueChanges
                        .debounceTime(900)
                        .subscribe(function () {
                        _this.sendErrorMessage(key, control);
                    });
                }));
            }
        }));
        this.articleForm = this.fb.group({
            category: ['', Object(__WEBPACK_IMPORTED_MODULE_4__utils_form_helper__["a" /* generateValidators */])(true)],
            title: ['', Object(__WEBPACK_IMPORTED_MODULE_4__utils_form_helper__["a" /* generateValidators */])(true, '[a-zA-Z0-9. !?-]+', 4, 60)],
            imageUrl: ['', Object(__WEBPACK_IMPORTED_MODULE_4__utils_form_helper__["a" /* generateValidators */])(false, '', 0, 200)],
            content: ['', Object(__WEBPACK_IMPORTED_MODULE_4__utils_form_helper__["a" /* generateValidators */])(true, '', 5, 5000)],
            tags: ['']
        });
        this.controlsNames = Object.keys(this.articleForm.controls);
    };
    ArticleFormComponent.prototype.ngOnDestroy = function () {
        this.sub$.forEach(function (s) {
            s.unsubscribe();
        });
    };
    ArticleFormComponent.prototype.imageError = function (e) {
        if (e === 'clear') {
            delete this.error['imageUrl'];
        }
        else {
            this.error['imageUrl'] = 'Invalid image url';
        }
    };
    ArticleFormComponent.prototype.showHideImage = function () {
        this.showImage = !this.showImage;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ArticleFormComponent.prototype, "article", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ArticleFormComponent.prototype, "edit", void 0);
    ArticleFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'article-form',
            template: __webpack_require__("../../../../../src/app/shared-components/articleForm/articleForm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared-components/articleForm/articleForm.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__services_category_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_7__services_article_article_service__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], ArticleFormComponent);
    return ArticleFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared-components/articles/articles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared-components/articles/articles.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let article of articles\" >\n    <div class=\"col-md-6 col-md-offset-3\">\n        <app-article [article]=\"article\"></app-article>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared-components/articles/articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticlesComponent = (function () {
    function ArticlesComponent() {
        this.sub$ = [];
    }
    ArticlesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ArticlesComponent.prototype, "articles", void 0);
    ArticlesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-articles',
            template: __webpack_require__("../../../../../src/app/shared-components/articles/articles.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared-components/articles/articles.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared-components/categoryForm/categoryForm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mx{\r\n    margin: 0 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared-components/categoryForm/categoryForm.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"save($event)\" class=\"col-md-12\">\n    <div class=\"form-group col-md-7\">\n        <input class=\"form-control\" placeholder=\"Category name\" (input)=\"inputToProp($event)\" name=\"category\" id=\"category\" type=\"text\" value=\"{{category}}\">\n        <div class=\"alert alert-danger absolute\" *ngIf=\"error\">\n            {{error}}\n        </div>\n    </div>\n\n    <div *ngIf=\"category && !error\" >\n        <input class=\"btn btn-primary mx col-md-2 align-top\" type=\"submit\" value=\"{{edit?'Edit':'Create'}}\">\n    </div>\n    <div *ngIf=\"edit\">\n        <input class=\"btn btn-danger mx col-md-2 align-top\" type=\"button\" (click)=\"remove()\" value=\"Delete\">\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/shared-components/categoryForm/categoryForm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryFormComponent", function() { return CategoryFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_category_service__ = __webpack_require__("../../../../../src/app/services/category/category.service.ts");
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



var CategoryFormComponent = (function () {
    function CategoryFormComponent(Category, router, route) {
        this.Category = Category;
        this.router = router;
        this.route = route;
        this.sub$ = [];
    }
    CategoryFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.edit) {
            this.sub$.push(this.route.params.subscribe(function (params) {
                _this.params = params;
            }));
        }
    };
    CategoryFormComponent.prototype.ngOnDestroy = function () {
        this.sub$.forEach(function (s) {
            s.unsubscribe();
        });
    };
    CategoryFormComponent.prototype.inputToProp = function (e) {
        var _this = this;
        this.category = e.target.value;
        setTimeout(function () {
            if (!_this.category) {
                _this.error = 'The category name is required';
            }
            else if (_this.category && !_this.category.match(/^[a-zA-Z-]{3,}$/)) {
                _this.error = 'The category name should be at least 3 latin letters and can contain "-"';
            }
            else {
                _this.error = '';
            }
        }, 1000);
    };
    CategoryFormComponent.prototype.remove = function () {
        var _this = this;
        if (this.params && this.params['name']) {
            this.sub$.push(this.Category.remove(this.params['name']).subscribe(function (res) {
                if (res['error']) {
                    _this.error = res['error'];
                    setTimeout(function () {
                        _this.error = '';
                    }, 3000);
                }
                else {
                    _this.router.navigate(['/']);
                }
            }));
        }
    };
    CategoryFormComponent.prototype.save = function (e) {
        var _this = this;
        e.preventDefault();
        if (this.category && !this.error) {
            if (this.edit && this.params) {
                var queryProp = Object.keys(this.params)[0];
                var queryValue = this.params[queryProp];
                if (queryValue) {
                    this.sub$.push(this.Category.edit(queryValue, { name: this.category }).subscribe(function (res) {
                        if (!res['error']) {
                            _this.router.navigate(['/']);
                        }
                        else {
                            _this.error = res['error'];
                            setTimeout(function () {
                                _this.error = '';
                            }, 3000);
                        }
                    }));
                }
            }
            else {
                this.sub$.push(this.Category.create({ name: this.category }).subscribe(function (res) {
                    if (!res['error']) {
                        _this.router.navigate(['/']);
                    }
                    else {
                        _this.error = res['error'];
                        setTimeout(function () {
                            _this.error = '';
                        }, 3000);
                    }
                }));
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CategoryFormComponent.prototype, "category", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CategoryFormComponent.prototype, "edit", void 0);
    CategoryFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category-form',
            template: __webpack_require__("../../../../../src/app/shared-components/categoryForm/categoryForm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared-components/categoryForm/categoryForm.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CategoryFormComponent);
    return CategoryFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared-components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".avatar{\r\n    height: 100px;\r\n    width: 100px;\r\n}\r\n.my{\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared-components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n    <div>\n        <div class=\"col-md-6 clearfix\">\n            <img (error)=\"imageError()\" (load)=\"imageError('clear')\" class=\"img-thumbnail avatar pull-right\" src=\"{{newAvatarUrl||user.attr?.avatar||'./assets/avatar.png'}}\" alt=\"\">\n        </div>\n        <div  class=\"col-md-6\">\n            <h3>{{user.username}}</h3>\n        </div>\n        <div *ngIf=\"allowControl\" class=\"col-md-12\">\n            <div class=\"col-md-6 clearfix\">\n                <button (click)=\"editAvatar()\" class=\"btn btn-primary btn-xs pull-right my\">{{avatarInEdit?'Cancel':'Change avatar'}}</button>\n            </div>\n        </div>\n        <div *ngIf=\"allowControl&&avatarInEdit\" class=\"col-md-12\">\n            <form (submit)=\"save($event)\" class=\"col-md-6 col-md-offset-3\">\n                <div class=\"form-group col-md-7\">\n                    <input class=\"form-control\" placeholder=\"Link to image url\" (input)=\"inputToProp($event)\" name=\"avatar\" id=\"avatar\" type=\"text\">\n                    <div class=\"alert alert-danger absolute\" *ngIf=\"error\">\n                        {{error}}\n                    </div>\n                </div>\n                <div *ngIf=\"!error\" class=\"form-group\">\n                    <input class=\"btn btn-primary col-md-4\" type=\"submit\" value=\"Save\">\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared-components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(User) {
        this.User = User;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.editAvatar = function () {
        this.avatarInEdit = !this.avatarInEdit;
        this.newAvatarUrl = '';
    };
    UserComponent.prototype.inputToProp = function (e) {
        var _this = this;
        setTimeout(function () {
            _this.newAvatarUrl = e.target.value;
        }, 1000);
    };
    UserComponent.prototype.imageError = function (e) {
        if (e === 'clear') {
            delete this.error;
        }
        else {
            this.error = 'Invalid image url';
        }
    };
    UserComponent.prototype.save = function (e) {
        var _this = this;
        e.preventDefault();
        if (!this.error) {
            this.User.edit(this.user['_id'], { attr: { avatar: this.newAvatarUrl } }).subscribe(function (res) {
                if (!res['error']) {
                    _this.user = res;
                    _this.avatarInEdit = false;
                    _this.newAvatarUrl = '';
                }
                else {
                    _this.error = res['error'];
                    setTimeout(function () {
                        _this.error = '';
                    }, 3000);
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], UserComponent.prototype, "allowControl", void 0);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/shared-components/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared-components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ })

});
//# sourceMappingURL=common.chunk.js.map

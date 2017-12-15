webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app lazy recursive ^\\.\\/.*\\.component$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.component": [
		"../../../../../src/app/app.component.ts"
	],
	"./components/login/login.component": [
		"../../../../../src/app/components/login/login.component.ts"
	],
	"./components/navbar/navbar.component": [
		"../../../../../src/app/components/navbar/navbar.component.ts"
	],
	"./components/notfound/notfound.component": [
		"../../../../../src/app/components/notfound/notfound.component.ts"
	],
	"./components/register/register.component": [
		"../../../../../src/app/components/register/register.component.ts"
	],
	"./lazy-routed-components/articleDetails/articleDetails.component": [
		"../../../../../src/app/lazy-routed-components/articleDetails/articleDetails.component.ts",
		"articleDetails.component"
	],
	"./lazy-routed-components/articlesByParam/articlesByParam.component": [
		"../../../../../src/app/lazy-routed-components/articlesByParam/articlesByParam.component.ts",
		"articlesByParam.component"
	],
	"./lazy-routed-components/categoryControl/categoryControl.component": [
		"../../../../../src/app/lazy-routed-components/categoryControl/categoryControl.component.ts",
		"categoryControl.component"
	],
	"./lazy-routed-components/createArticle/createArticle.component": [
		"../../../../../src/app/lazy-routed-components/createArticle/createArticle.component.ts",
		"createArticle.component"
	],
	"./lazy-routed-components/editArticle/editArticle.component": [
		"../../../../../src/app/lazy-routed-components/editArticle/editArticle.component.ts",
		"editArticle.component"
	],
	"./lazy-routed-components/home/home.component": [
		"../../../../../src/app/lazy-routed-components/home/home.component.ts",
		"home.component"
	],
	"./lazy-routed-components/userDetails/userDetails.component": [
		"../../../../../src/app/lazy-routed-components/userDetails/userDetails.component.ts",
		"userDetails.component"
	],
	"./lazy-routed-components/users/users.component": [
		"../../../../../src/app/lazy-routed-components/users/users.component.ts",
		"users.component"
	],
	"./shared-components/article/article.component": [
		"../../../../../src/app/shared-components/article/article.component.ts",
		"common"
	],
	"./shared-components/articleForm/articleForm.component": [
		"../../../../../src/app/shared-components/articleForm/articleForm.component.ts",
		"common"
	],
	"./shared-components/articles/articles.component": [
		"../../../../../src/app/shared-components/articles/articles.component.ts",
		"common"
	],
	"./shared-components/categoryForm/categoryForm.component": [
		"../../../../../src/app/shared-components/categoryForm/categoryForm.component.ts",
		"common"
	],
	"./shared-components/user/user.component": [
		"../../../../../src/app/shared-components/user/user.component.ts",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/app lazy recursive ^\\.\\/.*\\.component$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer{\r\n    height: 10px;\r\n    vertical-align: baseline;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export app */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules__ = __webpack_require__("../../../../../src/app/modules/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interceptors_auth_interceptor__ = __webpack_require__("../../../../../src/app/interceptors/auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_pipe_pipe_module__ = __webpack_require__("../../../../../src/app/modules/pipe/pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var app = {
    declarations: [
        __WEBPACK_IMPORTED_MODULE_2__app_component__["AppComponent"],
    ]
        .concat(__WEBPACK_IMPORTED_MODULE_3__components__["b" /* default */]),
    imports: [
        __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
        __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
        __WEBPACK_IMPORTED_MODULE_9__modules_pipe_pipe_module__["PipeModule"]
    ].concat(__WEBPACK_IMPORTED_MODULE_4__modules__["a" /* default */]),
    providers: [
        {
            provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
            useClass: __WEBPACK_IMPORTED_MODULE_8__interceptors_auth_interceptor__["a" /* AuthInterceptor */],
            multi: true
        },
    ].concat(__WEBPACK_IMPORTED_MODULE_5__services__["a" /* default */]),
    bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["AppComponent"]],
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])(app)
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Components; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notfound_notfound_component__ = __webpack_require__("../../../../../src/app/components/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");




var Components = {
    RegisterComponent: __WEBPACK_IMPORTED_MODULE_0__register_register_component__["RegisterComponent"],
    NotfoundComponent: __WEBPACK_IMPORTED_MODULE_1__notfound_notfound_component__["NotfoundComponent"],
    LoginComponent: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["LoginComponent"],
    NavbarComponent: __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["NavbarComponent"],
};
var componentsArray = Object.values(Components);

/* harmony default export */ __webpack_exports__["b"] = (componentsArray);


/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"alert alert-success\" *ngIf=\"messageOnSuccess\">{{messageOnSuccess}}</div>\n    <div class=\"col-md-6 col-md-offset-3\">\n        <h1>Login</h1>\n        <form (ngSubmit)=\"save()\" [formGroup]=\"loginForm\" >\n            <div *ngFor=\"let controlName of controlsNames\" class=\"form-group\" [ngClass]=\"{'has-error': error.get(controlName)}\">\n                <label for=\"{{controlName}}\">{{controlName | splitByCapital | capitalize}}</label>\n                <input type=\"{{controlName==='password'?'password':'text'}}\"\n                       [class.form-control]=\"controlName!=='loginAfterRegister'\" id=\"{{controlName}}\"\n                       formControlName=\"{{controlName}}\"\n                       (click)=\"controlName==='loginAfterRegister'?checkBoxChangeValue($event):undefined\">\n                <div class=\"alert alert-danger absolute\" *ngIf=\"error.get(controlName)\">\n                    {{error.get(controlName) | splitByCapital:true | capitalize}}\n                </div>\n            </div>\n            <div>\n                <button type=\"submit\" class=\"btn btn-success\">Sign in</button>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_input_error_messages_model__ = __webpack_require__("../../../../../src/app/models/input-error-messages.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_form_helper__ = __webpack_require__("../../../../../src/app/utils/form-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = (function () {
    function LoginComponent(fb, auth, user, router) {
        this.fb = fb;
        this.auth = auth;
        this.user = user;
        this.router = router;
        this.error = {
            get: function (prop) {
                return this[prop];
            }
        };
        this.errorMessages = __WEBPACK_IMPORTED_MODULE_3__models_input_error_messages_model__["a" /* default */];
    }
    LoginComponent.prototype.sendErrorMessage = function (propName, c, submit) {
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
            delete this.error[propName];
        }
    };
    LoginComponent.prototype.save = function () {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_form_helper__["b" /* trimFormInputs */])(this.loginForm);
        if (this.loginForm.invalid) {
            this.controlsNames.forEach(function (name) {
                _this.sendErrorMessage(name, _this.loginForm.controls[name], true);
            });
        }
        else {
            var reqBody = { username: this.loginForm.value.username, password: this.loginForm.value.password };
            this.sub$.push(this.auth.login(reqBody).subscribe(function (res) {
                if (res['error']) {
                    _this.error['username'] = "Invalid username or password";
                    _this.error['password'] = "Invalid username or password";
                    setTimeout(function () {
                        delete _this.error['username'];
                        delete _this.error['password'];
                    }, 3000);
                }
                else {
                    _this.loginForm.reset();
                    _this.user.remember(res);
                    _this.router.navigate(['/']);
                }
            }));
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.fb.group({
            username: ['', Object(__WEBPACK_IMPORTED_MODULE_4__utils_form_helper__["a" /* generateValidators */])(true, '[a-zA-Z0-9]+', 4, 14)],
            password: ['', Object(__WEBPACK_IMPORTED_MODULE_4__utils_form_helper__["a" /* generateValidators */])(true, '[a-zA-Z0-9]+', 5, 12)]
        });
        this.sub$ = Object.keys(this.loginForm.controls).map(function (key) {
            var control = _this.loginForm.get(key);
            return control.valueChanges
                .debounceTime(900)
                .subscribe(function () {
                _this.sendErrorMessage(key, control);
            });
        });
        this.controlsNames = Object.keys(this.loginForm.controls);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.sub$.forEach(function (s) {
            s.unsubscribe();
        });
    };
    LoginComponent.prototype.checkBoxChangeValue = function (e) {
        this.loginForm.controls[e.target.id].setValue((!eval(e.target.value)).toString());
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__services_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul li{\r\n    display: inline-block;\r\n    list-style: none;\r\n}\r\n.float-right{\r\n    float: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" routerLink=\"/\">Home</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\" *ngIf=\"currentUser()['username']\">\n                <li><a routerLink=\"/users\">Users</a></li>\n                <li><a routerLink=\"/create/article\">Create Article</a></li>\n                <li *ngIf=\"currentUser()['roles']\"><a routerLink=\"/create/category\">Create Category</a></li>\n                <li><a routerLink=\"/user/{{currentUser()['username']}}\">{{currentUser()['username']}}</a></li>\n                <li><a routerLink=\"/login\" (click)=\"logout()\">Logout</a></li>\n            </ul>\n            <ul *ngIf=\"!currentUser()['username']\" class=\"nav navbar-nav navbar-right\">\n                <li><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span>Login</a></li>\n                <li><a routerLink=\"/register\"><span class=\"glyphicon glyphicon-user\"></span>Register</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(user, auth, router) {
        this.user = user;
        this.auth = auth;
        this.router = router;
        this.currentUser = this.user.current;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (res) {
            if (!res['error']) {
                delete localStorage.user;
                _this.router.navigate(['/login']);
            }
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/notfound/notfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"col-md-6 col-md-offset-3\">ERROR 404 NOT FOUND</h1>\n"

/***/ }),

/***/ "../../../../../src/app/components/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
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

var NotfoundComponent = (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notfound',
            template: __webpack_require__("../../../../../src/app/components/notfound/notfound.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".absolute{\r\n    position: absolute;\r\n    z-index: 100;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col-md-6 col-md-offset-3\">\n        <div class=\"alert alert-success\" *ngIf=\"messageOnSuccess\">{{messageOnSuccess}}</div>\n        <h1>Register</h1>\n        <form (ngSubmit)=\"save()\" [formGroup]=\"registerForm\" >\n            <div *ngFor=\"let controlName of controlsNames\" class=\"form-group\" [ngClass]=\"{'has-error': error.get(controlName)}\">\n                <label for=\"{{controlName}}\">{{controlName | splitByCapital | capitalize}}</label>\n                <input type=\"{{controlName==='loginAfterRegister'?'checkbox':['password','repeatPassword'].includes(controlName)?'password':'text'}}\"\n                       [class.form-control]=\"controlName!=='loginAfterRegister'\" id=\"{{controlName}}\"\n                       formControlName=\"{{controlName}}\"\n                       (click)=\"controlName==='loginAfterRegister'?checkBoxChangeValue($event):undefined\">\n                <div class=\"alert alert-danger absolute\" *ngIf=\"error.get(controlName)\">\n                    {{error.get(controlName) | splitByCapital:true | capitalize}}\n                </div>\n            </div>\n            <div>\n                <button type=\"submit\" class=\"btn btn-success\">Sign in</button>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_input_error_messages_model__ = __webpack_require__("../../../../../src/app/models/input-error-messages.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_form_helper__ = __webpack_require__("../../../../../src/app/utils/form-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = (function () {
    function RegisterComponent(fb, auth, user, router) {
        this.fb = fb;
        this.auth = auth;
        this.user = user;
        this.router = router;
        this.error = {
            get: function (prop) {
                return this[prop];
            }
        };
        this.errorMessages = __WEBPACK_IMPORTED_MODULE_3__models_input_error_messages_model__["a" /* default */];
    }
    RegisterComponent.prototype.sendErrorMessage = function (propName, c, submit) {
        if (['password', 'repeatPassword'].includes(propName)) {
            if (this.error['repeatPassword'] === 'The passwords should match') {
                delete this.error['repeatPassword'];
            }
            var controls = this.registerForm.controls;
            if (controls.password.value !== controls.repeatPassword.value) {
                this.error['repeatPassword'] = 'The passwords should match';
            }
        }
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
            if (propName === 'repeatPassword' && this.error['repeatPassword'] === 'The passwords should match') {
                return;
            }
            delete this.error[propName];
        }
    };
    RegisterComponent.prototype.save = function () {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_form_helper__["b" /* trimFormInputs */])(this.registerForm);
        if (this.registerForm.invalid) {
            this.controlsNames.forEach(function (name) {
                _this.sendErrorMessage(name, _this.registerForm.controls[name], true);
            });
        }
        else {
            var reqBody = { username: this.registerForm.value.username, password: this.registerForm.value.password };
            var autologin_1 = this.registerForm.value.loginAfterRegister;
            this.sub$.push(this.auth.register(reqBody).subscribe(function (res) {
                if (res['error']) {
                    _this.error['username'] = res['error'];
                    setTimeout(function () {
                        delete _this.error['username'];
                    }, 3000);
                }
                else {
                    _this.messageOnSuccess = 'Register success';
                    setTimeout(function () {
                        _this.messageOnSuccess = '';
                    }, 3000);
                    _this.registerForm.reset({ loginAfterRegister: _this.registerForm.controls.loginAfterRegister.value });
                    if (autologin_1) {
                        _this.user.remember(res);
                        _this.router.navigate(['/']);
                    }
                }
            }));
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this.fb.group({
            username: ['', Object(__WEBPACK_IMPORTED_MODULE_4__utils_form_helper__["a" /* generateValidators */])(true, '[a-zA-Z0-9]+', 4, 14)],
            password: ['', Object(__WEBPACK_IMPORTED_MODULE_4__utils_form_helper__["a" /* generateValidators */])(true, '[a-zA-Z0-9]+', 5, 12)],
            repeatPassword: ['', Object(__WEBPACK_IMPORTED_MODULE_4__utils_form_helper__["a" /* generateValidators */])(true, '[a-zA-Z0-9]+', 5, 12)],
            loginAfterRegister: false,
        });
        this.sub$ = Object.keys(this.registerForm.controls).map(function (key) {
            var control = _this.registerForm.get(key);
            return control.valueChanges
                .debounceTime(900)
                .subscribe(function () {
                _this.sendErrorMessage(key, control);
            });
        });
        this.controlsNames = Object.keys(this.registerForm.controls);
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.sub$.forEach(function (s) {
            s.unsubscribe();
        });
    };
    RegisterComponent.prototype.checkBoxChangeValue = function (e) {
        this.registerForm.controls[e.target.id].setValue((!eval(e.target.value)).toString());
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__services_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/interceptors/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthInterceptor = (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        req = req.clone({
            headers: (function () {
                var headers = req.headers.set("Content-Type", "application/json");
                if (!req.url.endsWith('login') && !req.url.endsWith('register')) {
                    try {
                        headers = headers.set("authorization", JSON.parse(localStorage.user).authtoken);
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
                return headers;
            })(),
            body: (function () {
                if (req.body && req.method !== 'GET') {
                    return JSON.stringify(req.body);
                }
                return "{}";
            })()
        });
        return next.handle(req);
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/models/input-error-messages.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var InputErrorMessagesModel = (function () {
    function InputErrorMessagesModel() {
    }
    InputErrorMessagesModel.prototype.maxlength = function (propName, error) {
        return "The " + propName + " should be maximum " + error['requiredLength'] + " characters long";
    };
    InputErrorMessagesModel.prototype.minlength = function (propName, error) {
        return "The " + propName + " should be minimum " + error['requiredLength'] + " characters long";
    };
    InputErrorMessagesModel.prototype.max = function (propName, error) {
        return "The " + propName + " should be maximum " + error['max'];
    };
    InputErrorMessagesModel.prototype.min = function (propName, error) {
        return "The " + propName + " should be minimum " + error['min'];
    };
    InputErrorMessagesModel.prototype.pattern = function (propName, error) {
        switch (error['requiredPattern']) {
            case '^\\+?\\d+$':
                return "The " + propName + " should contain only numbers and could begin with \"+\"";
            case "^\\d+$":
                return "The " + propName + " should be number";
            case "^[a-zA-Z]+$":
                return "The " + propName + " should contain only latin letters";
            case "^[a-zA-Z0-9]+$":
                return "The " + propName + " should contain only numbers and latin letters";
            case "^[a-zA-Z0-9. ]+$":
                return "The " + propName + " should contain only numbers, latin letters, \".\" and space";
            case "^[a-zA-Z0-9. !?-]+$":
                return "The " + propName + " should contain only numbers, latin letters, \".\",\"-\",\"!\",\"?\" and space";
            case "^[a-zA-Z ]+$":
                return "The " + propName + " should contain only latin letters and space";
            default:
                console.log(error['requiredPattern']);
                break;
        }
    };
    InputErrorMessagesModel.prototype.required = function (propName, error, key) {
        if (key === 'required') {
            return "The " + propName + " is required";
        }
    };
    InputErrorMessagesModel.prototype.email = function (propName, error, key) {
        if (key === 'email') {
            return "The " + propName + " is not valid";
        }
    };
    return InputErrorMessagesModel;
}());
/* harmony default export */ __webpack_exports__["a"] = (new InputErrorMessagesModel());


/***/ }),

/***/ "../../../../../src/app/modules lazy recursive ^\\.\\/.*\\.shared\\.module$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./shared/article.shared.module": [
		"../../../../../src/app/modules/shared/article.shared.module.ts",
		"common"
	],
	"./shared/articleForm.shared.module": [
		"../../../../../src/app/modules/shared/articleForm.shared.module.ts",
		"common",
		"articleForm.shared.module"
	],
	"./shared/articles.shared.module": [
		"../../../../../src/app/modules/shared/articles.shared.module.ts",
		"common",
		"articles.shared.module"
	],
	"./shared/categoryForm.shared.module": [
		"../../../../../src/app/modules/shared/categoryForm.shared.module.ts",
		"common",
		"categoryForm.shared.module"
	],
	"./shared/user.shared.module": [
		"../../../../../src/app/modules/shared/user.shared.module.ts",
		"common",
		"user.shared.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/app/modules lazy recursive ^\\.\\/.*\\.shared\\.module$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/modules/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes_module__ = __webpack_require__("../../../../../src/app/modules/routes.module.ts");

var modules = [__WEBPACK_IMPORTED_MODULE_0__routes_module__["a" /* AppRoutesModule */]];
/* harmony default export */ __webpack_exports__["a"] = (modules);


/***/ }),

/***/ "../../../../../src/app/modules/lazy/lazy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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


var lazyComponentsPath = 'lazy-routed-components';
var sharedModulesPath = 'shared';
function enhanceModule(moduleObj, props) {
    Object.keys(props).forEach(function (key) {
        var value = props[key];
        if (value) {
            if (!moduleObj[key]) {
                moduleObj[key] = [];
            }
            if (value.constructor === Array) {
                moduleObj[key] = moduleObj[key].concat(value);
            }
            else {
                moduleObj[key].push(value);
            }
        }
    });
}
function folderAndFileName(name) {
    return name[0].toLowerCase() + name.slice(1);
}
function LazyModules(componentName, imports, declarations, providers) {
    return __awaiter(this, void 0, void 0, function () {
        var component, routes, moduleObj, _loop_1, i, _loop_2, i, CommonModule, LazyModule;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __webpack_require__("../../../../../src/app lazy recursive ^\\.\\/.*\\.component$")("./" + lazyComponentsPath + '/' + folderAndFileName(componentName) + '/' + folderAndFileName(componentName) + '.component')
                        .then(function (c) { return c[componentName[0].toUpperCase() + componentName.slice(1) + 'Component']; })];
                case 1:
                    component = _a.sent();
                    routes = [{ path: '', component: component }];
                    moduleObj = {
                        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
                        declarations: [component]
                    };
                    if (!declarations) return [3 /*break*/, 5];
                    if (declarations.constructor !== Array) {
                        declarations = [declarations];
                    }
                    _loop_1 = function (i) {
                        var value, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    value = declarations[i];
                                    if (!(typeof value === 'string' && value.includes('Component'))) return [3 /*break*/, 2];
                                    value = value.replace('Component', '');
                                    _a = declarations;
                                    _b = i;
                                    return [4 /*yield*/, __webpack_require__("../../../../../src/app lazy recursive ^\\.\\/.*\\.component$")("./" + lazyComponentsPath + '/' + folderAndFileName(value) + '/' + folderAndFileName(value) + '.component').then(function (c) { return c[value[0].toUpperCase() + value.slice(1) + 'Component']; })];
                                case 1:
                                    _a[_b] = _c.sent();
                                    _c.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < declarations.length)) return [3 /*break*/, 5];
                    return [5 /*yield**/, _loop_1(i)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5:
                    if (!imports) return [3 /*break*/, 10];
                    if (imports.constructor !== Array) {
                        imports = [imports];
                    }
                    _loop_2 = function (i) {
                        var value, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                        return __generator(this, function (_l) {
                            switch (_l.label) {
                                case 0:
                                    value = imports[i];
                                    if (!(typeof value === 'string' && value.includes('Module') && value.startsWith('Shared'))) return [3 /*break*/, 2];
                                    value = value.replace(/Shared|Module/g, '');
                                    _a = imports;
                                    _b = i;
                                    return [4 /*yield*/, __webpack_require__("../../../../../src/app/modules lazy recursive ^\\.\\/.*\\.shared\\.module$")("./" + sharedModulesPath + '/' + folderAndFileName(value) + '.shared.module').then(function (c) {
                                            return c['Shared' + value[0].toUpperCase() + value.slice(1) + 'Module'];
                                        })];
                                case 1:
                                    _a[_b] = _l.sent();
                                    _l.label = 2;
                                case 2:
                                    if (!(value === 'FormsModule')) return [3 /*break*/, 4];
                                    _c = imports;
                                    _d = i;
                                    return [4 /*yield*/, new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "../../../forms/esm5/forms.js")).then(function (v) { return v['FormsModule']; })];
                                case 3:
                                    _c[_d] = _l.sent();
                                    _l.label = 4;
                                case 4:
                                    if (!(value === 'ReactiveFormsModule')) return [3 /*break*/, 6];
                                    _e = imports;
                                    _f = i;
                                    return [4 /*yield*/, new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "../../../forms/esm5/forms.js")).then(function (v) { return v['ReactiveFormsModule']; })];
                                case 5:
                                    _e[_f] = _l.sent();
                                    _l.label = 6;
                                case 6:
                                    if (!(value === 'CommonModule')) return [3 /*break*/, 8];
                                    _g = imports;
                                    _h = i;
                                    return [4 /*yield*/, new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "../../../common/esm5/common.js")).then(function (v) { return v['CommonModule']; })];
                                case 7:
                                    _g[_h] = _l.sent();
                                    _l.label = 8;
                                case 8:
                                    if (!(value === 'Pipes')) return [3 /*break*/, 10];
                                    _j = imports;
                                    _k = i;
                                    return [4 /*yield*/, new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "../../../../../src/app/modules/pipe/pipe.module.ts")).then(function (v) { return v['PipeModule']; })];
                                case 9:
                                    _j[_k] = _l.sent();
                                    _l.label = 10;
                                case 10: return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 6;
                case 6:
                    if (!(i < imports.length)) return [3 /*break*/, 9];
                    return [5 /*yield**/, _loop_2(i)];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    i++;
                    return [3 /*break*/, 6];
                case 9: return [3 /*break*/, 12];
                case 10: return [4 /*yield*/, new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "../../../common/esm5/common.js")).then(function (v) { return v['CommonModule']; })];
                case 11:
                    CommonModule = _a.sent();
                    moduleObj.imports.push(CommonModule);
                    _a.label = 12;
                case 12:
                    enhanceModule(moduleObj, { declarations: declarations, imports: imports, providers: providers });
                    LazyModule = (function () {
                        function LazyModule() {
                        }
                        LazyModule = __decorate([
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])(moduleObj)
                        ], LazyModule);
                        return LazyModule;
                    }());
                    return [2 /*return*/, LazyModule];
            }
        });
    });
}
var lazyChild = (function () {
    var generatedModules = {};
    return function (name, imports, declarations, providers) {
        return function () {
            if (!generatedModules[name]) {
                generatedModules[name] = LazyModules(name, imports, declarations, providers);
            }
            return generatedModules[name];
        };
    };
})();
/* harmony default export */ __webpack_exports__["a"] = (lazyChild);


/***/ }),

/***/ "../../../../../src/app/modules/pipe/pipe.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes__ = __webpack_require__("../../../../../src/app/pipes/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipeModule = (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: __WEBPACK_IMPORTED_MODULE_1__pipes__["a" /* Pipes */],
            exports: __WEBPACK_IMPORTED_MODULE_1__pipes__["a" /* Pipes */],
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/routes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lazy_lazy_module__ = __webpack_require__("../../../../../src/app/modules/lazy/lazy.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_guards__ = __webpack_require__("../../../../../src/app/services/guards/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var commonGuards = [__WEBPACK_IMPORTED_MODULE_4__services_guards__["a" /* Guards */].AuthGuard];
var guardedPaths = [
    { path: '', loadChildren: Object(__WEBPACK_IMPORTED_MODULE_3__lazy_lazy_module__["a" /* default */])('home', 'SharedArticlesModule'), pathMatch: 'full' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components__["a" /* Components */].RegisterComponent, pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components__["a" /* Components */].LoginComponent, pathMatch: 'full' },
    { path: 'category/:category', loadChildren: Object(__WEBPACK_IMPORTED_MODULE_3__lazy_lazy_module__["a" /* default */])('articlesByParam', 'SharedArticlesModule'), pathMatch: 'full' },
    { path: 'article/:id', loadChildren: Object(__WEBPACK_IMPORTED_MODULE_3__lazy_lazy_module__["a" /* default */])('articleDetails', 'SharedArticleModule'), pathMatch: 'full' },
    { path: 'tag/:tag', loadChildren: Object(__WEBPACK_IMPORTED_MODULE_3__lazy_lazy_module__["a" /* default */])('articlesByParam', 'SharedArticlesModule'), pathMatch: 'full' },
    { path: 'users', loadChildren: 'app/modules/lazy-loading/users.module#UsersModule', pathMatch: 'full' },
    { path: 'user/:username', loadChildren: Object(__WEBPACK_IMPORTED_MODULE_3__lazy_lazy_module__["a" /* default */])('userDetails', ['SharedArticleModule', 'SharedUserModule']), pathMatch: 'full' },
    { path: 'create/article', loadChildren: Object(__WEBPACK_IMPORTED_MODULE_3__lazy_lazy_module__["a" /* default */])('createArticle', 'SharedArticleFormModule'), pathMatch: 'full' },
    { path: 'edit/article/:id', loadChildren: Object(__WEBPACK_IMPORTED_MODULE_3__lazy_lazy_module__["a" /* default */])('editArticle', 'SharedArticleFormModule'), pathMatch: 'full' },
    { path: 'me', loadChildren: Object(__WEBPACK_IMPORTED_MODULE_3__lazy_lazy_module__["a" /* default */])('userDetails', ['SharedArticleModule', 'SharedUserModule']), pathMatch: 'full' },
    { path: 'create/category', canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_guards__["a" /* Guards */].AdminGuard], canLoad: [__WEBPACK_IMPORTED_MODULE_4__services_guards__["a" /* Guards */].AdminGuard], loadChildren: Object(__WEBPACK_IMPORTED_MODULE_3__lazy_lazy_module__["a" /* default */])('categoryControl', ['SharedCategoryFormModule']), pathMatch: 'full' },
    { path: 'edit/category/:name', canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_guards__["a" /* Guards */].AdminGuard], canLoad: [__WEBPACK_IMPORTED_MODULE_4__services_guards__["a" /* Guards */].AdminGuard], loadChildren: Object(__WEBPACK_IMPORTED_MODULE_3__lazy_lazy_module__["a" /* default */])('categoryControl', ['SharedCategoryFormModule']), pathMatch: 'full' },
]
    .map(function (p) {
    if (!p['canActivate']) {
        p['canActivate'] = commonGuards;
    }
    else {
        p['canActivate'] = p['canActivate'].concat(commonGuards);
    }
    if (!p['canLoad']) {
        p['canLoad'] = commonGuards;
    }
    else {
        p['canLoad'] = p['canLoad'].concat(commonGuards);
    }
    return p;
});
var routes = [].concat(guardedPaths).concat([{ path: '**', component: __WEBPACK_IMPORTED_MODULE_2__components__["a" /* Components */].NotfoundComponent },]);
var AppRoutesModule = (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (!value) {
            return value;
        }
        return value[0].toUpperCase() + value.slice(1).toLowerCase();
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/escape.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscapePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function escapeHtml(text, unesc) {
    if (typeof text !== 'string') {
        return text;
    }
    var replacer = [['&', '<', '>', '"', "'"], ['&amp;', '&lt;', '&gt;', '&quot;', '&#39;']];
    if (unesc) {
        replacer = replacer.reverse();
    }
    replacer[0].forEach(function (r, i) { text = text.replace(new RegExp(r, 'g'), replacer[1][i]); });
    return text;
}
var EscapePipe = (function () {
    function EscapePipe() {
    }
    EscapePipe.prototype.transform = function (value, unescape) {
        if (!value) {
            return value;
        }
        return escapeHtml(value, unescape);
    };
    EscapePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'escape'
        })
    ], EscapePipe);
    return EscapePipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pipes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__split_word_by_capitalized_pipe__ = __webpack_require__("../../../../../src/app/pipes/split-word-by-capitalized.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__capitalize_pipe__ = __webpack_require__("../../../../../src/app/pipes/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__escape_pipe__ = __webpack_require__("../../../../../src/app/pipes/escape.pipe.ts");



var Pipes = [
    __WEBPACK_IMPORTED_MODULE_1__capitalize_pipe__["a" /* CapitalizePipe */],
    __WEBPACK_IMPORTED_MODULE_0__split_word_by_capitalized_pipe__["a" /* SplitWordByCapitalizedPipe */],
    __WEBPACK_IMPORTED_MODULE_2__escape_pipe__["a" /* EscapePipe */]
];


/***/ }),

/***/ "../../../../../src/app/pipes/split-word-by-capitalized.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitWordByCapitalizedPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SplitWordByCapitalizedPipe = (function () {
    function SplitWordByCapitalizedPipe() {
    }
    SplitWordByCapitalizedPipe.prototype.transform = function (value, lowerCase) {
        if (!value) {
            return value;
        }
        value = value.split(/(?=[A-Z])/).join(' ');
        if (lowerCase) {
            value = value.toLowerCase();
        }
        return value;
    };
    SplitWordByCapitalizedPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'splitByCapital'
        })
    ], SplitWordByCapitalizedPipe);
    return SplitWordByCapitalizedPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/article/article.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
    }
    ArticleService.prototype.getById = function (payload) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["b" /* baseUrl */] + '/articles?_id=' + payload);
    };
    ArticleService.prototype.query = function (queryObj) {
        var query = Object.keys(queryObj).map(function (key) { return key + "=" + queryObj[key]; });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["b" /* baseUrl */] + ("/articles?" + query.join('&')));
    };
    ArticleService.prototype.create = function (payload) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["b" /* baseUrl */] + '/create-article', payload);
    };
    ArticleService.prototype.remove = function (id) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["b" /* baseUrl */] + '/delete-article/' + id, {});
    };
    ArticleService.prototype.edit = function (payload) {
        var id = payload['id'];
        delete payload['id'];
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["b" /* baseUrl */] + '/edit-article/' + id, payload);
    };
    ArticleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return baseUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var baseUrl = 'https://blog-headstone.herokuapp.com';
//'http://localhost:3000';
var LOGIN = '/login';
var REGISTER = '/register';
var LOGOUT = '/logout';
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (payload) {
        return this.http.post(baseUrl + LOGIN, payload);
    };
    AuthService.prototype.register = function (payload) {
        return this.http.post(baseUrl + REGISTER, payload);
    };
    AuthService.prototype.logout = function () {
        return this.http.post(baseUrl + LOGOUT, {});
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());




/***/ }),

/***/ "../../../../../src/app/services/category/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["b" /* baseUrl */] + '/categories');
    };
    CategoryService.prototype.query = function (queryObj) {
        var query = Object.keys(queryObj).map(function (key) { return key + "=" + queryObj[key]; });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["b" /* baseUrl */] + ("/categories?" + query.join('&')));
    };
    CategoryService.prototype.create = function (payload) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["b" /* baseUrl */] + '/mod/create-category', payload);
    };
    CategoryService.prototype.edit = function (name, payload) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["b" /* baseUrl */] + '/mod/edit-category/' + name, payload);
    };
    CategoryService.prototype.remove = function (name) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["b" /* baseUrl */] + '/mod/delete-category/' + name, {});
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "../../../../../src/app/services/guards/admin/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminGuard = (function () {
    function AdminGuard(router) {
        this.router = router;
    }
    AdminGuard.prototype.canLoad = function (route) {
        try {
            if (!JSON.parse(localStorage.user)['roles']) {
                this.router.navigate(['/']);
                return false;
            }
            console.log(JSON.parse(localStorage.user).roles.includes('Admin'));
        }
        catch (e) {
            if (route.path === '') {
                return false;
            }
        }
        return true;
    };
    AdminGuard.prototype.canActivate = function (next, state) {
        try {
            if (!JSON.parse(localStorage.user).roles) {
                this.router.navigate(['/']);
                return false;
            }
        }
        catch (e) {
            if (state.url === '') {
                return false;
            }
        }
        return true;
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/guards/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canLoad = function (route) {
        try {
            if (!JSON.parse(localStorage.user).authtoken) {
                this.router.navigate(['/login']);
                return false;
            }
        }
        catch (e) {
            if (!route.path.match(/login|register/g) && route.path !== '') {
                this.router.navigate(['/login']);
                return false;
            }
        }
        return true;
    };
    AuthGuard.prototype.canActivate = function (next, state) {
        try {
            var user = JSON.parse(localStorage.user);
            if (state.url === '/user/' + user.username) {
                this.router.navigate(['/me']);
                return false;
            }
            if (!user.authtoken) {
                this.router.navigate(['/login']);
                return false;
            }
            else {
                if (state.url.match(/login|register/g)) {
                    this.router.navigate(['/']);
                    return false;
                }
            }
        }
        catch (e) {
            if (!state.url.match(/login|register/g)) {
                this.router.navigate(['/login']);
                return false;
            }
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guards; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_guard__ = __webpack_require__("../../../../../src/app/services/guards/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_admin_guard__ = __webpack_require__("../../../../../src/app/services/guards/admin/admin.guard.ts");


var guards = {
    AuthGuard: __WEBPACK_IMPORTED_MODULE_0__auth_auth_guard__["a" /* AuthGuard */],
    AdminGuard: __WEBPACK_IMPORTED_MODULE_1__admin_admin_guard__["a" /* AdminGuard */]
};
/* harmony default export */ __webpack_exports__["b"] = (Object.values(guards));
var Guards = guards;


/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards__ = __webpack_require__("../../../../../src/app/services/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category_service__ = __webpack_require__("../../../../../src/app/services/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_article_service__ = __webpack_require__("../../../../../src/app/services/article/article.service.ts");





var services = [
    __WEBPACK_IMPORTED_MODULE_0__guards__["b" /* default */],
    __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */],
    __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */],
    __WEBPACK_IMPORTED_MODULE_3__category_category_service__["a" /* CategoryService */],
    __WEBPACK_IMPORTED_MODULE_4__article_article_service__["a" /* ArticleService */]
];
/* harmony default export */ __webpack_exports__["a"] = (services);


/***/ }),

/***/ "../../../../../src/app/services/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.remember = function (user) {
        localStorage.user = JSON.stringify(user);
    };
    UserService.prototype.current = function () {
        var user = {};
        try {
            user = JSON.parse(localStorage.user);
        }
        catch (e) { }
        return user;
    };
    UserService.prototype.query = function (queryObj) {
        var modPath = '';
        if (this.current()['roles'] && (this.current()['roles'].includes('Admin') || this.current()['roles'].includes('Mod'))) {
            modPath = 'mod/';
        }
        var query = Object.keys(queryObj).map(function (key) { return key + "=" + queryObj[key]; });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["b" /* baseUrl */] + ("/" + modPath + "users?" + query.join('&')));
    };
    UserService.prototype.edit = function (id, payload) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["b" /* baseUrl */] + '/edit-user/' + id, payload);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/utils/form-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = generateValidators;
/* harmony export (immutable) */ __webpack_exports__["b"] = trimFormInputs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");

function generateValidators(req, pattern, minLength, maxLength) {
    var validators = [];
    if (req) {
        validators.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required);
    }
    if (pattern) {
        validators.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].pattern(pattern));
    }
    if (minLength) {
        validators.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].minLength(minLength));
    }
    if (maxLength) {
        validators.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].maxLength(maxLength));
    }
    return validators;
}
function trimFormInputs(form, simple) {
    Object.keys(form.controls).forEach(function (controlName) {
        var control = form.controls[controlName];
        var value = control.value;
        var newVal = value;
        if (value) {
            if (value !== value.trim()) {
                newVal = value.trim();
            }
            if (!simple) {
                if (newVal.replace(/ {2,}/g, ' ') !== newVal) {
                    newVal = newVal.replace(/ {2,}/g, ' ');
                }
            }
            if (newVal !== value) {
                control.setValue(newVal);
            }
        }
    });
}


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
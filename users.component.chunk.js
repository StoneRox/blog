webpackJsonp(["users.component"],{

/***/ "../../../../../src/app/lazy-routed-components/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\r\n    list-style: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lazy-routed-components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col-md-6 col-md-offset-3\">\n        <form (submit)=\"search($event)\" class=\"col-md-12\">\n            <div class=\"form-group col-md-7\">\n                <input class=\"form-control\" placeholder=\"Search user by name...\" (change)=\"inputToProp($event)\" name=\"username\" id=\"username\" type=\"text\">\n            </div>\n            <div class=\"form-group\">\n                <input class=\"btn btn-primary col-md-4\" type=\"submit\" value=\"Search\">\n            </div>\n        </form>\n        Found {{users?.length}} users\n        <ul>\n            <li class=\"col-md-3\" *ngFor=\"let user of users\">\n                <a routerLink=\"/user/{{user.username}}\">{{user.username}}</a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lazy-routed-components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = (function () {
    function UsersComponent(route, User) {
        this.route = route;
        this.User = User;
        this.sub$ = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub$.push(this.route.queryParams.subscribe(function (params) {
            _this.sub$.push(_this.User.query(params).subscribe(function (users) {
                if (!users['error']) {
                    _this.users = users;
                }
                else {
                    _this.error = users['error'];
                }
            }));
        }));
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.sub$.forEach(function (s) {
            s.unsubscribe();
        });
    };
    UsersComponent.prototype.search = function (e) {
        var _this = this;
        e.preventDefault();
        this.User.query({ username: this.searchQuery }).subscribe(function (users) {
            if (!users['error']) {
                _this.users = users;
            }
        });
    };
    UsersComponent.prototype.inputToProp = function (e) {
        this.searchQuery = e.target.value;
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/lazy-routed-components/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lazy-routed-components/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ })

});
//# sourceMappingURL=users.component.chunk.js.map
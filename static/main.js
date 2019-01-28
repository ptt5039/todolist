(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _authorization_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authorization.guard */ "./src/app/authorization.guard.ts");








var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
    },
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        canActivate: [_authorization_guard__WEBPACK_IMPORTED_MODULE_7__["AuthorizationGuard"]]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
        canActivate: [_authorization_guard__WEBPACK_IMPORTED_MODULE_7__["AuthorizationGuard"]]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user */ "./src/app/user.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _authorization_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./authorization.guard */ "./src/app/authorization.guard.ts");




//import { HashLocationStrategy, LocationStrategy } from '@angular/common';














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_14__["NavComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [
                _authorization_guard__WEBPACK_IMPORTED_MODULE_17__["AuthorizationGuard"],
                _app_service__WEBPACK_IMPORTED_MODULE_10__["AppService"],
                _user__WEBPACK_IMPORTED_MODULE_11__["User"],
                _user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
                _todo_service__WEBPACK_IMPORTED_MODULE_16__["TodoService"],
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/authorization.guard.ts":
/*!****************************************!*\
  !*** ./src/app/authorization.guard.ts ***!
  \****************************************/
/*! exports provided: AuthorizationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationGuard", function() { return AuthorizationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");




var AuthorizationGuard = /** @class */ (function () {
    function AuthorizationGuard(appUser, router) {
        this.appUser = appUser;
        this.router = router;
    }
    AuthorizationGuard.prototype.canActivate = function (next, state) {
        if (this.appUser.isLoggedIn)
            return this.appUser.isLoggedIn;
        else
            this.router.navigate(['']);
    };
    AuthorizationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthorizationGuard);
    return AuthorizationGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <h2 style=\"text-align:center;\">List of Todo items</h2>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\n<input [(ngModel)]=\"input.username\" type=\"text\" placeholder=\"Username\"><br>\n<input [(ngModel)]=\"input.password\" type=\"password\" placeholder=\"Password\" (keydown.enter)=\"onLogin()\"><br>\n<a class=\"btn btn-link\" (click)=\"register()\">Register User</a><br>\n<button (click)=\"onLogin()\">Login</button>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(appUser, router, user) {
        this.appUser = appUser;
        this.router = router;
        this.user = user;
        this.token = [];
        this.input = {
            username: '',
            password: ''
        };
        if (sessionStorage.getItem('currentUser') != null) {
            this.appUser.setLoggedIn(true);
            this.router.navigate(['main']);
        }
        else {
            this.appUser.setLoggedIn(false);
            this.router.navigate(['']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.input = {
            username: '',
            password: ''
        };
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['register']);
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.appUser.loginUser(this.input).subscribe(function (response) {
            _this.user.username = _this.input.username;
            console.log(response);
            _this.token.push(response);
            sessionStorage.setItem('token', JSON.stringify(_this.token));
            _this.appUser.setLoggedIn(true);
            _this.appUser.getUser(_this.input.username).subscribe(function (data) {
                sessionStorage.setItem('currentUser', JSON.stringify(data));
                _this.user.id = data[0].id;
                _this.user.firstName = data[0].first_name;
                _this.user.lastName = data[0].last_name;
                _this.user.username = data[0].username;
                _this.user.isSuperuser = data[0].is_superuser;
                _this.router.navigate(['main']);
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log('error', error);
            alert('Incorrect username or password. Please try again!');
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _user__WEBPACK_IMPORTED_MODULE_3__["User"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-header></app-header>\n\n<div class=\"row\">\n    <ul>\n        <li *ngFor=\"let todo of todos\">\n          <h3 *ngIf=\"todo.title\" (click)=\"todoClicked(todo)\">{{todo.title}}\n            <img *ngIf=\"todo.is_complete\" [src]=\"checkIcon\" height=\"20px\" width=\"20px\">\n          </h3>\n        </li>  \n    </ul>\n</div>\n\n<div class=\"row\" *ngIf=\"user.isSuperuser\">\n        <div class=\"form-group\">\n            <label for=\"creator\">Creator:</label>\n            <h4>{{username}}</h4>\n        </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"form-group\">\n        <label for=\"title\">What do you want to do?</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" [(ngModel)]=\"selectedTodo.title\" placeholder=\"Enter todo\">\n    </div>\n</div>\n\n\n<button class=\"btn btn-default mr-2\" *ngIf=\"selectedTodo.id\" (click)=\"updateTodo()\">Update</button>\n<button class=\"btn btn-default mr-2\" *ngIf=\"!selectedTodo.is_complete && selectedTodo.id\" (click)=\"completeTodo()\">Complete</button>\n<button class=\"btn btn-default mr-2\" *ngIf=\"selectedTodo.is_complete && selectedTodo.id\" (click)=\"inCompleteTodo()\">InComplete</button>\n<button class=\"btn btn-primary mr-2\" *ngIf=\"!selectedTodo.id\" (click)=\"createTodo()\">Create</button>\n<button class=\"btn btn-danger\" *ngIf=\"selectedTodo.id\" (click)=\"deleteTodo()\">Delete</button>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo.service.ts");






var MainComponent = /** @class */ (function () {
    function MainComponent(todoService, appUser, user, router) {
        this.todoService = todoService;
        this.appUser = appUser;
        this.user = user;
        this.router = router;
        this.checkIcon = 'http://todolist-todolist.7e14.starter-us-west-2.openshiftapps.com/media/check.png';
        if (sessionStorage.getItem('currentUser') != null) {
            this.appUser.getCurrentUser();
            this.appUser.setLoggedIn(true);
            this.getTodos();
            this.selectedTodo = { title: '' };
        }
        else {
            this.appUser.setLoggedIn(false);
            this.router.navigate(['']);
        }
    }
    MainComponent.prototype.getTodos = function () {
        var _this = this;
        if (this.user.isSuperuser) {
            this.todoService.getAllTodos().subscribe(function (data) {
                _this.todos = data;
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.todoService.getTodosByUser(this.user.id).subscribe(function (data) {
                _this.todos = data;
            }, function (error) {
                console.log(error);
            });
        }
    };
    MainComponent.prototype.todoClicked = function (todo) {
        var _this = this;
        this.todoService.getTodo(todo.id).subscribe(function (data) {
            _this.selectedTodo = data;
            _this.appUser.getUsername(_this.selectedTodo.user)
                .subscribe(function (data) {
                _this.username = data[0].username.toString();
            });
        }, function (error) {
            console.log(error);
        });
    };
    MainComponent.prototype.completeTodo = function () {
        var _this = this;
        this.todoService.completeTodo(this.selectedTodo, true)
            .subscribe(function (data) {
            _this.getTodos();
            _this.selectedTodo = { title: '' };
        }, function (error) {
            console.log(error);
        });
    };
    MainComponent.prototype.inCompleteTodo = function () {
        var _this = this;
        this.todoService.completeTodo(this.selectedTodo, false)
            .subscribe(function (data) {
            _this.getTodos();
            _this.selectedTodo = { title: '' };
        }, function (error) {
            console.log(error);
        });
    };
    MainComponent.prototype.updateTodo = function () {
        var _this = this;
        this.todoService.updateTodo(this.selectedTodo, this.user.id).subscribe(function (data) {
            _this.getTodos();
            _this.selectedTodo = { title: '' };
        }, function (error) {
            console.log(error);
        });
    };
    MainComponent.prototype.createTodo = function () {
        var _this = this;
        if (this.selectedTodo.title.length < 8) {
            alert('Please input what you want to do, '
                + 'it needs to be at least 8 characters');
            console.log('Minimum length is 8');
        }
        else {
            this.todoService.createTodo(this.selectedTodo.title, this.user.id).subscribe(function (data) {
                _this.todos.push(data);
                _this.selectedTodo = { title: '' };
            }, function (error) {
                console.log(error);
            });
        }
    };
    MainComponent.prototype.deleteTodo = function () {
        var _this = this;
        this.todoService.deleteTodo(this.selectedTodo.id).subscribe(function (data) {
            _this.getTodos();
            _this.selectedTodo = { title: '' };
        }, function (error) {
            console.log(error);
        });
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_5__["TodoService"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _user__WEBPACK_IMPORTED_MODULE_3__["User"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n    <h1 style =\"text-align:center;\">Welcome, {{user.username}}!</h1>\n    <button class=\"btn btn-default\" (click) =\"profile()\">Profile</button>\n    <button style=\"float:right\" class=\"btn btn-default\" (click) =\"logout()\">Logout</button>\n</div>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





var NavComponent = /** @class */ (function () {
    function NavComponent(user, appUser, router) {
        this.user = user;
        this.appUser = appUser;
        this.router = router;
    }
    NavComponent.prototype.logout = function () {
        this.router.navigate(['']);
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('token');
        this.appUser.setLoggedIn(false);
    };
    NavComponent.prototype.profile = function () {
        this.router.navigate(['profile']);
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user__WEBPACK_IMPORTED_MODULE_2__["User"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n    <button class=\"btn btn-default\" style=\"float:right\" (click)=\"goBack()\">Go Back</button>\n    <h1 style =\"text-align:center;\">Profile, {{user.username}}!</h1>    \n</div>\n\n<div class=\"form-group\">\n  <label for=\"firstName\">First Name</label>\n  <input type=\"text\"  class=\"form-control\" id=\"firstName\" [(ngModel)]=\"user.firstName\">\n</div>\n\n<div class=\"form-group\">\n  <label for=\"lastName\">Last Name</label>\n  <input type=\"text\"  class=\"form-control\" id=\"lastName\" [(ngModel)]=\"user.lastName\">\n</div>\n\n<div class=\"form-group\">\n  <label for=\"dateOfBirth\">Date of Birth</label>\n  <input type=\"date\" class=\"form-control\" id=\"dateOfBirth\" [(ngModel)]=\"user.dateOfBirth\">\n</div>\n\n<div class=\"form-group\">\n    <label for=\"profileImage\">Profile Image:</label>\n    <img *ngIf=\"user.profileImage != null\" [src]=\"user.profileImage\" height=\"150px\" width=\"150px\">\n    <input type=\"file\" class=\"form-control\"  id=\"profileImage\" (change)=\"handleFileInput($event.target.files)\">\n  </div>\n\n<button class=\"btn btn-default\" (click)=\"updateUserInfo()\">Update</button>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(user, appUser, router) {
        this.user = user;
        this.appUser = appUser;
        this.router = router;
        this.fileToUpload = null;
        this.arrayData = [];
        if (sessionStorage.getItem('currentUser') != null) {
            this.appUser.getCurrentUser();
            this.appUser.setLoggedIn(true);
            this.getUserInfo();
        }
        else {
            this.appUser.setLoggedIn(false);
            this.router.navigate(['']);
        }
    }
    ProfileComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.appUser.getUserInfo(this.user.id).subscribe(function (data) {
            _this.user.profileId = data[0].id.toString();
            _this.user.dateOfBirth = data[0].dateOfBirth;
            _this.user.profileImage = data[0].profileImage;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    ProfileComponent.prototype.updateUserInfo = function () {
        this.updateUserName();
        if (this.user.dateOfBirth == null && this.fileToUpload != null)
            this.updateImage();
        else if (this.fileToUpload == null && this.user.dateOfBirth != null)
            this.updateDateOfBirth();
        else
            this.updateInfo();
        alert('Account information updated!');
        this.getUserInfo();
    };
    ProfileComponent.prototype.updateImage = function () {
        this.appUser.updateImage(this.user, this.fileToUpload).subscribe(function (data) {
            console.log('updated image');
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.updateUserName = function () {
        var _this = this;
        this.appUser.updateName(this.user).subscribe(function (data) {
            _this.arrayData.push(data);
            sessionStorage.setItem('currentUser', JSON.stringify(_this.arrayData));
            _this.arrayData = [];
            console.log('updated names');
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.updateDateOfBirth = function () {
        this.appUser.updateDateOfBirth(this.user).subscribe(function (data) {
            console.log(data);
            console.log('updated dob');
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.updateInfo = function () {
        this.appUser.updateUserInfo(this.user, this.fileToUpload).subscribe(function (data) {
            console.log(data);
            console.log('updated dob and image');
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.goBack = function () {
        window.history.back();
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user__WEBPACK_IMPORTED_MODULE_2__["User"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Register</h1>\n<input [(ngModel)]=\"input.username\" type=\"text\" placeholder=\"Username\"><br>\n<input [(ngModel)]=\"input.password\" type=\"password\" placeholder=\"Password\"><br>\n<button (click)=\"onRegister()\">Register User</button><br>\n\n\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(appUser, router) {
        this.appUser = appUser;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.input = {
            username: '',
            password: ''
        };
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        this.appUser.registerUser(this.input).subscribe(function (response) {
            console.log(response);
            alert('User ' + _this.input.username + ' created.');
            _this.router.navigate(['']);
        }, function (error) {
            console.log(error);
            alert('Can not register account at this time, please try again later!');
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/todo.service.ts":
/*!*********************************!*\
  !*** ./src/app/todo.service.ts ***!
  \*********************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/app/user.ts");




var TodoService = /** @class */ (function () {
    function TodoService(http, user) {
        this.http = http;
        this.user = user;
        this.baseUrl = 'http://todolist-todolist.7e14.starter-us-west-2.openshiftapps.com';
        this.HttpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Token ebd1b536f6acef41d13946aa7605f9c6bc03ce35' });
        // this.appUser.getCurrentToken();
        // console.log(this.HttpHeaders.get('Authorization'))
    }
    TodoService.prototype.getTodosByUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/todos/?user=' + userId, { headers: this.HttpHeaders });
    };
    TodoService.prototype.getAllTodos = function () {
        return this.http.get(this.baseUrl + '/api/todos/', { headers: this.HttpHeaders });
    };
    TodoService.prototype.getTodo = function (id) {
        return this.http.get(this.baseUrl + '/api/todos/' + id + '/', { headers: this.HttpHeaders });
    };
    TodoService.prototype.completeTodo = function (todo, status) {
        var body = { is_complete: status };
        return this.http.patch(this.baseUrl + '/api/todos/' + todo.id + '/', body, { headers: this.HttpHeaders });
    };
    TodoService.prototype.updateTodo = function (todo, userId) {
        var body = { title: todo.title, user: userId };
        return this.http.put(this.baseUrl + '/api/todos/' + todo.id + '/', body, { headers: this.HttpHeaders });
    };
    TodoService.prototype.createTodo = function (text, userId) {
        var body = { title: text, user: userId };
        return this.http.post(this.baseUrl + '/api/todos/', body, { headers: this.HttpHeaders });
    };
    TodoService.prototype.deleteTodo = function (id) {
        return this.http.delete(this.baseUrl + '/api/todos/' + id + '/', { headers: this.HttpHeaders });
    };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _user__WEBPACK_IMPORTED_MODULE_3__["User"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/app/user.ts");




var UserService = /** @class */ (function () {
    function UserService(http, user) {
        this.http = http;
        this.user = user;
        this.loggedInStatus = false;
        this.baseUrl = 'http://todolist-todolist.7e14.starter-us-west-2.openshiftapps.com';
        this.HttpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Token ebd1b536f6acef41d13946aa7605f9c6bc03ce35' });
    }
    UserService.prototype.setLoggedIn = function (value) {
        this.loggedInStatus = value;
    };
    Object.defineProperty(UserService.prototype, "isLoggedIn", {
        get: function () {
            if (this.user.id != 0)
                return this.loggedInStatus = true;
            else
                return this.loggedInStatus;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.getUsername = function (id) {
        return this.http.get(this.baseUrl + '/api/users/?id=' + id, { headers: this.HttpHeaders });
    };
    UserService.prototype.getUser = function (username) {
        return this.http.get(this.baseUrl + '/api/users/?username=' + username, { headers: this.HttpHeaders });
    };
    UserService.prototype.getUserInfo = function (userId) {
        return this.http.get(this.baseUrl + '/api/userinfo/?user=' + userId, { headers: this.HttpHeaders });
    };
    UserService.prototype.registerUser = function (userData) {
        return this.http.post(this.baseUrl + '/api/users/', userData, { headers: this.HttpHeaders });
    };
    UserService.prototype.loginUser = function (userData) {
        return this.http.post(this.baseUrl + '/api/auth/', userData);
    };
    UserService.prototype.updateName = function (userData) {
        var body = { first_name: userData.firstName.toString(), last_name: userData.lastName.toString() };
        return this.http.patch(this.baseUrl + '/api/users/' + userData.id + '/', body, { headers: this.HttpHeaders });
    };
    UserService.prototype.updateDateOfBirth = function (user) {
        var body = { dateOfBirth: user.dateOfBirth.toString() };
        return this.http.patch(this.baseUrl + '/api/userinfo/' + user.profileId + '/', body, { headers: this.HttpHeaders });
    };
    UserService.prototype.updateImage = function (user, fileToUpload) {
        var formData = new FormData();
        formData.append('profileImage', fileToUpload, fileToUpload.name);
        return this.http.patch(this.baseUrl + '/api/userinfo/' + user.profileId + '/', formData, { headers: this.HttpHeaders });
    };
    UserService.prototype.updateUserInfo = function (user, fileToUpload) {
        var formData = new FormData();
        formData.append('dateOfBirth', user.dateOfBirth.toString());
        formData.append('profileImage', fileToUpload, fileToUpload.name);
        return this.http.patch(this.baseUrl + '/api/userinfo/' + user.profileId + '/', formData, { headers: this.HttpHeaders });
    };
    UserService.prototype.getCurrentUser = function () {
        if (sessionStorage.getItem('currentUser') != null)
            this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        console.log(this.currentUser);
        this.user.id = this.currentUser[this.currentUser.length - 1].id;
        this.user.firstName = this.currentUser[this.currentUser.length - 1].first_name;
        this.user.lastName = this.currentUser[this.currentUser.length - 1].last_name;
        this.user.username = this.currentUser[this.currentUser.length - 1].username;
        this.user.isSuperuser = this.currentUser[this.currentUser.length - 1].is_superuser;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _user__WEBPACK_IMPORTED_MODULE_3__["User"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.id = 0;
        this.profileId = 0;
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\example\todolist\website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
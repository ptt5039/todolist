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
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");









var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
    },
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        children: [
            {
                path: 'tasks/:id',
                component: _task_task_component__WEBPACK_IMPORTED_MODULE_8__["TaskComponent"],
            },
        ]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
    },
    {
        path: 'help',
        component: _help_help_component__WEBPACK_IMPORTED_MODULE_7__["HelpComponent"],
    },
    {
        path: '**',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    }
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
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user */ "./src/app/user.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _authorization_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./authorization.guard */ "./src/app/authorization.guard.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./task */ "./src/app/task.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");




//import { HashLocationStrategy, LocationStrategy } from '@angular/common';


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_17__["HelpComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_18__["TaskComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_19__["FileDropModule"],
            ],
            providers: [
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_21__["CookieService"],
                _authorization_guard__WEBPACK_IMPORTED_MODULE_16__["AuthorizationGuard"],
                _app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"],
                _user__WEBPACK_IMPORTED_MODULE_10__["User"],
                _user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                _todo_service__WEBPACK_IMPORTED_MODULE_15__["TodoService"],
                _task__WEBPACK_IMPORTED_MODULE_20__["Task"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
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

/***/ "./src/app/help/help.component.css":
/*!*****************************************!*\
  !*** ./src/app/help/help.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Assistance Page</h1>\n<p>1. To create a task, type in what your task is in the \"What needs to be done?\" box and press enter.</p>\n<p>2. To edit a task, click the task, you will be directed to a new page that contain the task information <br>\n      click on the task title and type what you need to change in the text box that was appeared and press enter.</p>\n<p>3. To attach or replace an image on the task, simply drag and drop an image file to the individual task page.</p>\n<p>4. To mark the task that is completed, click on the circle on the right of the task.</p>\n<p>5. To delete the task, click on the red X on the right of the task. The X will appear when you hover the cursor over it.</p>\n<p>6. To attach an image to the task, simply drag and drop an image file to the task page.</p>\n<p>7. To change the profile, click on the Profile button.</p>\n<p>Thank you!</p>\n<button (click) = \"goBack()\">Go Back</button>"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HelpComponent = /** @class */ (function () {
    function HelpComponent(router) {
        this.router = router;
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent.prototype.goBack = function () {
        this.router.navigate(['main']);
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/help/help.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HelpComponent);
    return HelpComponent;
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

module.exports = "<div class=\"sign-in-wrapper\">\n    <form class=\"frm\">\n        <h1>Login</h1>\n        <input [(ngModel)]=\"input.username\" name=\"username\"\n            type=\"text\" placeholder=\"Username\">\n        <input [(ngModel)]=\"input.password\" name=\"password\"\n            type=\"password\" placeholder=\"Password\" >\n        <a class=\"btn btn-link\" (click)=\"register()\">Register User</a>\n        <button (click)=\"onLogin()\">Login</button>\n    </form>\n</div>\n"

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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(todoService, cookie, appUser, router, user) {
        this.todoService = todoService;
        this.cookie = cookie;
        this.appUser = appUser;
        this.router = router;
        this.user = user;
        this.expiredValue = new Date();
        this.input = {
            username: '',
            password: ''
        };
        this.cookie.delete('csrftoken');
        if (this.cookie.get('isAuthorized') === 'true') {
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
        this.cookie.delete('csrftoken');
        this.appUser.loginUser(this.input).subscribe(function (response) {
            _this.expiredValue.setHours(_this.expiredValue.getHours() + 12);
            _this.user.username = _this.input.username;
            _this.user.token = 'Token ' + response.token;
            _this.appUser.HttpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({ 'Authorization': _this.user.token });
            _this.todoService.HttpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({ 'Authorization': _this.user.token });
            _this.appUser.myToken = 'Token ' + response.token;
            _this.todoService.myToken = 'Token ' + response.token;
            _this.cookie.set('5Es85xcdwda65sd12sdsaasdascxa654564982xc21', _this.appUser.encryptData('Token ' + response.token), _this.expiredValue, '/');
            _this.cookie.set('isAuthorized', 'true', _this.expiredValue, '/');
            _this.appUser.setLoggedIn(true);
            _this.appUser.getUser(_this.input.username).subscribe(function (data) {
                _this.user.id = data[0].id;
                _this.user.firstName = data[0].first_name;
                _this.user.lastName = data[0].last_name;
                _this.user.username = data[0].username;
                _this.user.isSuperuser = data[0].is_superuser;
                _this.cookie.set('ui', _this.appUser.encryptData(_this.user.id), _this.expiredValue, '/');
                if (_this.user.isSuperuser)
                    _this.cookie.set('isSuper', 'true', _this.expiredValue, '/');
                else
                    _this.cookie.set('isSuper', 'false', _this.expiredValue, '/');
                _this.router.navigate(['main']);
            }, function (error) {
                console.log(error);
                _this.cookie.delete('5Es85xcdwda65sd12sdsaasdascxa654564982xc21');
                _this.cookie.delete('isAuthorized');
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
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

module.exports = "\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"task-container\" *ngIf=\"viewTask\" >\n    <div (click)=\"closeView()\" class=\"view\"></div>\n    <app-task class=\"main-task\"></app-task>\n</div>\n<section [class.task-view]=\"viewTask\">\n    <app-nav></app-nav>\n<section>\n\n\n<section class=\"todoapp\" [class.task-view]=\"viewTask\">\n\n    <div class=\"input\">\n        <h1>Todos</h1>\n\n        <input class=\"new-todo\" placeholder=\"What needs to be done?\" \n            autofocus=\"\" [(ngModel)]=\"newTodo.title\" (keyup.enter)=\"createTodo()\">\n    </div>\n\n    <section class=\"main\" *ngIf=\"todos.length > 0\">\n        <ul class=\"todo-list\">\n            <li *ngFor=\"let todo of todos\" [class.completed]=\"todo.is_complete\">\n                    <input class=\"toggle\" type=\"checkbox\" \n                        (click)=\"toggleCompletion(todo)\" [checked]=\"todo.is_complete\">\n                    \n                    <label (click)=\"todoClicked(todo)\">{{todo.title}}</label>\n                            \n                    <button class=\"destroy\" (click)=\"deleteTodo(todo)\"></button>\n            </li>\n        </ul>\n    </section>\n    <footer class=\"footer\" *ngIf=\"todos.length > 0\">\n        <span class=\"todo-count\">\n            <strong>{{todos.length}}</strong> \n                {{todos.length == 1 ? 'item' : 'items'}} left\n        </span>\n    </footer>\n    \n</section>\n\n<button class=\"sign-out\" (click)=\"logout()\">Sign out</button>"

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
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../task */ "./src/app/task.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var MainComponent = /** @class */ (function () {
    function MainComponent(todoService, appUser, user, router, taskClass, cookie, location) {
        this.todoService = todoService;
        this.appUser = appUser;
        this.user = user;
        this.router = router;
        this.taskClass = taskClass;
        this.cookie = cookie;
        this.location = location;
        this.taskId = null;
        this.todos = [];
        this.checkIcon = 'http://todolist-todolist.7e14.starter-us-west-2.openshiftapps.com/media/check.png';
        this.expiredValue = new Date();
        this.viewTask = false;
        if (this.cookie.get('isAuthorized') === 'true') {
            this.appUser.getCurrentUser();
            this.appUser.setLoggedIn(true);
            this.todoService.myToken = this.appUser.getCurrentToken();
            this.appUser.myToken = this.appUser.getCurrentToken();
            if (this.cookie.get('taskview') === 'true')
                this.viewTask = true;
            if (this.cookie.get('isSuper') === 'true')
                this.user.isSuperuser = true;
            else
                this.user.isSuperuser = false;
            this.newTodo = { title: '' };
            this.taskClass.id = null;
            this.getTodos();
        }
        else {
            this.appUser.setLoggedIn(false);
            this.router.navigate(['']);
        }
    }
    MainComponent.prototype.ngOnInit = function () { };
    MainComponent.prototype.editTodo = function (todo) {
        todo.editing = true;
    };
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
            // this.selectedTodo = data;
            //   this.taskClass.id = data.id;
            _this.viewTask = true;
            _this.expiredValue.setHours(_this.expiredValue.getHours() + 12);
            _this.cookie.set('ti', _this.appUser.encryptData(data.id), _this.expiredValue, '/');
            _this.cookie.set('taskview', 'true', _this.expiredValue, '/');
            _this.location.go('/main/tasks/' + todo.id + '/');
            // this.router.navigate(['/main/tasks', todo.id]);
        }, function (error) {
            console.log(error);
        });
    };
    MainComponent.prototype.toggleCompletion = function (todo) {
        if (todo.is_complete)
            this.inCompleteTodo(todo);
        else
            this.completeTodo(todo);
    };
    MainComponent.prototype.completeTodo = function (todo) {
        var _this = this;
        this.todoService.completeTodo(todo, true)
            .subscribe(function (data) {
            _this.getTodos();
            _this.newTodo = { title: '' };
        }, function (error) {
            console.log(error);
        });
    };
    MainComponent.prototype.inCompleteTodo = function (todo) {
        var _this = this;
        this.todoService.completeTodo(todo, false)
            .subscribe(function (data) {
            _this.getTodos();
            _this.newTodo = { title: '' };
        }, function (error) {
            console.log(error);
        });
    };
    MainComponent.prototype.createTodo = function () {
        var _this = this;
        if (this.newTodo.title.length < 8) {
            alert('Please input what you want to do, '
                + 'it needs to be at least 8 characters');
            console.log('Minimum length is 8');
        }
        else {
            this.todoService.createTodo(this.newTodo.title, this.user.id).subscribe(function (data) {
                _this.todos.push(data);
                _this.newTodo = { title: '' };
            }, function (error) {
                console.log(error);
            });
        }
    };
    MainComponent.prototype.deleteTodo = function (todo) {
        var _this = this;
        this.todoService.deleteTodo(todo.id).subscribe(function (data) {
            _this.getTodos();
            _this.newTodo = { title: '' };
        }, function (error) {
            console.log(error);
        });
    };
    MainComponent.prototype.logout = function () {
        this.appUser.setLoggedIn(false);
        this.cookie.deleteAll('/');
        this.router.navigate(['']);
    };
    MainComponent.prototype.closeView = function () {
        this.cookie.delete('ti', '/');
        this.cookie.delete('taskview', '/');
        this.viewTask = false;
        this.location.go('/main/');
        this.getTodos();
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
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _task__WEBPACK_IMPORTED_MODULE_6__["Task"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
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

module.exports = "<div class=\"nav\">\n  <p>Welcome, {{user.username}}!</p>\n  <button (click) =\"profile()\">Profile</button>\n  <button (click) =\"help()\">Need Help?</button>\n</div>"

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




var NavComponent = /** @class */ (function () {
    function NavComponent(user, router) {
        this.user = user;
        this.router = router;
    }
    NavComponent.prototype.profile = function () {
        this.router.navigate(['profile']);
    };
    NavComponent.prototype.help = function () {
        this.router.navigate(['help']);
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user__WEBPACK_IMPORTED_MODULE_2__["User"],
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

module.exports = "<section class=\"profile\">\n  <div class=\"input\">\n    <button (click)=\"goBack()\">Go Back</button>\n    <div class=\"col-12\">\n      <h1 style =\"text-align:center;\">Profile, {{user.username}}!</h1>    \n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\"  class=\"form-control\" id=\"firstName\" [(ngModel)]=\"user.firstName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\"  class=\"form-control\" id=\"lastName\" [(ngModel)]=\"user.lastName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"dateOfBirth\">Date of Birth</label>\n      <input type=\"date\" class=\"form-control\" id=\"dateOfBirth\" [(ngModel)]=\"user.dateOfBirth\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"profileImage\">Profile Image:</label>\n        <img *ngIf=\"user.profileImage != null\" [src]=\"user.profileImage\" \n          height=\"150px\" width=\"150px\">\n        <input type=\"file\" class=\"form-control\"  id=\"profileImage\" \n          (change)=\"handleFileInput($event.target.files)\">\n      </div>\n\n    <button (click)=\"updateUserInfo()\">Update</button>\n  </div>\n</section>"

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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(user, appUser, router, cookie) {
        this.user = user;
        this.appUser = appUser;
        this.router = router;
        this.cookie = cookie;
        this.error = false;
        this.fileToUpload = null;
        this.arrayData = [];
        if (this.cookie.get('isAuthorized') === 'true') {
            this.user.id = this.appUser.decryptData(this.cookie.get('ui'));
            this.appUser.myToken = this.appUser.getCurrentToken();
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
            _this.appUser.getCurrentUser();
            _this.user.profileId = data[0].id.toString();
            _this.user.dateOfBirth = data[0].dateOfBirth;
            _this.user.profileImage = data[0].profileImage;
            console.log('Get user info successfull!');
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        if (this.fileToUpload.type.includes('image/') != true)
            this.error = false;
        else
            this.error = true;
    };
    ProfileComponent.prototype.updateUserInfo = function () {
        this.updateUserName();
        if (this.user.dateOfBirth == null && this.fileToUpload.type
            .includes('image/') == true)
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
            console.log('updated dob');
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.updateInfo = function () {
        this.appUser.updateUserInfo(this.user, this.fileToUpload).subscribe(function (data) {
            console.log('updated dob and image');
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.goBack = function () {
        this.router.navigate(['main']);
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user__WEBPACK_IMPORTED_MODULE_2__["User"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
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

module.exports = "<div class=\"register-wrapper\">\n    <form class=\"frm\">\n        <h1>Register</h1>\n        <input [(ngModel)]=\"input.username\" name=\"username\" type=\"text\" placeholder=\"Username\">\n        <input [(ngModel)]=\"input.password\" name=\"password\" type=\"password\" placeholder=\"Password\">\n        <button (click)=\"onRegister()\">Register User</button>\n    </form>\n</div>\n\n"

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
            console.log('Register successfully!');
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

/***/ "./src/app/task.ts":
/*!*************************!*\
  !*** ./src/app/task.ts ***!
  \*************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isLoaded\">\n    <p>Error occured, please go back!</p>\n    <button class=\"task-button\" (click)=\"goBack()\">Go Back</button>\n</div>\n<div  *ngIf=\"enlarge\" class=\"modal\">\n        \n        <span (click)=\"closeEnlarge()\" class=\"close\">&times;</span>\n\n        <img class=\"modal-content\" *ngIf=\"selectedTask.taskImage != null\" \n            [src]=\"selectedTask.taskImage\">\n\n</div>\n\n<div *ngIf=\"delete\" class=\"delete-alert\" >\n    <p>Do you want to delete this image?</p>\n    <div class=\"buttons\">\n    <button (click)= selectedYes()>Yes</button>\n    <button (click)=\"selectedNo()\">No</button>\n    </div>\n</div>\n\n<section class=\"task-app\" *ngIf=\"isLoaded\" (dragenter)=\"fileOver($event);\">\n    <div class = \"drag-in\" *ngIf=\"in\" (drop)=\"dropped($event);\" (dragover)=\"fileOver($event);\" (dragleave) = \"fileLeave($event);\">Drop file to upload!</div>\n    <button class=\"task-button\" (click)=\"goBack()\">Close</button>\n    <div class=\"task\">\n        <div class=\"task-info\">\n            <p *ngIf=\"errorImage\" style=\"color: red; font-weight: bolder;\">\n                One or more files is not an image file, please re-upload!</p>\n            <p *ngIf=\"errorLength\" style=\"color: red; font-weight: bolder;\">\n                Please re-upload one or more valid file!</p>\n            <h1 class=\"title\" (click)=\"editTitle()\" [class.editing]=\"editing\">\n                {{task?.title}}\n            </h1>\n            <h1><input class=\"edit\" *ngIf=\"editing\" [value]=\"task.title\" \n                    #editedTodo (blur)=\"updateTodo(task, editedTodo.value)\" \n                    (keyup.enter)=\"updateTodo(task, editedTodo.value)\" \n                    (keyup.escape)=\"cancelEditing()\"></h1>\n            <h5>Task ID: {{task?.id}}<br> \n                Created by {{task?.username}}<br>\n                Complete status: {{task?.status}}\n            </h5>\n        </div>\n        <div class=\"image-field\">\n            <div *ngFor=\"let taskImage of taskImages\">          \n                <img (click)=\"enlargeImage(taskImage)\" *ngIf=\"taskImage.taskImage != null\" \n                    [src]=\"taskImage.taskImage\" />\n                <span (click)=\"deleteImage(taskImage)\" class=\"delete\">&times;</span>\n            </div>\n        </div>\n    </div>\n    \n\n</section>\n"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task */ "./src/app/task.ts");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var TaskComponent = /** @class */ (function () {
    function TaskComponent(todoService, taskClass, appUser, router, cookie, main, location) {
        this.todoService = todoService;
        this.taskClass = taskClass;
        this.appUser = appUser;
        this.router = router;
        this.cookie = cookie;
        this.main = main;
        this.location = location;
        this.isLoaded = false;
        this.upload = false;
        this.taskImages = [];
        this.editing = false;
        this.errorImage = false;
        this.errorLength = false;
        this.enlarge = false;
        this.delete = false;
        this.in = false;
        if (this.cookie.get('isAuthorized') === 'true' && this.cookie.get('ti')) {
            this.taskClass.id = this.appUser.decryptData(this.cookie.get('ti'));
            this.todoService.myToken = this.appUser.getCurrentToken();
            this.appUser.myToken = this.appUser.getCurrentToken();
            this.appUser.setLoggedIn(true);
            this.getTask(this.taskClass.id);
        }
        else {
            this.appUser.setLoggedIn(false);
            this.router.navigate(['']);
        }
    }
    TaskComponent.prototype.ngOnInit = function () {
        if (this.taskClass.id != null)
            this.isLoaded = true;
        else
            this.isLoaded = false;
    };
    TaskComponent.prototype.cancelEditing = function () {
        this.editing = false;
    };
    TaskComponent.prototype.editTitle = function () {
        this.editing = true;
    };
    TaskComponent.prototype.enlargeImage = function (task) {
        this.enlarge = true;
        this.selectedTask = task;
    };
    TaskComponent.prototype.deleteImage = function (task) {
        this.delete = true;
        this.selectedTask = task;
    };
    TaskComponent.prototype.dropped = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.files = event.dataTransfer.files;
        if (this.files.length > 0) {
            this.errorLength = false;
            for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
                var file = _a[_i];
                if (file.type.includes("image/") == true) {
                    this.errorImage = false;
                    this.uploadImage(file, file.name);
                    this.upload = true;
                    this.in = false;
                }
                else {
                    this.upload = false;
                    this.errorImage = true;
                    console.log(this.files);
                }
            }
            if (this.upload)
                alert('Successful uploaded ' + this.files.length + ' image(s)!');
        }
        else {
            this.upload = false;
            this.errorLength = true;
        }
        this.in = false;
    };
    TaskComponent.prototype.fileOver = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.in)
            this.in = true;
    };
    TaskComponent.prototype.fileLeave = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.in)
            this.in = false;
    };
    TaskComponent.prototype.uploadImage = function (file, path) {
        var _this = this;
        this.todoService.todoImage(this.taskClass.id, file, path).subscribe(function (data) {
            _this.getTask(_this.taskClass.id);
        }, function (error) {
            console.log(error);
        });
    };
    TaskComponent.prototype.getTask = function (id) {
        var _this = this;
        this.todoService.getTodo(id).subscribe(function (data) {
            _this.task = data;
            console.log('Get task detail succeed');
            _this.appUser.getUsername(_this.task.user)
                .subscribe(function (data) {
                _this.task.username = data[0].username.toString();
            });
            _this.getImage(data.id);
            if (_this.task.is_complete)
                _this.task.status = 'Completed';
            else
                _this.task.status = 'Has not completed';
        }, function (error) {
            console.log(error);
        });
    };
    TaskComponent.prototype.getImage = function (id) {
        var _this = this;
        this.todoService.getImage(id).subscribe(function (data) {
            _this.taskImages = data;
        }, function (error) {
            console.log(error);
        });
    };
    TaskComponent.prototype.updateTodo = function (task, editedTitle) {
        var _this = this;
        this.editing = false;
        if (editedTitle.length < 8) {
            alert('Please input what you want to update to, '
                + 'it needs to be at least 8 characters');
        }
        else {
            task.title = editedTitle;
            this.todoService.updateTodo(task).subscribe(function (data) {
                _this.getTask(_this.task.id);
            }, function (error) {
                console.log(error);
            });
        }
    };
    TaskComponent.prototype.goBack = function () {
        this.cookie.delete('ti', '/');
        this.cookie.delete('taskview', '/');
        this.location.go('/main/');
        this.main.viewTask = false;
        this.main.getTodos();
    };
    TaskComponent.prototype.closeEnlarge = function () {
        this.enlarge = false;
    };
    TaskComponent.prototype.selectedYes = function () {
        var _this = this;
        this.todoService.deleteTaskImage(this.selectedTask.id).subscribe(function (data) {
            console.log('image deleted');
            _this.getImage(_this.task.id);
            _this.delete = false;
        }, function (error) {
            console.log(error);
        });
    };
    TaskComponent.prototype.selectedNo = function () {
        this.delete = false;
    };
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"],
            _task__WEBPACK_IMPORTED_MODULE_2__["Task"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], TaskComponent);
    return TaskComponent;
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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");






var TodoService = /** @class */ (function () {
    function TodoService(http, user, appUser, cookie) {
        this.http = http;
        this.user = user;
        this.appUser = appUser;
        this.cookie = cookie;
        this.myToken = this.user.token;
        // baseUrl = 'http://127.0.0.1:8000';
        this.baseUrl = 'http://todolist-todolist.7e14.starter-us-west-2.openshiftapps.com';
        if (this.cookie.get('5Es85xcdwda65sd12sdsaasdascxa654564982xc21') != null)
            this.myToken = this.appUser.getCurrentToken();
        this.HttpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.myToken });
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
    TodoService.prototype.updateTodo = function (todo) {
        var body = { title: todo.title };
        return this.http.patch(this.baseUrl + '/api/todos/' + todo.id + '/', body, { headers: this.HttpHeaders });
    };
    TodoService.prototype.createTodo = function (text, userId) {
        var body = { title: text, user: userId };
        return this.http.post(this.baseUrl + '/api/todos/', body, { headers: this.HttpHeaders });
    };
    TodoService.prototype.deleteTodo = function (id) {
        return this.http.delete(this.baseUrl + '/api/todos/' + id + '/', { headers: this.HttpHeaders });
    };
    TodoService.prototype.todoImage = function (id, fileToUpload, name) {
        var formData = new FormData();
        formData.append('task', id);
        formData.append('taskImage', fileToUpload, name);
        return this.http.post(this.baseUrl + '/api/taskimage/', formData, { headers: this.HttpHeaders });
    };
    TodoService.prototype.getImage = function (id) {
        return this.http.get(this.baseUrl + '/api/taskimage/?task=' + id, { headers: this.HttpHeaders });
    };
    TodoService.prototype.deleteTaskImage = function (id) {
        return this.http.delete(this.baseUrl + '/api/taskimage/' + id + '/', { headers: this.HttpHeaders });
    };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _user__WEBPACK_IMPORTED_MODULE_3__["User"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_5__);






var UserService = /** @class */ (function () {
    function UserService(http, user, cookie) {
        this.http = http;
        this.user = user;
        this.cookie = cookie;
        this.myToken = this.user.token;
        this.loggedInStatus = false;
        // baseUrl = 'http://127.0.0.1:8000';
        this.baseUrl = 'http://todolist-todolist.7e14.starter-us-west-2.openshiftapps.com';
        if (this.cookie.get('5Es85xcdwda65sd12sdsaasdascxa654564982xc21') != null)
            this.myToken = this.getCurrentToken();
        this.HttpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.myToken });
    }
    UserService.prototype.ngOnInit = function () {
        if (this.cookie.get('5Es85xcdwda65sd12sdsaasdascxa654564982xc21') != null)
            this.myToken = this.getCurrentToken();
        this.HttpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.myToken });
    };
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
    UserService.prototype.getUserById = function (id) {
        return this.http.get(this.baseUrl + '/api/users/' + id + '/', { headers: this.HttpHeaders });
    };
    UserService.prototype.getUserInfo = function (userId) {
        return this.http.get(this.baseUrl + '/api/userinfo/?user=' + userId, { headers: this.HttpHeaders });
    };
    UserService.prototype.registerUser = function (userData) {
        return this.http.post(this.baseUrl + '/api/users/', userData, { headers: this.HttpHeaders });
    };
    UserService.prototype.loginUser = function (userData) {
        return this.http.post(this.baseUrl + '/api/auth/', userData, { headers: this.HttpHeaders });
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
        var _this = this;
        if (this.cookie.get('isAuthorized') === 'true')
            this.currentUser = this.decryptData(this.cookie.get('ui'));
        this.getUserById(this.currentUser).subscribe(function (data) {
            _this.user.id = data.id;
            _this.user.firstName = data.first_name;
            _this.user.lastName = data.last_name;
            _this.user.username = data.username;
            _this.user.isSuperuser = data.is_superuser;
        });
    };
    UserService.prototype.encryptData = function (data) {
        try {
            return crypto_js__WEBPACK_IMPORTED_MODULE_5__["AES"].encrypt(data.toString(), this.user.secretKey).toString();
        }
        catch (error) {
            console.log(error);
        }
    };
    UserService.prototype.decryptData = function (data) {
        try {
            var bytes = crypto_js__WEBPACK_IMPORTED_MODULE_5__["AES"].decrypt(data, this.user.secretKey);
            if (bytes.toString()) {
                return bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_5__["enc"].Utf8);
            }
            return data;
        }
        catch (error) {
            console.log(error);
        }
    };
    UserService.prototype.getCurrentToken = function () {
        return this.decryptData(this.cookie.get('5Es85xcdwda65sd12sdsaasdascxa654564982xc21'));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _user__WEBPACK_IMPORTED_MODULE_3__["User"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
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
        this.id = null;
        this.profileId = 0;
        this.secretKey = '991991170794';
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
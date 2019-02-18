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

/***/ "./src/app/admin-posts/admin-posts.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-posts/admin-posts.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBvc3RzL2FkbWluLXBvc3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-posts/admin-posts.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-posts/admin-posts.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"container\">\n          <div class=\"row\">\n\n              <div class=\"col-md-12\">\n                  <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\">\n                          <h2>\n                              Posts\n\n                              <a href=\"/posts/create\" class=\"btn btn-default pull-right\">Create New</a>\n                          </h2>\n                      </div>\n\n                      <div class=\"panel-body\">\n                          <table class=\"table\">\n                              <thead>\n                                  <tr>\n                                      <th>Title</th>\n                                      <th>Body</th>\n                                      <th>Author</th>\n                                      <th>Category</th>\n                                      <th>Tags</th>\n                                      <th>Published</th>\n                                      <th>Action</th>\n                                  </tr>\n                              </thead>\n                              <tbody>\n                                  <tr *ngFor=\"let obj of data\">\n                                      <td>{{obj.tittle}}</td>\n                                      <td>{{obj.body}}</td>\n                                      <td>{{obj.author}}</td>\n                                      <td>ipsum</td>\n                                      <td></td>\n                                      <td>No</td>\n                                      <td>\n                                          <a href=\"/posts/1/publish\" data-method=\"PUT\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                              data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-warning\">Publish</a>\n                                          <a href=\"/posts/1\" class=\"btn btn-xs btn-success\">Show</a>\n                                          <a href=\"/posts/1/edit\" class=\"btn btn-xs btn-info\">Edit</a>\n                                          <a href=\"/posts/1\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                              data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                      </td>\n                                  </tr>\n\n\n\n\n\n                              </tbody>\n                          </table>\n\n                          <ul class=\"pagination\">\n\n                              <li class=\"disabled\"><span>«</span></li>\n\n\n\n\n\n                              <li class=\"active\"><span>1</span></li>\n                              <li><a href=\"/posts?page=2\">2 </a> </li> <li><a href=\"/posts?page=3\">3 </a> </li> <li><a href=\"/posts?page=2\"\n                                              rel=\"next\">»</a></li>\n                          </ul>\n\n\n                      </div>\n                  </div>\n              </div>\n\n          </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/admin-posts/admin-posts.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-posts/admin-posts.component.ts ***!
  \******************************************************/
/*! exports provided: AdminPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPostsComponent", function() { return AdminPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-service.service */ "./src/app/admin-service.service.ts");




var AdminPostsComponent = /** @class */ (function () {
    function AdminPostsComponent(adminService, route) {
        this.adminService = adminService;
        this.route = route;
        this.data = [];
    }
    AdminPostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getPosts().subscribe(function (pro) { return _this.data = pro; });
    };
    AdminPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-posts',
            template: __webpack_require__(/*! ./admin-posts.component.html */ "./src/app/admin-posts/admin-posts.component.html"),
            styles: [__webpack_require__(/*! ./admin-posts.component.css */ "./src/app/admin-posts/admin-posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admin_service_service__WEBPACK_IMPORTED_MODULE_3__["AdminServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminPostsComponent);
    return AdminPostsComponent;
}());



/***/ }),

/***/ "./src/app/admin-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/admin-service.service.ts ***!
  \******************************************/
/*! exports provided: AdminServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminServiceService", function() { return AdminServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AdminServiceService = /** @class */ (function () {
    function AdminServiceService(http) {
        this.http = http;
        this.adminPosts = 'http://localhost:1337/posts';
        // 'http://localhost:3000/posts';
        this.urlComment = 'http://localhost:3000/posts/1?_embed=comments';
    }
    AdminServiceService.prototype.getPosts = function () {
        return this.http.get("" + this.adminPosts);
    };
    AdminServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminServiceService);
    return AdminServiceService;
}());



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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _admin_posts_admin_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-posts/admin-posts.component */ "./src/app/admin-posts/admin-posts.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tags/tags.component */ "./src/app/tags/tags.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");













var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'adminPosts', component: _admin_posts_admin_posts_component__WEBPACK_IMPORTED_MODULE_7__["AdminPostsComponent"] },
    { path: 'categories', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_8__["CategoriesComponent"] },
    { path: 'comments', component: _comments_comments_component__WEBPACK_IMPORTED_MODULE_9__["CommentsComponent"] },
    { path: 'tags', component: _tags_tags_component__WEBPACK_IMPORTED_MODULE_10__["TagsComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_11__["UsersComponent"] },
    { path: 'post', component: _post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"] },
    { path: 'navUser', component: _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"] },
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav></app-nav>\n<router-outlet></router-outlet>\n"

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
        this.title = 'hostingBlog';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _admin_posts_admin_posts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-posts/admin-posts.component */ "./src/app/admin-posts/admin-posts.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tags/tags.component */ "./src/app/tags/tags.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _nav_admin_nav_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nav-admin/nav-admin.component */ "./src/app/nav-admin/nav-admin.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _admin_posts_admin_posts_component__WEBPACK_IMPORTED_MODULE_11__["AdminPostsComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_13__["CommentsComponent"],
                _tags_tags_component__WEBPACK_IMPORTED_MODULE_14__["TagsComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_15__["UsersComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_16__["PostComponent"],
                _nav_admin_nav_admin_component__WEBPACK_IMPORTED_MODULE_17__["NavAdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n\r\n  margin-right: 4px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuXHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h2>\n                            Categories\n\n                            <a href=\"categories/create\" class=\"btn btn-default pull-right\">Create New</a>\n                        </h2>\n                    </div>\n\n                    <div class=\"panel-body\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th>Name</th>\n                                    <th>Post Count</th>\n                                    <th>Action</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>sedd</td>\n                                    <td>1</td>\n                                    <td>\n                                        <a href=\"categories/1/edit\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"categories/1\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>ut</td>\n                                    <td>4</td>\n                                    <td>\n                                        <a href=\"categories/2/edit\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"categories/2\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>id</td>\n                                    <td>1</td>\n                                    <td>\n                                        <a href=\"categories/3/edit\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"categories/3\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>occaecati</td>\n                                    <td>0</td>\n                                    <td>\n                                        <a href=\"categories/4/edit\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"categories/4\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>sint</td>\n                                    <td>3</td>\n                                    <td>\n                                        <a href=\"categories/5/edit\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"categories/5\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>quia</td>\n                                    <td>2</td>\n                                    <td>\n                                        <a href=\"categories/6/edit\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"categories/6\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>ipsum</td>\n                                    <td>4</td>\n                                    <td>\n                                        <a href=\"categories/7/edit\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"categories/7\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>quisquam</td>\n                                    <td>3</td>\n                                    <td>\n                                        <a href=\"categories/8/edit\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"categories/8\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>unde</td>\n                                    <td>6</td>\n                                    <td>\n                                        <a href=\"categories/9/edit\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"categories/9\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>voluptatum</td>\n                                    <td>1</td>\n                                    <td>\n                                        <a href=\"categories/10/edit\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"categories/10\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/comments/comments.component.css":
/*!*************************************************!*\
  !*** ./src/app/comments/comments.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/comments/comments.component.html":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h2>\n                            Comments\n\n                            <a href=\"\" class=\"btn btn-default pull-right\">Create New</a>\n                        </h2>\n                    </div>\n\n                    <div class=\"panel-body\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th>Post</th>\n                                    <th>Comment</th>\n                                    <th>Action</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>Fugit sit rerum et atque qui.</td>\n                                    <td>Soluta sed atque aut rem ipsam asperiores. Rerum nobis beatae voluptas iusto\n                                        quas. Qui nihil sed et itaque vero neque dolores expedita. Aut voluptatem\n                                        consequatur sit eligendi corporis hic id. Excepturi nesciunt impedit delectus\n                                        id ea.</td>\n                                    <td>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Autem rem repudiandae dolores alias sunt asperiores deserunt.</td>\n                                    <td>Officiis debitis vel unde amet quia. Nihil omnis voluptas voluptate non placeat\n                                        incidunt impedit et. Eligendi enim nisi minus nobis.</td>\n                                    <td>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Sapiente dolorum quo non voluptates atque dolore.</td>\n                                    <td>Iure suscipit et est quia culpa nemo. Quam sint ipsam perspiciatis quo\n                                        consequuntur. Ipsa quos veniam quia molestiae dolor ullam.</td>\n                                    <td>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Sit veniam et fugit est saepe repellendus soluta.</td>\n                                    <td>Tempora fugiat rem quo sint. Et ipsum voluptates reprehenderit tempora\n                                        cupiditate aut. Nesciunt in nihil sit hic possimus.</td>\n                                    <td>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Similique ea eum odit aspernatur quibusdam atque.</td>\n                                    <td>Dignissimos nihil quis aut tempore est aut quia. Reiciendis quisquam\n                                        repudiandae cum quia. Quaerat et commodi voluptatem quia voluptatibus\n                                        molestias. Soluta aut aut alias velit alias omnis. Pariatur nihil delectus quas\n                                        in maxime natus voluptatum qui.</td>\n                                    <td>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Voluptatem ratione quidem eos quod animi.</td>\n                                    <td>Error quos nobis nihil ut ea. Eos non blanditiis aspernatur et accusantium sit.\n                                        Qui pariatur facilis quia sunt corrupti dignissimos itaque perferendis. Placeat\n                                        amet repudiandae exercitationem recusandae dicta qui ullam. Non sapiente dicta\n                                        id.</td>\n                                    <td>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Sit veniam et fugit est saepe repellendus soluta.</td>\n                                    <td>Asperiores totam voluptate ducimus asperiores. Et ut quia voluptate id maxime\n                                        aut aut. Consequuntur ea aliquam quidem labore molestias sapiente. Ut deleniti\n                                        voluptatem a ratione.</td>\n                                    <td>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Autem rem repudiandae dolores alias sunt asperiores deserunt.</td>\n                                    <td>Quis sunt nesciunt autem quas. Cum exercitationem cumque autem sint suscipit\n                                        quam. In laboriosam iusto velit ut expedita nihil minus.</td>\n                                    <td>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Autem rem repudiandae dolores alias sunt asperiores deserunt.</td>\n                                    <td>Quas voluptatibus id enim. Sequi laudantium est saepe aut unde architecto\n                                        veritatis. Laudantium vero quidem placeat provident. Ut autem ullam dolores est\n                                        fugiat aliquam.</td>\n                                    <td>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Deleniti quisquam ipsam sint veritatis neque culpa quae.</td>\n                                    <td>Quaerat accusantium rem facilis assumenda doloremque. Esse ex ut vero rerum\n                                        pariatur. Dolorem aut dolores nisi ad natus quis. Est eos possimus consequatur\n                                        illum velit. Ut consequuntur voluptate nemo voluptatum autem.</td>\n                                    <td>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                        <ul class=\"pagination\">\n\n                            <li class=\"disabled\"><span>«</span></li>\n\n\n\n\n\n                            <li class=\"active\"><span>1</span></li>\n                            <li><a href=\"\">2</a></li>\n                            <li><a href=\"\">3</a></li>\n                            <li><a href=\"\">4</a></li>\n\n\n                            <li><a href=\"\" rel=\"next\">»</a></li>\n                        </ul>\n\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommentsComponent = /** @class */ (function () {
    function CommentsComponent() {
    }
    CommentsComponent.prototype.ngOnInit = function () {
    };
    CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/comments/comments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n\r\n  margin-left: 7px;\r\n\r\n}\r\n.label{\r\n\r\n\r\n  margin-right:5px;\r\n  margin-left:5px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZ0JBQWdCOztBQUVsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsZUFBZTs7QUFFakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG5cclxuICBtYXJnaW4tbGVmdDogN3B4O1xyXG5cclxufVxyXG4ubGFiZWx7XHJcblxyXG5cclxuICBtYXJnaW4tcmlnaHQ6NXB4O1xyXG4gIG1hcmdpbi1sZWZ0OjVweDtcclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"container\">\n\n        <div class=\"row form-search\">\n            <form method=\"GET\" action=\"\" accept-charset=\"UTF-8\" role=\"form\">\n                <div class=\"col-md-10\">\n                    <input class=\"form-control\" placeholder=\"Search...\" name=\"search\" type=\"text\">\n                </div>\n                <div class=\"col-md-2\">\n                    <input class=\"btn btn-block btn-default\" type=\"submit\" value=\"Sumbit\">\n                </div>\n            </form>\n        </div>\n<br>\n\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        Quo ut eius magni ut adipisci perspiciatis non maxime. - <small>by Prof. General Huel IV</small>\n\n                        <span class=\"pull-right\">\n                            Thu, Jan 10, 2019 7:50 AM\n                        </span>\n                    </div>\n\n                    <div class=\"panel-body\">\n                        <p>Animi praesentium ad ipsum adipisci cum ea rerum quasi. Harum nam aliquid asperiores.\n                            Nesciunt natus rerum et ut ipsum. Voluptas numquam et cumque et. Enim mollitia harum\n                            fugit dignissimos id dignissi...</p>\n                        <p>\n                            Tags:\n                            <span class=\"label label-danger\">No tag found.</span>\n                        </p>\n                        <p>\n                            <span class=\"btn btn-sm btn-success\">ipsum</span>\n                            <span class=\"btn btn-sm btn-info\">Comments <span class=\"badge\"></span></span>\n\n                            <a href=\"\" class=\"btn btn-sm btn-primary\">See more</a>\n                        </p>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        Similique ea eum odit aspernatur quibusdam atque. - <small>by Bella Kuhn V</small>\n\n                        <span class=\"pull-right\">\n                            Thu, Jan 10, 2019 7:50 AM\n                        </span>\n                    </div>\n\n                    <div class=\"panel-body\">\n                        <p>Quae ratione error dicta pariatur sit molestiae. Eos quo libero sed dolor in modi\n                            inventore quo. Et nam dolorem libero perferendis. Et nisi veritatis quos vel facilis\n                            consequatur doloremque. Eius qui...</p>\n                        <p>\n                            Tags:\n                            <span class=\"label label-default\">nam</span>\n                            <span class=\"label label-default\">sit</span>\n                            <span class=\"label label-default\">omnis</span>\n                        </p>\n                        <p>\n                            <span class=\"btn btn-sm btn-success\">unde</span>\n                            <span class=\"btn btn-sm btn-info\">Comments <span class=\"badge\"></span></span>\n\n                            <a href=\"\" class=\"btn btn-sm btn-primary\">See more</a>\n                        </p>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        Culpa odio hic est quod dolorum rerum. - <small>by Stone Hirthe</small>\n\n                        <span class=\"pull-right\">\n                            Thu, Jan 10, 2019 7:50 AM\n                        </span>\n                    </div>\n\n                    <div class=\"panel-body\">\n                        <p>Perspiciatis nesciunt nesciunt et maiores porro sunt. Provident accusantium molestiae\n                            quis dolorum iste soluta illo. Deserunt eveniet maiores at quidem. Delectus aut aliquam\n                            quo et id. Doloribus ea es...</p>\n                        <p>\n                            Tags:\n                            <span class=\"label label-default\">non</span>\n                            <span class=\"label label-default\">et</span>\n                        </p>\n                        <p>\n                            <span class=\"btn btn-sm btn-success\">id</span>\n                            <span class=\"btn btn-sm btn-info\">Comments <span class=\"badge\"></span></span>\n\n                            <a href=\"\" class=\"btn btn-sm btn-primary\">See more</a>\n                        </p>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        Quia harum tempora vitae illo sed. - <small>by Lacey Gaylord DVM</small>\n\n                        <span class=\"pull-right\">\n                            Thu, Jan 10, 2019 7:50 AM\n                        </span>\n                    </div>\n\n                    <div class=\"panel-body\">\n                        <p>Ullam qui dicta odit sint rerum in enim odit. Esse debitis maiores aliquam aut\n                            necessitatibus. Molestiae qui quisquam possimus vitae harum. Ab illo dolor rerum cum\n                            placeat fugit. Et et molestiae incid...</p>\n                        <p>\n                            Tags:\n                            <span class=\"label label-default\">et</span>\n                            <span class=\"label label-default\">nam</span>\n                            <span class=\"label label-default\">molestias</span>\n                        </p>\n                        <p>\n                            <span class=\"btn btn-sm btn-success\">unde</span>\n                            <span class=\"btn btn-sm btn-info\">Comments <span class=\"badge\"></span></span>\n\n                            <a href=\"\" class=\"btn btn-sm btn-primary\">See more</a>\n                        </p>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        Modi hic dolor qui sit. - <small>by Mrs. Izabella Bashirian Sr.</small>\n\n                        <span class=\"pull-right\">\n                            Thu, Jan 10, 2019 7:50 AM\n                        </span>\n                    </div>\n\n                    <div class=\"panel-body\">\n                        <p>Consequatur perspiciatis deleniti quia laborum omnis sed architecto. Saepe accusantium\n                            ducimus non necessitatibus numquam qui ut quo. Provident sit aut ut ea assumenda fugit\n                            necessitatibus animi. Odit...</p>\n                        <p>\n                            Tags:\n                            <span class=\"label label-danger\">No tag found.</span>\n                        </p>\n                        <p>\n                            <span class=\"btn btn-sm btn-success\">ut</span>\n                            <span class=\"btn btn-sm btn-info\">Comments <span class=\"badge\"></span></span>\n\n                            <a href=\"\" class=\"btn btn-sm btn-primary\">See more</a>\n                        </p>\n                    </div>\n                </div>\n\n                <div align=\"center\">\n                    <ul class=\"pagination\">\n\n                        <li class=\"disabled\"><span>« Previous</span></li>\n\n\n                        <li><a href=\"\" rel=\"next\">Next »</a></li>\n                    </ul>\n\n                </div>\n\n            </div>\n\n\n\n        </div>\n\n\n\n    </div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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

module.exports = "\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">Login</div>\n                    <div class=\"panel-body\">\n                        <form [formGroup]= \"loginForm\" class=\"form-horizontal\" role=\"form\" method=\"POST\" action=\"\">\n                            <div class=\"form-group\">\n                                <label for=\"email\" class=\"col-md-4 control-label\">E-Mail Address</label>\n\n                                <div class=\"col-md-6\">\n                                    <input  formControlName=\"email\" id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" value=\"\" required=\"\"\n                                        autofocus=\"\">\n\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"password\" class=\"col-md-4 control-label\">Password</label>\n\n                                <div class=\"col-md-6\">\n                                    <input formControlName=\"password\" id=\"password\" type=\"password\" class=\"form-control\" name=\"password\" required=\"\">\n\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <div class=\"col-md-6 col-md-offset-4\">\n                                    <div class=\"checkbox\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"remember\"> Remember Me\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <div class=\"col-md-8 col-md-offset-4\">\n                                    <button type=\"submit\" class=\"btn btn-primary\"  (click)= 'login()'>\n                                        Login\n                                    </button>\n\n                                    <a  class=\"btn btn-link\" href=\"\">\n                                        Forgot Your Password?\n                                        <!--\n                                          <a *ngFor = \"let obj of users\" >\n                                          {{obj.name}} ||\n                                        {{obj.email}} ||\n                                        {{obj.roles}} -->\n\n\n                                    </a>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(usersService, route) {
        this.usersService = usersService;
        this.route = route;
        this.users = [];
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
        });
    }
    LoginComponent.prototype.login = function () {
        alert('test login');
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var data = _a[_i];
            if (data.email === this.loginForm.value.email && data.password === this.loginForm.value.password && data.roles === 'admin') {
                this.usersService.isAdmin = true;
                this.route.navigate(['/adminPosts']);
            }
            else {
                this.usersService.isLogin = true;
                this.route.navigate(['/home']);
            }
        }
    };
    //  if (this.users === ['access_token']) {
    //     localStorage.setItem('token', this.users['']);
    //     this.usersService.isLogin = true;
    //     if (this.users.includes('admin')) {
    //       this.usersService.isAdmin = true;
    //      // this.toastr.successToastr('Logged in successfully');
    //       this.route.navigateByUrl('/adminPosts');
    //     } else {
    //   //    this.toastr.successToastr('Logged in successfully');
    //       this.route.navigateByUrl('/home');
    //     }
    //   }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.getUsers()
            .subscribe(function (arg) { return _this.users = arg; });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav-admin/nav-admin.component.css":
/*!***************************************************!*\
  !*** ./src/app/nav-admin/nav-admin.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1hZG1pbi9uYXYtYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav-admin/nav-admin.component.html":
/*!****************************************************!*\
  !*** ./src/app/nav-admin/nav-admin.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- nav admin  -->\n<nav class=\"navbar navbar-default navbar-static-top\">\n  <div class=\"container\">\n      <div class=\"navbar-header\">\n\n          <!-- Collapsed Hamburger -->\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#app-navbar-collapse\">\n              <span class=\"sr-only\">Toggle Navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n          </button>\n\n          <!-- Branding Image -->\n          <a class=\"navbar-brand\" href=\"\">\n              Laravel Blog\n          </a>\n      </div>\n\n      <div class=\"collapse navbar-collapse\" id=\"app-navbar-collapse\">\n          <!-- Left Side Of Navbar -->\n\n          <ul class=\"nav navbar-nav\">\n            <li><a   *ngIf=\"usersService.isAdmin\" routerLink=\"/adminPosts\">Posts</a></li>\n            <li><a   *ngIf=\"usersService.isAdmin\"  routerLink=\"/categories\">Categories</a></li>\n            <li><a   *ngIf=\"usersService.isAdmin\" routerLink=\"/comments\">Comments</a></li>\n            <li><a   *ngIf=\"usersService.isAdmin\"  routerLink=\"tags\">Tags</a></li>\n\n            <li><a  *ngIf=\"usersService.isAdmin\" routerLink=\"users\">Users</a></li>\n          </ul>\n\n          <!-- Right Side Of Navbar -->\n          <ul class=\"nav navbar-nav navbar-right\">\n              <!-- Authentication Links -->\n              <li class=\"dropdown\">\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">\n                      Admin <span class=\"caret\"></span>\n                  </a>\n\n                  <ul class=\"dropdown-menu\" role=\"menu\">\n                      <li>\n                          <a href=\"logout\" onclick=\"event.preventDefault();\n                                           document.getElementById('logout-form').submit();\">\n                              Logout\n                          </a>\n\n                          <form id=\"logout-form\" action=\"logout\" method=\"POST\" style=\"display: none;\">\n                              <input type=\"hidden\" name=\"_token\" value=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\">\n                          </form>\n                      </li>\n                  </ul>\n              </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav-admin/nav-admin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/nav-admin/nav-admin.component.ts ***!
  \**************************************************/
/*! exports provided: NavAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavAdminComponent", function() { return NavAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");



var NavAdminComponent = /** @class */ (function () {
    function NavAdminComponent(usersService) {
        this.usersService = usersService;
    }
    NavAdminComponent.prototype.ngOnInit = function () {
    };
    NavAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-admin',
            template: __webpack_require__(/*! ./nav-admin.component.html */ "./src/app/nav-admin/nav-admin.component.html"),
            styles: [__webpack_require__(/*! ./nav-admin.component.css */ "./src/app/nav-admin/nav-admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], NavAdminComponent);
    return NavAdminComponent;
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

module.exports = "\n    <nav class=\"navbar navbar-default navbar-static-top\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n\n                <!-- Collapsed Hamburger -->\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#app-navbar-collapse\">\n                    <span class=\"sr-only\">Toggle Navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n\n                <!-- Branding Image -->\n                <a class=\"navbar-brand\" href=\"\">\n                    Laravel Blog\n                </a>\n\n            </div>\n\n            <div class=\"collapse navbar-collapse\" id=\"app-navbar-collapse\">\n                <!-- Left Side Of Navbar -->\n                <ul class=\"nav navbar-nav\">\n                    <li><a    *ngIf=\"!usersService.isAdmin\" routerLink=\"/home\">Home</a></li>\n                    <li><a   *ngIf=\"!usersService.isAdmin\" routerLink=\"/post\">Post</a></li>\n                  <li><a   *ngIf=\"usersService.isAdmin\" routerLink=\"/adminPosts\">Posts</a></li>\n                  <li><a   *ngIf=\"usersService.isAdmin\"  routerLink=\"/categories\">Categories</a></li>\n                  <li><a   *ngIf=\"usersService.isAdmin\" routerLink=\"/comments\">Comments</a></li>\n                  <li><a   *ngIf=\"usersService.isAdmin\"  routerLink=\"tags\">Tags</a></li>\n\n                  <li><a  *ngIf=\"usersService.isAdmin\" routerLink=\"users\">Users</a></li>\n              </ul>\n\n                <!-- Right Side Of Navbar -->\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <!-- Authentication Links -->\n\n                    <li><a  *ngIf = \"!usersService.isAdmin && !usersService.isLogin\" routerLink=\"/login\">Login</a></li>\n                    <li><a   *ngIf = \"!usersService.isAdmin && !usersService.isLogin\" routerLink=\"/register\" >Register</a></li>\n                    <li><a  *ngIf = \"!usersService.isAdmin && usersService.isLogin\" class=\"nav-item nav-link\" routerLink=\"/login\" >Logout</a></li>\n\n                    <li class=\"dropdown\" *ngIf = \"usersService.isAdmin\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">\n                          Admin <span class=\"caret\"></span>\n                      </a>\n\n                      <ul class=\"dropdown-menu\" role=\"menu\">\n                          <li>\n                              <a href=\"logout\" onclick=\"event.preventDefault();\n                                               document.getElementById('logout-form').submit();\">\n                                  Logout\n                              </a>\n\n                              <form id=\"logout-form\" action=\"logout\" method=\"POST\" style=\"display: none;\">\n                                  <input type=\"hidden\" name=\"_token\" value=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\">\n                              </form>\n                          </li>\n                      </ul>\n                  </li>\n\n\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n"

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
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");



var NavComponent = /** @class */ (function () {
    function NavComponent(usersService) {
        this.usersService = usersService;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"panel panel-default\" *ngFor=\"let post of data\">\n                    <div class=\"panel-heading\">\n                       {{post.tittle}} - <small>by {{post.author}}</small>\n\n                        <span class=\"pull-right\">\n                            Thu, Jan 10, 2019 7:50 AM\n                        </span>\n                    </div>\n\n                    <div class=\"panel-body\">\n                        <p> {{post.body}}</p>\n                        <p>\n                            Category: <span class=\"label label-success\">ipsum</span> <br>\n                            Tags:\n                            <span class=\"label label-danger\">No tag found.</span>\n                        </p>\n                    </div>\n                </div>\n\n\n\n            </div>\n\n\n\n        </div>\n\n    </div>\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");




var PostComponent = /** @class */ (function () {
    function PostComponent(usersService, route) {
        this.usersService = usersService;
        this.route = route;
        this.data = [];
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.getPosts().subscribe(function (pro) { return _this.data = pro; });
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PostComponent);
    return PostComponent;
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

module.exports = "\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">Register</div>\n                    <div class=\"panel-body\">\n                        <form [formGroup]=\"registerForm\"  class=\"form-horizontal\" role=\"form\" method=\"POST\" action=\"\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"col-md-4 control-label\" >Name</label>\n\n                                <div class=\"col-md-6\">\n                                    <input formControlName=\"name\" id=\"name\" type=\"text\" class=\"form-control\" name=\"name\" value=\"\" required=\"\"\n                                        autofocus=\"\">\n\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"email\" class=\"col-md-4 control-label\">E-Mail Address</label>\n\n                                <div class=\"col-md-6\">\n                                    <input  formControlName=\"email\" id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" value=\"\" required=\"\">\n\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"password\" class=\"col-md-4 control-label\">Password</label>\n\n                                <div class=\"col-md-6\">\n                                    <input formControlName=\"password\" id=\"password\" type=\"password\" class=\"form-control\" name=\"password\" required=\"\">\n\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"password-confirm\" class=\"col-md-4 control-label\">Confirm Password</label>\n\n                                <div class=\"col-md-6\">\n                                    <input  formControlName=\"passwordConfirm\" id=\"password-confirm\" type=\"password\" class=\"form-control\" name=\"password_confirmation\"\n                                        required=\"\">\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <div class=\"col-md-6 col-md-offset-4\">\n                                    <button type=\"submit\" class=\"btn btn-primary\" (click)='register(registerForm)' >\n                                        Register\n                                    </button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    }
    RegisterComponent.prototype.register = function () {
        console.log(this.registerForm);
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/tags/tags.component.css":
/*!*****************************************!*\
  !*** ./src/app/tags/tags.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.btn {\r\n\r\n    margin-right:4px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFncy90YWdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7SUFFSSxnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvdGFncy90YWdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5idG4ge1xyXG5cclxuICAgIG1hcmdpbi1yaWdodDo0cHg7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tags/tags.component.html":
/*!******************************************!*\
  !*** ./src/app/tags/tags.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h2>\n                            Tags\n\n                            <a href=\"\" class=\"btn btn-default pull-right\">Create New</a>\n                        </h2>\n                    </div>\n\n                    <div class=\"panel-body\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th>Name</th>\n                                    <th>Action</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>sit</td>\n                                    <td>\n                                        <a href=\"\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>illum</td>\n                                    <td>\n                                        <a href=\"\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>nam</td>\n                                    <td>\n                                        <a href=\"\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>ad</td>\n                                    <td>\n                                        <a href=\"\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>debitis</td>\n                                    <td>\n                                        <a href=\"\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>non</td>\n                                    <td>\n                                        <a href=\"\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>et</td>\n                                    <td>\n                                        <a href=\"\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>nihil</td>\n                                    <td>\n                                        <a href=\"\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>molestias</td>\n                                    <td>\n                                        <a href=\"\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>omnis</td>\n                                    <td>\n                                        <a href=\"\" class=\"btn btn-xs btn-info\">Edit</a>\n                                        <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                            data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/tags/tags.component.ts":
/*!****************************************!*\
  !*** ./src/app/tags/tags.component.ts ***!
  \****************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TagsComponent = /** @class */ (function () {
    function TagsComponent() {
    }
    TagsComponent.prototype.ngOnInit = function () {
    };
    TagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__(/*! ./tags.component.html */ "./src/app/tags/tags.component.html"),
            styles: [__webpack_require__(/*! ./tags.component.css */ "./src/app/tags/tags.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "./src/app/users.service.ts":
/*!**********************************!*\
  !*** ./src/app/users.service.ts ***!
  \**********************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.isLogin = false;
        this.isAdmin = false;
        this.urlUsers = 'http://localhost:1337/accounts';
        this.urlPosts = 'http://localhost:1337/posts';
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get("" + this.urlUsers);
    };
    UsersService.prototype.getPosts = function () {
        return this.http.get("" + this.urlPosts);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n\n        <div class=\"col-md-12\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h2>\n                        Users\n                    </h2>\n                </div>\n\n                <div class=\"panel-body\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>Name</th>\n                                <th>Email</th>\n                                <th>Admin?</th>\n                                <th>No of Posts</th>\n                                <th>Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>Admin</td>\n                                <td>admin@admin.ps</td>\n                                <td>Yes</td>\n                                <td>3</td>\n                                <td>\n                                    <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                        data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Reese Dickens</td>\n                                <td>alexys.mraz@example.com</td>\n                                <td>No</td>\n                                <td>1</td>\n                                <td>\n                                    <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                        data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Mrs. Izabella Bashirian Sr.</td>\n                                <td>bwalter@example.org</td>\n                                <td>No</td>\n                                <td>3</td>\n                                <td>\n                                    <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                        data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Lacey Gaylord DVM</td>\n                                <td>botsford.karlee@example.org</td>\n                                <td>No</td>\n                                <td>2</td>\n                                <td>\n                                    <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                        data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Favian Halvorson</td>\n                                <td>jjohnson@example.org</td>\n                                <td>No</td>\n                                <td>4</td>\n                                <td>\n                                    <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                        data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Prof. General Huel IV</td>\n                                <td>gwendolyn.herzog@example.com</td>\n                                <td>No</td>\n                                <td>3</td>\n                                <td>\n                                    <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                        data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Kyra Deckow</td>\n                                <td>edythe56@example.org</td>\n                                <td>No</td>\n                                <td>1</td>\n                                <td>\n                                    <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                        data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Stone Hirthe</td>\n                                <td>flavio.schmitt@example.com</td>\n                                <td>No</td>\n                                <td>3</td>\n                                <td>\n                                    <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                        data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Bella Kuhn V</td>\n                                <td>antonina78@example.org</td>\n                                <td>No</td>\n                                <td>3</td>\n                                <td>\n                                    <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                        data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>Savion Hane</td>\n                                <td>walter.orlo@example.com</td>\n                                <td>No</td>\n                                <td>2</td>\n                                <td>\n                                    <a href=\"\" data-method=\"DELETE\" data-token=\"32Mxrb2s2QPyv3C1h4iYcbfZBT7PmU7Tfm9koxkk\"\n                                        data-confirm=\"Are you sure?\" class=\"btn btn-xs btn-danger\">Delete</a>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n\n\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
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

module.exports = __webpack_require__(/*! F:\hosting angular\hostingBlog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
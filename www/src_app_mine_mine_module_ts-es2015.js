(self["webpackChunkDoIonicAngular"] = self["webpackChunkDoIonicAngular"] || []).push([["src_app_mine_mine_module_ts"],{

/***/ 98760:
/*!*********************************************!*\
  !*** ./src/app/mine/mine-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinePageRoutingModule": function() { return /* binding */ MinePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _mine_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mine.page */ 42038);




const routes = [
    {
        path: '',
        component: _mine_page__WEBPACK_IMPORTED_MODULE_0__.MinePage
    }
];
let MinePageRoutingModule = class MinePageRoutingModule {
};
MinePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MinePageRoutingModule);



/***/ }),

/***/ 76322:
/*!*************************************!*\
  !*** ./src/app/mine/mine.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinePageModule": function() { return /* binding */ MinePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _mine_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mine-routing.module */ 98760);
/* harmony import */ var _mine_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mine.page */ 42038);







let MinePageModule = class MinePageModule {
};
MinePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mine_routing_module__WEBPACK_IMPORTED_MODULE_0__.MinePageRoutingModule
        ],
        declarations: [_mine_page__WEBPACK_IMPORTED_MODULE_1__.MinePage]
    })
], MinePageModule);



/***/ }),

/***/ 42038:
/*!***********************************!*\
  !*** ./src/app/mine/mine.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinePage": function() { return /* binding */ MinePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mine_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mine.page.html */ 87659);
/* harmony import */ var _mine_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mine.page.scss */ 54937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let MinePage = class MinePage {
    constructor() { }
    ngOnInit() {
    }
};
MinePage.ctorParameters = () => [];
MinePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-mine',
        template: _raw_loader_mine_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mine_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MinePage);



/***/ }),

/***/ 54937:
/*!*************************************!*\
  !*** ./src/app/mine/mine.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaW5lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 87659:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mine/mine.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>我的</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-icon name=\"phone-portrait-outline\" style=\"color: dodgerblue;\"></ion-icon>\n      <ion-label>修改密码</ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"keypad-outline\" style=\"color: gold;\"></ion-icon>\n      <ion-label>修改手势密码</ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"alert-circle-outline\"></ion-icon>\n      <ion-label>关于</ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"people-circle-outline\"></ion-icon>\n      <ion-label>客服热线 400-920-0800</ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <!-- <ion-list>\n    <ion-item>\n      <ion-label>版本号</ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list> -->\n\n  <!-- <div style=\"text-align: center; \n        margin-left: 30px; \n        margin-right: 30px;\n        margin-top: 30px; \n        background-color: rgb(199, 64, 15);\n         height: 44px;\n          border-radius: 22px;\n           font-style: normal;\"> -->\n          <ion-button block (click)=\"logOut()\" style=\"text-align: center\">\n            退出登录\n          </ion-button>\n  <!-- </div> -->\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_mine_mine_module_ts-es2015.js.map
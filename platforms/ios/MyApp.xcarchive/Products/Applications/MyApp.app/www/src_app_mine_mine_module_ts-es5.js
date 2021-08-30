(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkDoIonicAngular"] = self["webpackChunkDoIonicAngular"] || []).push([["src_app_mine_mine_module_ts"], {
    /***/
    98760: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MinePageRoutingModule": function MinePageRoutingModule() {
          return (
            /* binding */
            _MinePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _mine_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mine.page */
      42038);

      var routes = [{
        path: '',
        component: _mine_page__WEBPACK_IMPORTED_MODULE_0__.MinePage
      }];

      var _MinePageRoutingModule = function MinePageRoutingModule() {
        _classCallCheck(this, MinePageRoutingModule);
      };

      _MinePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MinePageRoutingModule);
      /***/
    },

    /***/
    76322: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MinePageModule": function MinePageModule() {
          return (
            /* binding */
            _MinePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _mine_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mine-routing.module */
      98760);
      /* harmony import */


      var _mine_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mine.page */
      42038);

      var _MinePageModule = function MinePageModule() {
        _classCallCheck(this, MinePageModule);
      };

      _MinePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _mine_routing_module__WEBPACK_IMPORTED_MODULE_0__.MinePageRoutingModule],
        declarations: [_mine_page__WEBPACK_IMPORTED_MODULE_1__.MinePage]
      })], _MinePageModule);
      /***/
    },

    /***/
    42038: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MinePage": function MinePage() {
          return (
            /* binding */
            _MinePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_mine_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./mine.page.html */
      87659);
      /* harmony import */


      var _mine_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mine.page.scss */
      54937);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _MinePage = /*#__PURE__*/function () {
        function MinePage() {
          _classCallCheck(this, MinePage);
        }

        _createClass(MinePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MinePage;
      }();

      _MinePage.ctorParameters = function () {
        return [];
      };

      _MinePage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-mine',
        template: _raw_loader_mine_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mine_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MinePage);
      /***/
    },

    /***/
    54937: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaW5lLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    87659: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>我的</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-icon name=\"phone-portrait-outline\" style=\"color: dodgerblue;\"></ion-icon>\n      <ion-label>修改密码</ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"keypad-outline\" style=\"color: gold;\"></ion-icon>\n      <ion-label>修改手势密码</ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"alert-circle-outline\"></ion-icon>\n      <ion-label>关于</ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"people-circle-outline\"></ion-icon>\n      <ion-label>客服热线 400-920-0800</ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <!-- <ion-list>\n    <ion-item>\n      <ion-label>版本号</ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list> -->\n\n  <!-- <div style=\"text-align: center; \n        margin-left: 30px; \n        margin-right: 30px;\n        margin-top: 30px; \n        background-color: rgb(199, 64, 15);\n         height: 44px;\n          border-radius: 22px;\n           font-style: normal;\"> -->\n          <ion-button block (click)=\"logOut()\" style=\"text-align: center\">\n            退出登录\n          </ion-button>\n  <!-- </div> -->\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_mine_mine_module_ts-es5.js.map
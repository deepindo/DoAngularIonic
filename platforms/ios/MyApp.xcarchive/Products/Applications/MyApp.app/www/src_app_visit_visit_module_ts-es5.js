(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkDoIonicAngular"] = self["webpackChunkDoIonicAngular"] || []).push([["src_app_visit_visit_module_ts"], {
    /***/
    60092: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VisitPageRoutingModule": function VisitPageRoutingModule() {
          return (
            /* binding */
            _VisitPageRoutingModule
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


      var _visit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./visit.page */
      16208);

      var routes = [{
        path: '',
        component: _visit_page__WEBPACK_IMPORTED_MODULE_0__.VisitPage
      }];

      var _VisitPageRoutingModule = function VisitPageRoutingModule() {
        _classCallCheck(this, VisitPageRoutingModule);
      };

      _VisitPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _VisitPageRoutingModule);
      /***/
    },

    /***/
    4831: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VisitPageModule": function VisitPageModule() {
          return (
            /* binding */
            _VisitPageModule
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


      var _visit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./visit-routing.module */
      60092);
      /* harmony import */


      var _visit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./visit.page */
      16208);

      var _VisitPageModule = function VisitPageModule() {
        _classCallCheck(this, VisitPageModule);
      };

      _VisitPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _visit_routing_module__WEBPACK_IMPORTED_MODULE_0__.VisitPageRoutingModule],
        declarations: [_visit_page__WEBPACK_IMPORTED_MODULE_1__.VisitPage]
      })], _VisitPageModule);
      /***/
    },

    /***/
    16208: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VisitPage": function VisitPage() {
          return (
            /* binding */
            _VisitPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_visit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./visit.page.html */
      20007);
      /* harmony import */


      var _visit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./visit.page.scss */
      76339);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _VisitPage = /*#__PURE__*/function () {
        function VisitPage() {
          _classCallCheck(this, VisitPage);
        }

        _createClass(VisitPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VisitPage;
      }();

      _VisitPage.ctorParameters = function () {
        return [];
      };

      _VisitPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-visit',
        template: _raw_loader_visit_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_visit_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VisitPage);
      /***/
    },

    /***/
    76339: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNpdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    20007: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>协访</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>China</ion-label>\n    </ion-item>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-label>Item</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Unread</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-label>Item</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Unread</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item>\n      <ion-label>Input</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Toggle</ion-label>\n      <ion-toggle slot=\"end\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Radio</ion-label>\n      <ion-radio slot=\"end\"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Checkbox</ion-label>\n      <ion-checkbox slot=\"start\"></ion-checkbox>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Pokémon Yellow</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Mega Man X</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>The Legend of Zelda</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pac-Man</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Super Mario World</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>China</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pokémon Yellow</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Mega Man X</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>The Legend of Zelda</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pac-Man</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Super Mario World</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>China</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pokémon Yellow</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Mega Man X</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>The Legend of Zelda</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pac-Man</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Super Mario World</ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_visit_visit_module_ts-es5.js.map
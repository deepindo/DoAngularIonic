(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkDoIonicAngular"] = self["webpackChunkDoIonicAngular"] || []).push([["src_app_community_community_module_ts"], {
    /***/
    57273: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommunityPageRoutingModule": function CommunityPageRoutingModule() {
          return (
            /* binding */
            _CommunityPageRoutingModule
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


      var _community_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./community.page */
      67197);

      var routes = [{
        path: '',
        component: _community_page__WEBPACK_IMPORTED_MODULE_0__.CommunityPage
      }];

      var _CommunityPageRoutingModule = function CommunityPageRoutingModule() {
        _classCallCheck(this, CommunityPageRoutingModule);
      };

      _CommunityPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CommunityPageRoutingModule);
      /***/
    },

    /***/
    74518: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommunityPageModule": function CommunityPageModule() {
          return (
            /* binding */
            _CommunityPageModule
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


      var _community_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./community-routing.module */
      57273);
      /* harmony import */


      var _community_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./community.page */
      67197);

      var _CommunityPageModule = function CommunityPageModule() {
        _classCallCheck(this, CommunityPageModule);
      };

      _CommunityPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _community_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommunityPageRoutingModule],
        declarations: [_community_page__WEBPACK_IMPORTED_MODULE_1__.CommunityPage]
      })], _CommunityPageModule);
      /***/
    },

    /***/
    67197: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommunityPage": function CommunityPage() {
          return (
            /* binding */
            _CommunityPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_community_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./community.page.html */
      63168);
      /* harmony import */


      var _community_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./community.page.scss */
      60152);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CommunityPage = /*#__PURE__*/function () {
        function CommunityPage() {
          _classCallCheck(this, CommunityPage);
        }

        _createClass(CommunityPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CommunityPage;
      }();

      _CommunityPage.ctorParameters = function () {
        return [];
      };

      _CommunityPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-community',
        template: _raw_loader_community_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_community_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CommunityPage);
      /***/
    },

    /***/
    60152: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tdW5pdHkucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    63168: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>社区</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_community_community_module_ts-es5.js.map
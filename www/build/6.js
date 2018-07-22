webpackJsonp([6],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsTabsPageModue", function() { return DetailsTabsPageModue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_tabs__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailsTabsPageModue = (function () {
    function DetailsTabsPageModue() {
    }
    return DetailsTabsPageModue;
}());
DetailsTabsPageModue = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__details_tabs__["a" /* DetailsTabsPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__details_tabs__["a" /* DetailsTabsPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__details_tabs__["a" /* DetailsTabsPage */]]
    })
], DetailsTabsPageModue);

//# sourceMappingURL=details-tabs.module.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsTabsPage = (function () {
    function DetailsTabsPage() {
        this.editDetail = 'UpdateDetailsPage';
        this.showDetail = 'SupportDetailsPage';
    }
    return DetailsTabsPage;
}());
DetailsTabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-details-tabs',template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\details-tabs\details-tabs.html"*/'﻿<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Personal Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-tabs>\n  <ion-tab [root]="showDetail" tabTitle="show detail" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="editDetail" tabTitle="edit detail" tabIcon="create"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\details-tabs\details-tabs.html"*/,
    }),
    __metadata("design:paramtypes", [])
], DetailsTabsPage);

//# sourceMappingURL=details-tabs.js.map

/***/ })

});
//# sourceMappingURL=6.js.map
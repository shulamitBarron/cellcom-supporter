webpackJsonp([2],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportDetailsModue", function() { return supportDetailsModue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support_details__ = __webpack_require__(762);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var supportDetailsModue = (function () {
    function supportDetailsModue() {
    }
    return supportDetailsModue;
}());
supportDetailsModue = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__support_details__["a" /* SupportDetailsPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__support_details__["a" /* SupportDetailsPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__support_details__["a" /* SupportDetailsPage */]]
    })
], supportDetailsModue);

//# sourceMappingURL=support-details.module.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_supporter_service__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupportDetailsPage = (function () {
    function SupportDetailsPage(navCtrl, supportService) {
        this.navCtrl = navCtrl;
        this.supportService = supportService;
        this.supporter = {};
        var supporter = this.supportService.getSupporter();
        if (!supporter) {
            this.navCtrl.parent.parent.setRoot("LoginPage");
            this.navCtrl.parent.parent.popToRoot();
        }
        else {
            this.supporter = supporter;
        }
    }
    return SupportDetailsPage;
}());
SupportDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-support-details',template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\support-details\support-details.html"*/'﻿<ion-header>\n  <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <b>support-details</b>\n    </ion-card-header>\n    <ion-card-content>\n      <form>     \n        <ion-row>\n          <ion-col>\n            <ion-label>Name</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label type="text" name="name">{{supporter.name}}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label>e-mail</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label type="email" name="email">{{supporter.email}}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label>phone</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label type="text" name="phone">{{supporter.phone}}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label>address</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label type="text" name="address">{{supporter.address}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\support-details\support-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__shared_supporter_service__["a" /* SupportService */]])
], SupportDetailsPage);

//# sourceMappingURL=support-details.js.map

/***/ })

});
//# sourceMappingURL=2.js.map
webpackJsonp([7],{

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsPageModule", function() { return CustomerDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_details__ = __webpack_require__(754);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomerDetailsPageModule = (function () {
    function CustomerDetailsPageModule() {
    }
    return CustomerDetailsPageModule;
}());
CustomerDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__customer_details__["a" /* CustomerDetailsPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__customer_details__["a" /* CustomerDetailsPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__customer_details__["a" /* CustomerDetailsPage */]]
    })
], CustomerDetailsPageModule);

//# sourceMappingURL=customer-details.module.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerDetailsPage = (function () {
    function CustomerDetailsPage(navCtrl, navParams, supportService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.supportService = supportService;
        this.customer = {};
        this.customer = this.navParams.data;
        var supporter = this.supportService.getSupporter();
        if (!supporter) {
            this.navCtrl.setRoot("LoginPage");
            this.navCtrl.popToRoot();
        }
    }
    return CustomerDetailsPage;
}());
CustomerDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-customer-details',template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\customer-details\customer-details.html"*/'﻿<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>customerDetails</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <b>Customer-details</b>\n    </ion-card-header>\n    <ion-card-content>     \n      <ion-item>\n        <ion-label>firstName</ion-label>\n        <ion-label type="text" name="name">{{customer.name}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>e-mail</ion-label>\n        <ion-label type="email" name="email">{{customer.email}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>phone</ion-label>\n        <ion-label type="text" name="phone">{{customer.phone}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>address</ion-label>\n        <ion-label type="text" name="address">{{customer.address}}</ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\customer-details\customer-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__shared_index__["c" /* SupportService */]])
], CustomerDetailsPage);

//# sourceMappingURL=customer-details.js.map

/***/ })

});
//# sourceMappingURL=7.js.map
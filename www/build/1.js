webpackJsonp([1],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDetailsPageModule", function() { return UpdateDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_details__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdateDetailsPageModule = (function () {
    function UpdateDetailsPageModule() {
    }
    return UpdateDetailsPageModule;
}());
UpdateDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__update_details__["a" /* UpdateDetailsPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_details__["a" /* UpdateDetailsPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__update_details__["a" /* UpdateDetailsPage */]]
    })
], UpdateDetailsPageModule);

//# sourceMappingURL=update-details.module.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateDetailsPage; });
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



var UpdateDetailsPage = (function () {
    function UpdateDetailsPage(navCtrl, toastController, supportService) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
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
    UpdateDetailsPage.prototype.updateDetails = function () {
        var _this = this;
        this.supportService.updateDetails(this.supporter).subscribe(function () {
            var toast = _this.toastController.create({
                message: 'Hi, ' + _this.supporter.name + ' we updated your details',
                duration: 3000,
                position: 'bottom'
            });
            toast.present().then(function () {
                _this.supporter = _this.supportService.getSupporter();
                _this.navCtrl.setRoot('HomeTabsPage');
            });
        }, function () {
            var toast = _this.toastController.create({
                message: 'Sorry, There is an error',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    return UpdateDetailsPage;
}());
UpdateDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-update-details',template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\update-details\update-details.html"*/'﻿<ion-header>\n  <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <b>update-details</b>\n    </ion-card-header>\n    <ion-card-content>\n      <form #form="ngForm" (ngSubmit)="form.form.valid && saveDetails()">\n        <ion-item>\n          <ion-label floating>name</ion-label>\n          <ion-input #Name="ngModel"\n                     type="text"\n                     required [(ngModel)]="supporter.name"\n                     name="name">\n          </ion-input>\n        </ion-item>\n        <div *ngIf="form.submitted && !Name.valid"\n             class="required">Name is required</div>\n        <ion-item>\n          <ion-label floating>e-mail</ion-label>\n          <ion-input #Email="ngModel" type="email"\n                     pattern="^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"\n                     required\n                     [(ngModel)]="supporter.email"\n                     name="email">\n          </ion-input>\n        </ion-item>\n        <div *ngIf="form.submitted && Email.errors && Email.errors.required" class="required">Email is required</div>\n        <div *ngIf="form.submitted && Email.errors && Email.errors.pattern" class="required">Email is not valid</div>\n        <ion-item>\n          <ion-label floating>password</ion-label>\n          <ion-input #Password="ngModel"\n                     type="password"\n                     required\n                     [(ngModel)]="supporter.password"\n                     name="password"></ion-input>\n        </ion-item>\n        <div *ngIf="form.submitted && !Password.valid"\n             class="required">Password is required</div>\n\n        <ion-item>\n          <ion-label floating>phone</ion-label>\n          <ion-input #telephone="ngModel"\n                     type="text"\n                     required\n                     pattern="^[+0-9][0-9\-]*$"\n                     [(ngModel)]="supporter.phone"\n                     name="phone"></ion-input>\n        </ion-item>\n        <div *ngIf="telephone.errors && telephone.errors.pattern" class="required">Phone is not valid</div>\n        <div *ngIf="form.submitted && !telephone.value" class="required">Phone Number is required</div>\n        <ion-item>\n          <ion-label floating>address</ion-label>\n          <ion-input #Address="ngModel"\n                     type="text"\n                     required\n                     [(ngModel)]="supporter.address"\n                     name="address"></ion-input>\n        </ion-item>\n        <div *ngIf="form.submitted && !Address.valid" class="required">Address is required</div>\n        <button ion-button type="submit" block>SAVE</button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\update-details\update-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__shared_supporter_service__["a" /* SupportService */]])
], UpdateDetailsPage);

//# sourceMappingURL=update-details.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
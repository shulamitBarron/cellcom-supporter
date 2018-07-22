webpackJsonp([3],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__login__["a" /* LoginPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__login__["a" /* LoginPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__login__["a" /* LoginPage */]]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_supporter_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_restAPISocket_service__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, platform, alertCtrl, toastController, supportService, restAPISocket) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.supportService = supportService;
        this.restAPISocket = restAPISocket;
        this.user = {};
        this.register = 'CreateSupportPage';
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.supportService.login(this.user.email, this.user.password)
            .subscribe(function (isLogin) {
            if (isLogin) {
                _this.navCtrl.setRoot('HomeTabsPage');
            }
            else {
                _this.showPrompt();
            }
        }, function () {
            var toast = _this.toastController.create({
                message: 'Sorry, There is an error.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
        this.restAPISocket.connect();
    };
    LoginPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Login',
            message: "The name or the password isn't vaild",
            buttons: [
                {
                    text: 'Create',
                    handler: function (data) { return _this.navCtrl.push('CreateSupportPage'); }
                },
                {
                    text: 'Try Again',
                    handler: function (data) { }
                }
            ]
        });
        prompt.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\login\login.html"*/'﻿<ion-header>\n  <ion-navbar>\n    <ion-title>login supporter</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #form="ngForm"\n        (ngSubmit)="form.form.valid && login()">\n\n    <ion-item>\n      <ion-label floating>e-mail</ion-label>\n      <ion-input #Email="ngModel" type="email"\n                 pattern="^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"\n                 required [(ngModel)]="user.email" name="email"></ion-input>\n\n    </ion-item>\n    <div *ngIf="form.submitted && Email.errors && Email.errors.required" class="required">Email is required</div>\n    <div *ngIf="form.submitted && Email.errors && Email.errors.pattern" class="required">Email is not valid</div>\n    <ion-item>\n      <ion-label floating>password</ion-label>\n      <ion-input #Password="ngModel" type="password" required\n                 [(ngModel)]="user.password" name="password"></ion-input>\n    </ion-item>\n    <div *ngIf="form.submitted && !Password.valid"\n         class="required">Password is required</div>\n\n    <div padding>\n      <button ion-button block type="submit">Sign In</button>\n    </div>\n  </form>\n  <div padding>\n    <button ion-button block [navPush]="register">Register</button>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__shared_supporter_service__["a" /* SupportService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_restAPISocket_service__["a" /* RestAPISocket */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
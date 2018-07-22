webpackJsonp([5],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTabsPageModule", function() { return HomeTabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tabs__ = __webpack_require__(756);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeTabsPageModule = (function () {
    function HomeTabsPageModule() {
    }
    return HomeTabsPageModule;
}());
HomeTabsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home_tabs__["a" /* HomeTabsPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_tabs__["a" /* HomeTabsPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__home_tabs__["a" /* HomeTabsPage */]]
    })
], HomeTabsPageModule);

//# sourceMappingURL=home-tabs.module.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabsPage; });
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



var HomeTabsPage = (function () {
    function HomeTabsPage(navCtrl, supportService) {
        this.navCtrl = navCtrl;
        this.supportService = supportService;
        var supporter = this.supportService.getSupporter();
        if (!supporter) {
            this.navCtrl.setRoot("LoginPage");
            this.navCtrl.popToRoot();
        }
    }
    return HomeTabsPage;
}());
HomeTabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home-tabs',template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\home-tabs\home-tabs.html"*/'﻿<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button class="md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Cellcom">\n    <img itemprop="logo" alt="סלקום" class="md-avatar ng-scope cellcom" style="border-radius: 0px; width: 100px;\n                             height: 100px;" role="button" tabindex="0" aria-hidden="false" src="https://api.sherut.net/Sites/IL/mini_logos/Cellcom.png">\n    <p itemprop="name">Cellcom</p>\n    <div class="md-ripple-container"></div>\n  </button>\n  <h2 itemprop="description" ng-show="comp.TagLine" class="md-caption comp-header-subtext ng-binding" aria-hidden="false">The largest cellular communications company in Israel</h2>\n</ion-content>\n'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\home-tabs\home-tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__shared_index__["c" /* SupportService */]])
], HomeTabsPage);

//# sourceMappingURL=home-tabs.js.map

/***/ })

});
//# sourceMappingURL=5.js.map
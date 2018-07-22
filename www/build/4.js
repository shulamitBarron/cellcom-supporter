webpackJsonp([4],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComplainersPageModule", function() { return ListComplainersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_complainers__ = __webpack_require__(757);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListComplainersPageModule = (function () {
    function ListComplainersPageModule() {
    }
    return ListComplainersPageModule;
}());
ListComplainersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__list_complainers__["a" /* ListComplainersPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_complainers__["a" /* ListComplainersPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__list_complainers__["a" /* ListComplainersPage */]]
    })
], ListComplainersPageModule);

//# sourceMappingURL=list-complainers.module.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComplainersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_index__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListComplainersPage = (function () {
    function ListComplainersPage(navCtrl, complainerService, supportService, socketService, restAPISocket) {
        this.navCtrl = navCtrl;
        this.complainerService = complainerService;
        this.supportService = supportService;
        this.socketService = socketService;
        this.restAPISocket = restAPISocket;
        this.compliners = new Array();
        var supporter = this.supportService.getSupporter();
        if (!supporter) {
            this.navCtrl.setRoot("LoginPage");
            this.navCtrl.popToRoot();
        }
    }
    ListComplainersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getComplainers();
        this.restAPISocket.init();
        this.restAPISocket.UpdateListComplainer.subscribe(function () { return _this.getComplainers(); }, function (error) { return console.log(error); });
    };
    ListComplainersPage.prototype.getComplainers = function () {
        var _this = this;
        this.complainerService.getListComplainers()
            .subscribe(function (compliner) { return _this.compliners = compliner; }, function () { return _this.compliners = []; });
    };
    ListComplainersPage.prototype.getChat = function () {
        var _this = this;
        this.complainerService.getFirstComplainer().subscribe(function (res) {
            var data = res.json();
            _this.socketService.init(data.roomId);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
        });
    };
    return ListComplainersPage;
}());
ListComplainersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-list-complainers',template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\list-complainers\list-complainers.html"*/'﻿<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>listComplainers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngIf="compliners.length">\n    <ion-card-header>\n      Messages:\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item ion-item *ngFor="let complainer of compliners">\n          <ion-row>\n            <ion-col width-50>{{complainer.name}} </ion-col>\n            <ion-col width-20>{{complainer.dateTime| date:\'HH:mm\'}} </ion-col>\n            <ion-col width-30>\n              {{complainer.dateTime| date: \'dd/MM/yyyy\'}}\n            </ion-col>\n          </ion-row>\n        </ion-item>\n        <button full ion-button  (click)="getChat()" outline>\n          <b>receive a call </b>\n          <ion-icon name="ios-chatbubbles-outline" item-end>\n          </ion-icon>\n        </button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-label *ngIf="!compliners.length">\n    No Customers \n  </ion-label>\n</ion-content>\n'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\list-complainers\list-complainers.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_index__["a" /* ComplainerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_index__["a" /* ComplainerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_index__["c" /* SupportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_index__["c" /* SupportService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_index__["b" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_index__["b" /* SocketService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_index__["a" /* RestAPISocket */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_index__["a" /* RestAPISocket */]) === "function" && _e || Object])
], ListComplainersPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=list-complainers.js.map

/***/ })

});
//# sourceMappingURL=4.js.map
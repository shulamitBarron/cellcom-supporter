webpackJsonp([9],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__supporter_service__ = __webpack_require__(144);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__supporter_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_service__ = __webpack_require__(398);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__customer_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complainer_service__ = __webpack_require__(226);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__complainer_service__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_constants__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SupportService = (function () {
    function SupportService(http) {
        this.http = http;
    }
    SupportService.prototype.setSupporter = function (supporter) {
        this.supporter = supporter;
    };
    SupportService.prototype.getSupporter = function () {
        return this.supporter;
    };
    SupportService.prototype.login = function (email, password) {
        var _this = this;
        var supporter = {
            email: email,
            password: password
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_constants__["a" /* CELLCOM_URL */] + "/supporters/checkPasswordEqualMail", supporter)
            .map(function (res) {
            var data = res.json();
            if (data)
                _this.setSupporter(data);
            return !!data;
        });
    };
    SupportService.prototype.updateDetails = function (supporter) {
        var _this = this;
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__assets_constants__["a" /* CELLCOM_URL */] + "/supporters/updateById", supporter)
            .map(function (res) {
            var data = res.json();
            if (data)
                _this.setSupporter(supporter);
            return !!data;
        });
    };
    SupportService.prototype.saveSupporter = function (supporter) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_constants__["a" /* CELLCOM_URL */] + "/supporters/addSupporter", supporter)
            .map(function (res) {
            var data = res.json();
            if (data)
                _this.setSupporter(data);
            return !!data;
        });
        ;
    };
    return SupportService;
}());
SupportService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], SupportService);

//# sourceMappingURL=supporter.service.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestAPISocket; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_constants__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestAPISocket = (function () {
    function RestAPISocket() {
        this.UpdateListComplainer = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.init();
    }
    RestAPISocket.prototype.init = function () {
        var _this = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(__WEBPACK_IMPORTED_MODULE_2__assets_constants__["a" /* CELLCOM_URL */], { autoConnect: false, query: 'from=supporter' });
        this.socket.on("connect", function () {
            _this.socket.on('complainerAdded', function () { return setTimeout(function () { return _this.UpdateListComplainer.emit(); }, 0); });
        });
    };
    RestAPISocket.prototype.remove = function () {
        this.socket.emit("remove");
    };
    RestAPISocket.prototype.connect = function () {
        this.socket.connect();
    };
    return RestAPISocket;
}());
RestAPISocket = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], RestAPISocket);

//# sourceMappingURL=restAPISocket.service.js.map

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create-support/create-support.module": [
		743,
		8
	],
	"../pages/customer-details/customer-details.module": [
		744,
		7
	],
	"../pages/details-tabs/details-tabs.module": [
		745,
		6
	],
	"../pages/home-tabs/home-tabs.module": [
		746,
		5
	],
	"../pages/list-complainers/list-complainers.module": [
		747,
		4
	],
	"../pages/list-customers/list-customers.module": [
		748,
		0
	],
	"../pages/login/login.module": [
		749,
		3
	],
	"../pages/support-details/support-details.module": [
		750,
		2
	],
	"../pages/update-details/update-details.module": [
		751,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 199;

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplainerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_constants__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComplainerService = (function () {
    function ComplainerService(http) {
        this.http = http;
    }
    ComplainerService.prototype.getComplainers = function () {
        return this.complainers;
    };
    ComplainerService.prototype.getListComplainers = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_constants__["a" /* CELLCOM_URL */] + "/complainers/getComplainers")
            .map(function (res) {
            var data = res.json();
            if (data)
                _this.complainers = data;
            return data;
        });
    };
    ComplainerService.prototype.removeComplain = function (room) {
        this.http.delete(__WEBPACK_IMPORTED_MODULE_3__assets_constants__["a" /* CELLCOM_URL */] + "/complainers/deleteComlainerByRoom?room=" + room)
            .subscribe(function () { });
    };
    ComplainerService.prototype.getFirstComplainer = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_constants__["a" /* CELLCOM_URL */] + "/complainers/getFirstComplainer");
    };
    return ComplainerService;
}());
ComplainerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ComplainerService);

//# sourceMappingURL=complainer.service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilService = (function () {
    function UtilService() {
    }
    UtilService.getEpoch = function () {
        return __WEBPACK_IMPORTED_MODULE_1_moment___default()().unix();
    };
    UtilService.getCalendarDay = function (epoch) {
        if (!epoch) {
            return null;
        }
        var timeString = 'h:mm A';
        return __WEBPACK_IMPORTED_MODULE_1_moment___default()(epoch * 1000).calendar(null, {
            sameDay: '[Today] ' + timeString,
            lastDay: '[Yesterday] ' + timeString,
            sameElse: 'MM/DD ' + timeString
        });
    };
    return UtilService;
}());
UtilService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UtilService);

//# sourceMappingURL=util.service.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_constants__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.getCustomers = function () {
        return this.customers;
    };
    CustomerService.prototype.getListCustomers = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__assets_constants__["a" /* CELLCOM_URL */] + "/customers/getCustomers")
            .map(function (res) {
            var data = res.json();
            if (data)
                _this.customers = data;
            return data;
        });
    };
    return CustomerService;
}());
CustomerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], CustomerService);

//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_index__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatPage = (function () {
    function ChatPage(navCtrl, _zone, toast, socketService) {
        this.navCtrl = navCtrl;
        this._zone = _zone;
        this.toast = toast;
        this.socketService = socketService;
        this.messages = [];
        this.chatBox = "";
        this.btnEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.init();
    }
    ChatPage.prototype.ionViewWillLeave = function () {
        this.socketService.disconnect();
    };
    ChatPage.prototype.init = function () {
        var _this = this;
        this.socketService.messages.subscribe(function (chatMessage) {
            _this._zone.run(function () { return _this.messages.push(chatMessage); });
            _this.scrollToBottom();
        });
        var self = this;
        this.socketService.theCustomerLeftTheChat.subscribe(function () {
            debugger;
            self.txtChat.ionTxtArea.disabled = true;
            var toast = _this.toast.create({
                message: 'The customer left the chat',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
            _this.navCtrl.setRoot('HomeTabsPage');
        });
        // this.socketService.dangerToastToUser.subscribe(() => {});
    };
    ChatPage.prototype.startChat = function () {
        this.socketService.startChat();
    };
    ChatPage.prototype.sendMessage = function () {
        this.btnEmitter.emit("sent clicked");
        this.txtChat.setFocus();
        var message = this.txtChat.content;
        this.send(message);
        this.txtChat.clearInput();
    };
    ChatPage.prototype.send = function (message) {
        this.socketService.newRequest(message);
        this.chatBox = '';
        this.scrollToBottom();
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        this._zone.run(function () { return setTimeout(function () { return _this.content.scrollToBottom(300); }); });
    };
    return ChatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('txtChat'),
    __metadata("design:type", Object)
], ChatPage.prototype, "txtChat", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
    __metadata("design:type", Object)
], ChatPage.prototype, "content", void 0);
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chat',template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\chat\chat.html"*/'﻿<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Chat with Customer</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #content padding>\n  <ion-list no-lines>\n    <ion-item *ngFor="let msg of messages">\n      <chat-bubble [chatMessage]="msg"></chat-bubble>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer no-border class="chatPageFooter" [keyboardAttach]="content" [btnClicked]="btnEmitter">\n  <ion-toolbar>\n    <ion-item no-lines>\n      <ion-label></ion-label>\n      <div item-content>\n        <elastic-textarea #txtChat placeholder="Send a message" lineHeight="20" maxExpand="5"></elastic-textarea>\n      </div>\n    </ion-item>\n    <ion-buttons right>\n      <button ion-button icon-only\n              [disabled]="txtChat.content.trim().length<1"\n              (click)="sendMessage()">\n        <ion-icon name="md-send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_index__["b" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_index__["b" /* SocketService */]) === "function" && _d || Object])
], ChatPage);

var _a, _b, _c, _d;
//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(405);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_index__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_index__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_chatBubble_chatBubble__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_elasticTextarea_elasticTextarea__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_keyboard_attach_directive__ = __webpack_require__(742);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__components_elasticTextarea_elasticTextarea__["a" /* ElasticTextarea */],
            __WEBPACK_IMPORTED_MODULE_13__directives_keyboard_attach_directive__["a" /* KeyboardAttachDirective */],
            __WEBPACK_IMPORTED_MODULE_11__components_chatBubble_chatBubble__["a" /* ChatBubble */],
            __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__["a" /* ChatPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/create-support/create-support.module#CreateSupportPageModule', name: 'CreateSupportPage', segment: 'create-support', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/customer-details/customer-details.module#CustomerDetailsPageModule', name: 'CustomerDetailsPage', segment: 'customer-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details-tabs/details-tabs.module#DetailsTabsPageModue', name: 'DetailsTabsPage', segment: 'details-tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home-tabs/home-tabs.module#HomeTabsPageModule', name: 'HomeTabsPage', segment: 'home-tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/list-complainers/list-complainers.module#ListComplainersPageModule', name: 'ListComplainersPage', segment: 'list-complainers', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/list-customers/list-customers.module#ListCustomersPageModule', name: 'ListCustomersPage', segment: 'list-customers', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/support-details/support-details.module#supportDetailsModue', name: 'SupportDetailsPage', segment: 'support-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/update-details/update-details.module#UpdateDetailsPageModule', name: 'UpdateDetailsPage', segment: 'update-details', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__components_chatBubble_chatBubble__["a" /* ChatBubble */],
            __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__["a" /* ChatPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__providers_index__["c" /* Sql */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__shared_index__["b" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_8__shared_index__["c" /* SupportService */],
            __WEBPACK_IMPORTED_MODULE_8__shared_index__["a" /* ComplainerService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_index__["b" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_index__["d" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_index__["a" /* RestAPISocket */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SOCKET_HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CELLCOM_URL; });
var SOCKET_HOST = "https://cellcom-chat-service.herokuapp.com";
var CELLCOM_URL = "https://cellcom-service.herokuapp.com";
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sql; });
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


var DB_NAME = '__mojoapp';
var win = window;
var Sql = (function () {
    function Sql(platform) {
        var _this = this;
        this.platform = platform;
        this._dbPromise = new Promise(function (resolve, reject) {
            try {
                var _db_1;
                _this.platform.ready().then(function () {
                    if (_this.platform.is('cordova') && win.sqlitePlugin) {
                        _db_1 = win.sqlitePlugin.openDatabase({
                            name: DB_NAME,
                            location: 'default'
                        });
                    }
                    else {
                        console.warn('Storage: SQLite plugin not installed, falling back to WebSQL. Make sure to install cordova-sqlite-storage in production!');
                        _db_1 = win.openDatabase(DB_NAME, '1.0', 'database', 5 * 1024 * 1024);
                    }
                    resolve(_db_1);
                });
            }
            catch (err) {
                reject({ err: err });
            }
        });
        this._tryInit();
    }
    // Initialize the DB with our required tables
    Sql.prototype._tryInit = function () {
        this.query('CREATE TABLE IF NOT EXISTS kv (key text primary key, value text)').catch(function (err) {
            console.error('Storage: Unable to create initial storage tables', err.tx, err.err);
        });
    };
    /**
     * Perform an arbitrary SQL operation on the database. Use this method
     * to have full control over the underlying database through SQL operations
     * like SELECT, INSERT, and UPDATE.
     *
     * @param {string} query the query to run
     * @param {array} params the additional params to use for query placeholders
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.query = function (query, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            try {
                _this._dbPromise.then(function (db) {
                    db.transaction(function (tx) {
                        tx.executeSql(query, params, function (tx, res) { return resolve({ tx: tx, res: res }); }, function (tx, err) { return reject({ tx: tx, err: err }); });
                    }, function (err) { return reject({ err: err }); });
                });
            }
            catch (err) {
                reject({ err: err });
            }
        });
    };
    /**
     * Get the value in the database identified by the given key.
     * @param {string} key the key
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.get = function (key) {
        return this.query('select key, value from kv where key = ? limit 1', [key]).then(function (data) {
            if (data.res.rows.length > 0) {
                return data.res.rows.item(0).value;
            }
        });
    };
    /**
     * Set the value in the database for the given key. Existing values will be overwritten.
     * @param {string} key the key
     * @param {string} value The value (as a string)
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.set = function (key, value) {
        return this.query('insert or replace into kv(key, value) values (?, ?)', [key, value]);
    };
    Sql.prototype.getJson = function (key) {
        return this.get(key).then(function (value) {
            try {
                return JSON.parse(value);
            }
            catch (e) {
                throw e; // rethrowing exception so it can be handled with .catch()
            }
        });
    };
    Sql.prototype.setJson = function (key, value) {
        try {
            return this.set(key, JSON.stringify(value));
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    /**
     * Remove the value in the database for the given key.
     * @param {string} key the key
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.remove = function (key) {
        return this.query('delete from kv where key = ?', [key]);
    };
    /**
     * Clear all keys/values of your database.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.clear = function () {
        return this.query('delete from kv');
    };
    return Sql;
}());
Sql = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
], Sql);

//# sourceMappingURL=sql.js.map

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 228,
	"./af.js": 228,
	"./ar": 229,
	"./ar-dz": 230,
	"./ar-dz.js": 230,
	"./ar-kw": 231,
	"./ar-kw.js": 231,
	"./ar-ly": 232,
	"./ar-ly.js": 232,
	"./ar-ma": 233,
	"./ar-ma.js": 233,
	"./ar-sa": 234,
	"./ar-sa.js": 234,
	"./ar-tn": 235,
	"./ar-tn.js": 235,
	"./ar.js": 229,
	"./az": 236,
	"./az.js": 236,
	"./be": 237,
	"./be.js": 237,
	"./bg": 238,
	"./bg.js": 238,
	"./bn": 239,
	"./bn.js": 239,
	"./bo": 240,
	"./bo.js": 240,
	"./br": 241,
	"./br.js": 241,
	"./bs": 242,
	"./bs.js": 242,
	"./ca": 243,
	"./ca.js": 243,
	"./cs": 244,
	"./cs.js": 244,
	"./cv": 245,
	"./cv.js": 245,
	"./cy": 246,
	"./cy.js": 246,
	"./da": 247,
	"./da.js": 247,
	"./de": 248,
	"./de-at": 249,
	"./de-at.js": 249,
	"./de-ch": 250,
	"./de-ch.js": 250,
	"./de.js": 248,
	"./dv": 251,
	"./dv.js": 251,
	"./el": 252,
	"./el.js": 252,
	"./en-au": 253,
	"./en-au.js": 253,
	"./en-ca": 254,
	"./en-ca.js": 254,
	"./en-gb": 255,
	"./en-gb.js": 255,
	"./en-ie": 256,
	"./en-ie.js": 256,
	"./en-nz": 257,
	"./en-nz.js": 257,
	"./eo": 258,
	"./eo.js": 258,
	"./es": 259,
	"./es-do": 260,
	"./es-do.js": 260,
	"./es.js": 259,
	"./et": 261,
	"./et.js": 261,
	"./eu": 262,
	"./eu.js": 262,
	"./fa": 263,
	"./fa.js": 263,
	"./fi": 264,
	"./fi.js": 264,
	"./fo": 265,
	"./fo.js": 265,
	"./fr": 266,
	"./fr-ca": 267,
	"./fr-ca.js": 267,
	"./fr-ch": 268,
	"./fr-ch.js": 268,
	"./fr.js": 266,
	"./fy": 269,
	"./fy.js": 269,
	"./gd": 270,
	"./gd.js": 270,
	"./gl": 271,
	"./gl.js": 271,
	"./gom-latn": 272,
	"./gom-latn.js": 272,
	"./he": 273,
	"./he.js": 273,
	"./hi": 274,
	"./hi.js": 274,
	"./hr": 275,
	"./hr.js": 275,
	"./hu": 276,
	"./hu.js": 276,
	"./hy-am": 277,
	"./hy-am.js": 277,
	"./id": 278,
	"./id.js": 278,
	"./is": 279,
	"./is.js": 279,
	"./it": 280,
	"./it.js": 280,
	"./ja": 281,
	"./ja.js": 281,
	"./jv": 282,
	"./jv.js": 282,
	"./ka": 283,
	"./ka.js": 283,
	"./kk": 284,
	"./kk.js": 284,
	"./km": 285,
	"./km.js": 285,
	"./kn": 286,
	"./kn.js": 286,
	"./ko": 287,
	"./ko.js": 287,
	"./ky": 288,
	"./ky.js": 288,
	"./lb": 289,
	"./lb.js": 289,
	"./lo": 290,
	"./lo.js": 290,
	"./lt": 291,
	"./lt.js": 291,
	"./lv": 292,
	"./lv.js": 292,
	"./me": 293,
	"./me.js": 293,
	"./mi": 294,
	"./mi.js": 294,
	"./mk": 295,
	"./mk.js": 295,
	"./ml": 296,
	"./ml.js": 296,
	"./mr": 297,
	"./mr.js": 297,
	"./ms": 298,
	"./ms-my": 299,
	"./ms-my.js": 299,
	"./ms.js": 298,
	"./my": 300,
	"./my.js": 300,
	"./nb": 301,
	"./nb.js": 301,
	"./ne": 302,
	"./ne.js": 302,
	"./nl": 303,
	"./nl-be": 304,
	"./nl-be.js": 304,
	"./nl.js": 303,
	"./nn": 305,
	"./nn.js": 305,
	"./pa-in": 306,
	"./pa-in.js": 306,
	"./pl": 307,
	"./pl.js": 307,
	"./pt": 308,
	"./pt-br": 309,
	"./pt-br.js": 309,
	"./pt.js": 308,
	"./ro": 310,
	"./ro.js": 310,
	"./ru": 311,
	"./ru.js": 311,
	"./sd": 312,
	"./sd.js": 312,
	"./se": 313,
	"./se.js": 313,
	"./si": 314,
	"./si.js": 314,
	"./sk": 315,
	"./sk.js": 315,
	"./sl": 316,
	"./sl.js": 316,
	"./sq": 317,
	"./sq.js": 317,
	"./sr": 318,
	"./sr-cyrl": 319,
	"./sr-cyrl.js": 319,
	"./sr.js": 318,
	"./ss": 320,
	"./ss.js": 320,
	"./sv": 321,
	"./sv.js": 321,
	"./sw": 322,
	"./sw.js": 322,
	"./ta": 323,
	"./ta.js": 323,
	"./te": 324,
	"./te.js": 324,
	"./tet": 325,
	"./tet.js": 325,
	"./th": 326,
	"./th.js": 326,
	"./tl-ph": 327,
	"./tl-ph.js": 327,
	"./tlh": 328,
	"./tlh.js": 328,
	"./tr": 329,
	"./tr.js": 329,
	"./tzl": 330,
	"./tzl.js": 330,
	"./tzm": 331,
	"./tzm-latn": 332,
	"./tzm-latn.js": 332,
	"./tzm.js": 331,
	"./uk": 333,
	"./uk.js": 333,
	"./ur": 334,
	"./ur.js": 334,
	"./uz": 335,
	"./uz-latn": 336,
	"./uz-latn.js": 336,
	"./uz.js": 335,
	"./vi": 337,
	"./vi.js": 337,
	"./x-pseudo": 338,
	"./x-pseudo.js": 338,
	"./yo": 339,
	"./yo.js": 339,
	"./zh-cn": 340,
	"./zh-cn.js": 340,
	"./zh-hk": 341,
	"./zh-hk.js": 341,
	"./zh-tw": 342,
	"./zh-tw.js": 342
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 692;

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_constants__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_service__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__restAPISocket_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_supporter_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_complainer_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_index__ = __webpack_require__(717);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SocketService = (function () {
    function SocketService(supportService, complainerService, restAPISocket) {
        var _this = this;
        this.supportService = supportService;
        this.complainerService = complainerService;
        this.restAPISocket = restAPISocket;
        this.theCustomerLeftTheChat = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dangerToastToUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.supporter = this.supportService.getSupporter();
        this.from = this.supporter.name.toString();
        this.messages = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.socketObserver = observer;
        });
        // this.init();
    }
    SocketService.prototype.init = function (roomId) {
        var _this = this;
        this.room = roomId;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(__WEBPACK_IMPORTED_MODULE_3__assets_constants__["b" /* SOCKET_HOST */]);
        this.socket.on("connect", function () {
            _this.socket.emit('load', roomId);
        });
        this.socket.on('tooManyUnPermissionWords', function () {
            _this.theCustomerLeftTheChat.emit();
        });
        this.socket.on('UserUsedUnPermissionWord', function () { return _this.dangerToastToUser.emit(); });
        this.socket.on('leave', function () {
            _this.theCustomerLeftTheChat.emit();
        });
        this.socket.on('disconnect', function () { });
        this.socket.on('receive', function (response) {
            console.log('response ', response);
            var chatMessage = response;
            if (typeof response === 'string') {
                chatMessage = {
                    type: __WEBPACK_IMPORTED_MODULE_8__models_index__["a" /* MessageType */].MSG_RES,
                    from: '',
                    room: _this.socket.id,
                    message: response
                };
            }
            else {
                chatMessage.type = __WEBPACK_IMPORTED_MODULE_8__models_index__["a" /* MessageType */].MSG_RES;
            }
            chatMessage.epoch = __WEBPACK_IMPORTED_MODULE_4__util_service__["a" /* UtilService */].getEpoch();
            _this.socketObserver.next(chatMessage);
        });
        this.socket.on('peopleinchat', function (data) {
            // call the server-side function 'login' and send user's parameters
            _this.socket.emit('login', {
                user: _this.from,
                avatar: _this.supporter.email,
                id: _this.room
            });
        });
    };
    SocketService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    SocketService.prototype.getComplainerData = function () {
        this.from = "supporter";
    };
    SocketService.prototype.connect = function () {
        this.socket.connect();
        this.getComplainerData();
        this.complainerService.removeComplain(this.room);
        this.restAPISocket.remove();
    };
    SocketService.prototype.leave = function () {
    };
    SocketService.prototype.tooManyUnPermissionWords = function () {
        this.tooManyUnPermissionWords();
    };
    SocketService.prototype.UserUsedUnPermissionWord = function () {
        this.UserUsedUnPermissionWord();
    };
    SocketService.prototype.newRequest = function (message) {
        var chatMessage = {
            type: __WEBPACK_IMPORTED_MODULE_8__models_index__["a" /* MessageType */].MSG_REQ,
            message: message,
            room: this.room,
            from: this.from,
            epoch: __WEBPACK_IMPORTED_MODULE_4__util_service__["a" /* UtilService */].getEpoch()
        };
        this.socket.emit('msg', chatMessage);
        this.socketObserver.next(chatMessage);
    };
    SocketService.prototype.startChat = function () {
        this.connect();
    };
    return SocketService;
}());
SocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__shared_supporter_service__["a" /* SupportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_supporter_service__["a" /* SupportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__shared_complainer_service__["a" /* ComplainerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_complainer_service__["a" /* ComplainerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__restAPISocket_service__["a" /* RestAPISocket */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__restAPISocket_service__["a" /* RestAPISocket */]) === "function" && _c || Object])
], SocketService);

var _a, _b, _c;
//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__message_type__ = __webpack_require__(718);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__message_type__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageType; });
var MessageType = (function () {
    function MessageType() {
    }
    return MessageType;
}());

MessageType.MSG_REQ = "message_request";
MessageType.MSG_RES = "message_response";
//# sourceMappingURL=message-type.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, keyboard, loadingCtrl, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.keyboard = keyboard;
        this.loadingCtrl = loadingCtrl;
        this.splashScreen = splashScreen;
        this.rootPage = 'LoginPage';
        this.initializeApp();
        this.pages = [
            { ios: 'home', md: 'home', title: 'Home', component: 'HomeTabsPage' },
            { ios: 'chatboxes', md: 'chatboxes', title: 'Complainers', component: 'ListComplainersPage' },
            { ios: 'contact', md: 'contact', title: 'Personal Details', component: 'DetailsTabsPage' },
            { ios: 'contacts', md: 'contacts', title: 'Customers', component: 'ListCustomersPage' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.keyboard.disableScroll(true);
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\app\app.html"*/'﻿<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon ios="ios-{{p.ios}}" md="md-{{p.md}}"></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBubble; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatBubble = (function () {
    function ChatBubble(socketService) {
        this.socketService = socketService;
    }
    ChatBubble.prototype.isFromMe = function () {
        return this.chatMessage.from == this.socketService.from;
    };
    ChatBubble.prototype.formatEpoch = function (epoch) {
        return __WEBPACK_IMPORTED_MODULE_1__providers__["d" /* UtilService */].getCalendarDay(epoch);
    };
    return ChatBubble;
}());
ChatBubble = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chat-bubble',
        inputs: ['chatMessage'],template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\components\chatBubble\chatBubble.html"*/'<div>\n  <div class="chat-bubble {{isFromMe() ? \'left\' : \'right\'}}">\n    <div class="message">{{chatMessage.message}}</div>\n    <div class="message-detail" style="float:right">\n      <span>{{chatMessage.from}}</span>\n      <br/>\n      <span>{{formatEpoch(chatMessage.epoch)}}</span>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\components\chatBubble\chatBubble.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers__["b" /* SocketService */]])
], ChatBubble);

//# sourceMappingURL=chatBubble.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticTextarea; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElasticTextarea = (function () {
    function ElasticTextarea() {
        this.content = "";
        this.lineHeight = 20;
        this.maxExpand = 5;
        this.maxHeight = this.lineHeight * this.maxExpand;
    }
    ElasticTextarea.prototype.ngAfterViewInit = function () {
        this.txtArea = this.ionTxtArea._elementRef.nativeElement.children[0];
        this.txtArea.style.height = this.lineHeight + "px";
        this.maxHeight = this.lineHeight * this.maxExpand;
        this.txtArea.style.resize = 'none';
    };
    ElasticTextarea.prototype.onChange = function () {
        this.txtArea.style.height = this.lineHeight + "px";
        if (this.txtArea.scrollHeight < this.maxHeight) {
            this.txtArea.style.height = this.txtArea.scrollHeight + "px";
        }
        else {
            this.txtArea.style.height = this.maxHeight + "px";
        }
    };
    ElasticTextarea.prototype.clearInput = function () {
        this.content = "";
        this.txtArea.style.height = this.lineHeight + "px";
    };
    ElasticTextarea.prototype.setFocus = function () {
        this.ionTxtArea.setFocus();
    };
    return ElasticTextarea;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ionTxtArea'),
    __metadata("design:type", Object)
], ElasticTextarea.prototype, "ionTxtArea", void 0);
ElasticTextarea = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'elastic-textarea',
        inputs: ['placeholder', 'lineHeight', 'maxExpand'],template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\components\elasticTextarea\elasticTextarea.html"*/'﻿<!--suppress ALL -->\n<ion-textarea #ionTxtArea\n              placeholder=\'{{placeholder}}\'\n              [(ngModel)]="content"\n              (ngModelChange)=\'onChange($event)\'>\n</ion-textarea>\n'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\components\elasticTextarea\elasticTextarea.html"*/
    }),
    __metadata("design:paramtypes", [])
], ElasticTextarea);

//# sourceMappingURL=elasticTextarea.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardAttachDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KeyboardAttachDirective = (function () {
    function KeyboardAttachDirective(elementRef, keyboard, _zone, platform) {
        this.elementRef = elementRef;
        this.keyboard = keyboard;
        this._zone = _zone;
        this.platform = platform;
        this.shouldHide = true;
    }
    KeyboardAttachDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.platform.is('cordova') && this.platform.is('ios')) {
            this.onShowSubscription = this.keyboard.onKeyboardShow().subscribe(function (e) { return _this.onShow(e); });
            this.onHideSubscription = this.keyboard.onKeyboardHide().subscribe(function (e) { return _this.onHide(e); });
        }
        this.btnClicked.subscribe(function (data) { return _this.shouldHide = false; }, function (err) { return console.log(err); });
    };
    KeyboardAttachDirective.prototype.ngOnDestroy = function () {
        if (this.onShowSubscription) {
            this.onShowSubscription.unsubscribe();
        }
        if (this.onHideSubscription) {
            this.onHideSubscription.unsubscribe();
        }
    };
    KeyboardAttachDirective.prototype.onShow = function (e) {
        var keyboardHeight = e.keyboardHeight || (e.detail && e.detail.keyboardHeight);
        this.setElementPosition(keyboardHeight);
    };
    ;
    KeyboardAttachDirective.prototype.onHide = function (e) {
        if (this.shouldHide) {
            this.setElementPosition(0);
        }
        this.shouldHide = true;
    };
    ;
    KeyboardAttachDirective.prototype.setElementPosition = function (pixels) {
        var _this = this;
        this.elementRef.nativeElement.style.paddingBottom = pixels + 'px';
        this.content.resize();
        this._zone.run(function () {
            setTimeout(function () {
                _this.content.scrollToBottom(300);
            }, 100);
        });
    };
    return KeyboardAttachDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('keyboardAttach'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Content */])
], KeyboardAttachDirective.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], KeyboardAttachDirective.prototype, "btnClicked", void 0);
KeyboardAttachDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[keyboardAttach]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */]])
], KeyboardAttachDirective);

//# sourceMappingURL=keyboard-attach.directive.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sql__ = __webpack_require__(691);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__sql__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service__ = __webpack_require__(227);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__util_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_service__ = __webpack_require__(693);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__socket_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restAPISocket_service__ = __webpack_require__(145);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__restAPISocket_service__["a"]; });




//# sourceMappingURL=index.js.map

/***/ })

},[400]);
//# sourceMappingURL=main.js.map
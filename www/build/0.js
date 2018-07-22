webpackJsonp([0],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCustomersPageModule", function() { return ListCustomersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_filter_pipe__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_filter_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_filter_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_customers__ = __webpack_require__(760);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListCustomersPageModule = (function () {
    function ListCustomersPageModule() {
    }
    return ListCustomersPageModule;
}());
ListCustomersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__list_customers__["a" /* ListCustomersPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list_customers__["a" /* ListCustomersPage */]), __WEBPACK_IMPORTED_MODULE_2_ng2_filter_pipe__["Ng2FilterPipeModule"]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__list_customers__["a" /* ListCustomersPage */]]
    })
], ListCustomersPageModule);

//# sourceMappingURL=list-customers.module.js.map

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vadimdez on 28/06/16.
 */
var core_1 = __webpack_require__(1);
var Ng2FilterPipe = (function () {
    function Ng2FilterPipe() {
    }
    Ng2FilterPipe.prototype.filterByString = function (filter) {
        if (filter) {
            filter = filter.toLowerCase();
        }
        return function (value) {
            return !filter || (value ? ('' + value).toLowerCase().indexOf(filter) !== -1 : false);
        };
    };
    Ng2FilterPipe.prototype.filterByBoolean = function (filter) {
        return function (value) {
            return Boolean(value) === filter;
        };
    };
    Ng2FilterPipe.prototype.filterByObject = function (filter) {
        var _this = this;
        return function (value) {
            for (var key in filter) {
                if (key === '$or') {
                    if (!_this.filterByOr(filter.$or)(_this.getValue(value))) {
                        return false;
                    }
                    continue;
                }
                if (!value.hasOwnProperty(key) && !Object.getOwnPropertyDescriptor(Object.getPrototypeOf(value), key)) {
                    return false;
                }
                var val = _this.getValue(value[key]);
                var filterType = typeof filter[key];
                var isMatching = void 0;
                if (filterType === 'boolean') {
                    isMatching = _this.filterByBoolean(filter[key])(val);
                }
                else if (filterType === 'string') {
                    isMatching = _this.filterByString(filter[key])(val);
                }
                else if (filterType === 'object') {
                    isMatching = _this.filterByObject(filter[key])(val);
                }
                else {
                    isMatching = _this.filterDefault(filter[key])(val);
                }
                if (!isMatching) {
                    return false;
                }
            }
            return true;
        };
    };
    /**
     * Filter value by $or
     *
     * @param filter
     * @returns {(value:any)=>boolean}
     */
    Ng2FilterPipe.prototype.filterByOr = function (filter) {
        return function (value) {
            var hasMatch = false;
            var length = filter.length;
            var isArray = value instanceof Array;
            var arrayComparison = function (i) {
                return value.indexOf(filter[i]) !== -1;
            };
            var otherComparison = function (i) {
                return value === filter[i];
            };
            var comparison = isArray ? arrayComparison : otherComparison;
            for (var i = 0; i < length; i++) {
                if (comparison(i)) {
                    hasMatch = true;
                    break;
                }
            }
            return hasMatch;
        };
    };
    /**
     * Checks function's value if type is function otherwise same value
     * @param value
     * @returns {any}
     */
    Ng2FilterPipe.prototype.getValue = function (value) {
        return typeof value === 'function' ? value() : value;
    };
    /**
     * Defatul filterDefault function
     *
     * @param filter
     * @returns {(value:any)=>boolean}
     */
    Ng2FilterPipe.prototype.filterDefault = function (filter) {
        return function (value) {
            return filter === undefined || filter == value;
        };
    };
    Ng2FilterPipe.prototype.isNumber = function (value) {
        return !isNaN(parseInt(value, 10)) && isFinite(value);
    };
    Ng2FilterPipe.prototype.transform = function (array, filter) {
        var type = typeof filter;
        if (!array) {
            return array;
        }
        if (type === 'boolean') {
            return array.filter(this.filterByBoolean(filter));
        }
        if (type === 'string') {
            if (this.isNumber(filter)) {
                return array.filter(this.filterDefault(filter));
            }
            return array.filter(this.filterByString(filter));
        }
        if (type === 'object') {
            return array.filter(this.filterByObject(filter));
        }
        if (type === 'function') {
            return array.filter(filter);
        }
        return array.filter(this.filterDefault(filter));
    };
    return Ng2FilterPipe;
}());
Ng2FilterPipe.decorators = [
    { type: core_1.Pipe, args: [{
                name: 'filterBy',
                pure: false
            },] },
    { type: core_1.Injectable },
];
/** @nocollapse */
Ng2FilterPipe.ctorParameters = function () { return []; };
exports.Ng2FilterPipe = Ng2FilterPipe;
//# sourceMappingURL=ng2-filter.pipe.js.map

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vadimdez on 28/11/2016.
 */
__export(__webpack_require__(759));
__export(__webpack_require__(752));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vadimdez on 28/11/2016.
 */
var core_1 = __webpack_require__(1);
var ng2_filter_pipe_1 = __webpack_require__(752);
var Ng2FilterPipeModule = (function () {
    function Ng2FilterPipeModule() {
    }
    return Ng2FilterPipeModule;
}());
Ng2FilterPipeModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [ng2_filter_pipe_1.Ng2FilterPipe],
                exports: [ng2_filter_pipe_1.Ng2FilterPipe]
            },] },
];
/** @nocollapse */
Ng2FilterPipeModule.ctorParameters = function () { return []; };
exports.Ng2FilterPipeModule = Ng2FilterPipeModule;
//# sourceMappingURL=ng2-filter.module.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCustomersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_customer_service__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListCustomersPage = (function () {
    function ListCustomersPage(navCtrl, navParams, customerService, supportService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customerService = customerService;
        this.supportService = supportService;
        this.searchTerm = '';
        this.getcustomers();
        var supporter = this.supportService.getSupporter();
        if (!supporter) {
            this.navCtrl.setRoot("LoginPage");
            this.navCtrl.popToRoot();
        }
    }
    ListCustomersPage.prototype.getcustomers = function () {
        var _this = this;
        this.customerService.getListCustomers()
            .subscribe(function (customer) { return _this.customers = customer; });
    };
    ListCustomersPage.prototype.customerDetails = function (customer) {
        this.navCtrl.push('CustomerDetailsPage', customer);
    };
    ListCustomersPage.prototype.setFilteredCustomers = function (name) {
        return name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    };
    return ListCustomersPage;
}());
ListCustomersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-list-customers',template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\list-customers\list-customers.html"*/'﻿<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List all Customers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>   \n      <ion-searchbar [(ngModel)]="searchTerm"></ion-searchbar>\n      <ion-list padding>\n        <button ion-item *ngFor="let customer of customers" (click)="customerDetails(customer)">\n          <ion-row>\n            <ion-col *ngIf="setFilteredCustomers(customer.name)" width-50>{{customer.name}}</ion-col>\n          </ion-row>\n        </button>\n      </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-supporter-master\cellcom-supporter-master\src\pages\list-customers\list-customers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__shared_customer_service__["a" /* CustomerService */],
        __WEBPACK_IMPORTED_MODULE_3__shared_index__["c" /* SupportService */]])
], ListCustomersPage);

//# sourceMappingURL=list-customers.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
webpackJsonp([5],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkin__ = __webpack_require__(266);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinPageModule", function() { return CheckinPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckinPageModule = (function () {
    function CheckinPageModule() {
    }
    return CheckinPageModule;
}());
CheckinPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__checkin__["a" /* CheckinPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkin__["a" /* CheckinPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__checkin__["a" /* CheckinPage */]
        ]
    })
], CheckinPageModule);

//# sourceMappingURL=checkin.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CheckinPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CheckinPage = (function () {
    function CheckinPage(navCtrl, navParams, alertCtrl, platform, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.alertShown = false;
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad CheckinPage');
    // }
    CheckinPage.prototype.checkout = function () {
        this.navCtrl.push('checkout');
        // this.navCtrl.push('checkout', {
        //   'id': checkout.id
        // })
    };
    CheckinPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Exit',
            message: 'Do you want Exit?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.alertShown = false;
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present().then(function () {
            _this.alertShown = true;
        });
    };
    CheckinPage.prototype.ionViewDidLoad = function () {
        var timezoneOffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        this.datetime = (new Date(Date.now() - timezoneOffset)).toISOString().slice(0, -1);
    };
    return CheckinPage;
}());
CheckinPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: "checkin",
        segment: 'checkin/:id'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-checkin',template:/*ion-inline-start:"/home/pc/Desktop/jagveer/ionic/ionic-3-camera-app/src/pages/checkin/checkin.html"*/'<!--\n  Generated template for the CheckinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Check-In</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n      <ion-row col-12 > <ion-col col-2></ion-col><ion-col col-8><h3>{{datetime| date:"dd MMMM yyyy HH:mm"}}</h3></ion-col><ion-col col-2></ion-col></ion-row>\n      <ion-item>\n      \n          <ion-datetime *ngIf="!datetime" displayFormat="MM/DD/YYYY HH:mm" disabled="true" name="date"[(ngModel)]="datetime"></ion-datetime>\n        </ion-item> \n        <ion-row>\n          <ion-col col-12> <button (click)=\'checkout();\' col-12 ion-button color="light">Checkin</button></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12><button  col-3 ion-button color="secondary">Break</button>\n  \n            <button   col-3 ion-button>Guard Tour</button>\n            <button  (click)="presentConfirm()" col-3 ion-button color="danger">Exit</button></ion-col>\n        </ion-row>\n      </ion-grid>\n \n  \n</ion-content>\n'/*ion-inline-end:"/home/pc/Desktop/jagveer/ionic/ionic-3-camera-app/src/pages/checkin/checkin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
], CheckinPage);

//# sourceMappingURL=checkin.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map
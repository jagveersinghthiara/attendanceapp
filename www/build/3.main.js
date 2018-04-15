webpackJsonp([3],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userlist__ = __webpack_require__(269);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistPageModule", function() { return UserlistPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserlistPageModule = (function () {
    function UserlistPageModule() {
    }
    return UserlistPageModule;
}());
UserlistPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__userlist__["a" /* UserlistPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__userlist__["a" /* UserlistPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__userlist__["a" /* UserlistPage */]
        ]
    })
], UserlistPageModule);

//# sourceMappingURL=userlist.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserlistPage; });
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
 * Generated class for the UserlistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserlistPage = (function () {
    function UserlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.photos = [];
    }
    UserlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserlistPage');
        this.photos = [];
        for (var i = 0; i < 10; i++) {
            this.photos.push('http://lorempixel.com/250/250?q=' + (i % 17));
        }
        console.log(this.photos);
    };
    return UserlistPage;
}());
UserlistPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: "userlist",
        segment: 'userlist/:id'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-userlist',template:/*ion-inline-start:"/home/pc/Desktop/jagveer/ionic/ionic-3-camera-app/src/pages/userlist/userlist.html"*/'<!--\n  Generated template for the UserlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>userlist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n          <!-- <ion-grid>\n              <ion-row>\n  \n                    <ion-col *ngFor="let photo of photos">\n                        <img  class="circle-pic"  style=" width:50px;\n                        height:50px;\n                        -webkit-border-radius: 50%;\n                        border-radius: 50%;" [src]="photo">\n                       \n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n               -->\n               <ion-grid>\n                  <ion-row>\n                      <ion-col col-4 *ngFor="let photo of photos">\n                          <img  class="circle-pic"  style=" \n                          -webkit-border-radius :50%;\n                          border-radius: 50%;" [src]="photo">\n                         \n        <button>View</button>\n                      </ion-col>\n                  </ion-row>\n                </ion-grid>\n             \n          \n    <!-- </ion-row> -->\n</ion-content>\n'/*ion-inline-end:"/home/pc/Desktop/jagveer/ionic/ionic-3-camera-app/src/pages/userlist/userlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], UserlistPage);

//# sourceMappingURL=userlist.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map
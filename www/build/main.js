webpackJsonp([34],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ProcessPage } from '../process/process';







var CalendarPage = (function () {
    function CalendarPage(navCtrl, loadingCtrl, app, toastCtrl, formBuilder, viewCtrl, http) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    }
    CalendarPage.prototype.ngOnInit = function () {
        var d = new Date();
        this.mindate = __WEBPACK_IMPORTED_MODULE_4_moment__(d).format('YYYY-MM-DD');
        this.CalendarForm = this.formBuilder.group({
            date: [this.mindate, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
        });
    };
    CalendarPage.prototype.onChange = function ($event, data) {
        console.log('ajksdhnfjkh');
        console.log(data.value.date);
        console.log(__WEBPACK_IMPORTED_MODULE_4_moment__(data.value.date).format('YYYY-MM-DD'));
        this.viewCtrl.dismiss(data.value.date);
    };
    CalendarPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    CalendarPage.prototype.backtoprocess = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */]);
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calendar',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/calendar/calendar.html"*/'<ion-header class="header-bg" hidden>\n\n\n\n  <ion-navbar hideBackButton color="yellow">\n\n   <button  class="backbtn" (click)="backtoprocess()">\n\n            <ion-icon class="customIcon" name="arrow-back"></ion-icon></button>\n\n    <ion-title>Calendar</ion-title>\n\n     </ion-navbar>\n\n</ion-header>\n\n<ion-content class="prfl">\n\n    <form [formGroup]="CalendarForm">\n\n    <ion-calendar color="yellow" class="clndr" name="date" formControlName="date" (onChange)="onChange($event,CalendarForm)" [type]="date" [format]="\'MM-DD-YYYY\'">\n\n</ion-calendar> \n\n<!--\n\n<ion-grid no-padding>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n        <div class="cal-txt" *ngFor="let not of notedisplayed">\n\n      <div class="cal-txt1">\n\n        <p>{{not.note}}</p>\n\n      </div>\n\n        <div class="icon_crss">\n\n             <ion-icon name="close" (click)="delete(not._id)"></ion-icon>\n\n      </div>\n\n        </div>\n\n    </ion-col>\n\n    \n\n  </ion-row>\n\n\n\n</ion-grid>-->\n\n    </form>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/calendar/calendar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddfilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the AddfilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddfilterPage = (function () {
    function AddfilterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddfilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddfilterPage');
    };
    AddfilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addfilter',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/addfilter/addfilter.html"*/'<!--\n  Generated template for the AddfilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="white">\n    <ion-title> <span class="maintitle"> Reserve now </span> <span class="subtitle">Thurs 2 july 9:2:55</span></ion-title>\n    <ion-buttons end (click)="notification()">\n      <button ion-button icon-only>\n        <ion-icon name="notifications-outline"><span class="noti_counter">0</span></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="PopoverModal()">\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="mapouter">\n  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.9352172945055!2d-71.80711768488622!3d42.25855597919382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e40663492673c1%3A0xaf8e200228d2a96e!2s2+Ionic+Ave%2C+Worcester%2C+MA+01608%2C+USA!5e0!3m2!1sen!2sin!4v1511332038652" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>\n</div>\n\n \n</ion-content>\n<ion-footer>\n<div class="btn-sec">\n   <button ion-button full class="custom_btn" type="submit" color="dark"  (click)="home()" >ADD FILTER</button>\n   </div>\n   </ion-footer>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/addfilter/addfilter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AddfilterPage);
    return AddfilterPage;
}());

//# sourceMappingURL=addfilter.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationstatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the ReservationstatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservationstatusPage = (function () {
    function ReservationstatusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReservationstatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservationstatusPage');
    };
    ReservationstatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reservationstatus',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/reservationstatus/reservationstatus.html"*/'<!--\n  Generated template for the ReservationstatusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="white">\n    <button ion-button menuToggle>\n      <ion-icon name="menus"></ion-icon>\n    </button>\n    <ion-title> <span class="maintitle"> My Reservations </span> <span class="subtitle">Thurs 2 july 9:2:55</span></ion-title>\n  </ion-navbar>\n\n <ion-toolbar color="yellow">\n    <div class="lefttitle">My Reservations</div>\n    <div class="righttitle">Time Expires</div>\n</ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list class="reservationstatus">\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/r1.jpg">\n      </ion-thumbnail>\n      <h2>My Neighbor Totoro</h2>\n      <p>Hayao Miyazaki • 1988</p>\n      <button ion-button item-end outline style="border-color: #008000; color:#000">-1H:50M:30S</button>\n    </ion-item>\n\n     <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/r1.jpg">\n      </ion-thumbnail>\n      <h2>My Neighbor Totoro</h2>\n      <p>Hayao Miyazaki • 1988</p>\n      <button ion-button item-end outline style="border-color: #008000; color:#000">-1H:50M:30S</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/r1.jpg">\n      </ion-thumbnail>\n      <h2>My Neighbor Totoro</h2>\n      <p>Hayao Miyazaki • 1988</p>\n      <button type="button" class="delete" ng-click="deleteModel(model)">\n        <span>×</span>\n    </button>\n      <button ion-button item-end outline style="border-color: #f53d3d; color:#f53d3d">EXPIRED</button>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/reservationstatus/reservationstatus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ReservationstatusPage);
    return ReservationstatusPage;
}());

//# sourceMappingURL=reservationstatus.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortdistancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*************Used Plugins ****************/

/**
 * Generated class for the SortdistancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SortdistancePage = (function () {
    function SortdistancePage(navCtrl, navParams, viewCtrl, formBuilder, appsetting, geolocation, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.appsetting = appsetting;
        this.geolocation = geolocation;
        this.http = http;
        this.sortdistance = {
            distance: '',
            range: '',
            endvalidity: '',
            select: '',
            date: ''
        };
        // alert('sort');
    }
    SortdistancePage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.sortdistance = this.formBuilder.group({
            distance: [true, [this.checkbox.bind(this)]],
            range: [''],
            endvalidity: [true, [this.checkbox.bind(this)]],
            date: ['']
        });
    };
    SortdistancePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SortdistancePage');
        var d = new Date();
        this.currentdate = __WEBPACK_IMPORTED_MODULE_5_moment__(d).format('YYYY-MM-DD');
        console.log(this.currentdate);
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lattitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
        });
        console.log(this.navParams.get('searchformdata'));
        this.searchformvalues = this.navParams.get('searchformdata');
        console.log(this.searchformvalues);
    };
    SortdistancePage.prototype.Close = function () {
        this.viewCtrl.dismiss();
    };
    SortdistancePage.prototype.checkbox = function (legal) {
        console.log(legal.value);
        if (legal.value == false) {
            return { legal: false };
        }
    };
    SortdistancePage.prototype.short = function (sort) {
        var _this = this;
        var postdata;
        console.log(sort.value);
        if (sort.value.distance == true) {
            this.params = 'distance'; //sort.value.distance;
            sort.value.range = sort.value.range;
        }
        else {
            this.params = ''; //sort.value.distance;
            sort.value.range = '';
        }
        if (sort.value.endvalidity == true) {
            this.params = 'endvalidity'; //sort.value.endvalidity;
            sort.value.date = sort.value.date;
            this.searchformvalues.time = sort.value.date;
            console.log(sort.value.date);
            console.log(this.searchformvalues.time);
        }
        else {
            this.params = ''; //sort.value.endvalidity;
            sort.value.date = '';
            //this.searchformvalues.time = '';
        }
        console.log(this.searchformvalues);
        var options = this.appsetting.header();
        var t = this.searchformvalues.time.split(':');
        this.searchformvalues.time = t.join('.');
        if (localStorage.getItem('filterdata')) {
            this.filterdata = JSON.parse(localStorage.getItem('filterdata'));
            console.log(this.filterdata);
            postdata = {
                res_type: this.filterdata.reservationType,
                menu_type: this.filterdata.menuType,
                location_type: this.filterdata.locationType,
                min_menu_price: '',
                max_menu_price: '',
                latitude: this.lattitude,
                longitude: this.longitude,
                seats: this.searchformvalues.seats,
                address: this.searchformvalues.query,
                category: this.searchformvalues.restaurantName,
                //                date: sort.value.date,//sort form selected date
                time: this.searchformvalues.time,
                param: this.params,
                distance: sort.value.range,
                subcat_date: this.searchformvalues.date,
            };
        }
        else {
            postdata = {
                res_type: '',
                menu_type: '',
                location_type: '',
                min_menu_price: '',
                max_menu_price: '',
                latitude: this.lattitude,
                longitude: this.longitude,
                seats: this.searchformvalues.seats,
                address: this.searchformvalues.query,
                category: this.searchformvalues.restaurantName,
                //                date: sort.value.date,
                time: this.searchformvalues.time,
                param: this.params,
                distance: sort.value.range,
                subcat_date: this.searchformvalues.date,
            };
        }
        var serialized = this.appsetting.serializeObj(postdata);
        localStorage.setItem('sortsearch', JSON.stringify(postdata));
        this.http.post(this.appsetting.url + 'sortbydistance', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            _this.viewCtrl.dismiss({ searchedlist: response.data });
        });
    };
    SortdistancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sortdistance',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/sortdistance/sortdistance.html"*/'<!--\n  Generated template for the SortdistancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n    <ion-navbar color="white">\n        <ion-buttons start left>\n            <button ion-button icon-only start (click)="Close()">\n                    <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title> Reservation Type</ion-title>\n\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:rgba(0,0,0,0.5);" class="animated zoomIn">\n    <div (click)="Close()" class="overlay_dismiss"></div>\n    <!--<ion-grid class="range_sec">-->\n    <!--<ion-row>\n      <ion-col col-5><p class="left_discount">Discount</p></ion-col>\n      <ion-col col-2><button ion-button outline small class="btn_new">All</button></ion-col>\n      <ion-col col-5><p class="right_price">Price</p></ion-col>\n    </ion-row>\n  \n  </ion-grid>-->\n    <div class="popup_box">\n        <form [formGroup]="sortdistance">\n            <ion-list no-lines>\n                <ion-item>\n                    <ion-label>DISTANCE\n                    </ion-label>\n                    <ion-checkbox color="dark" formControlName="distance"></ion-checkbox>\n                </ion-item>\n\n\n                <ion-item class="range_slide">\n                    <ion-range min="1000" step="1000" snaps="true" formControlName="range" max="25000" [(ngModel)]="range" name="range">\n                        <div class="rangetxt" range-left small *ngIf="!range">0 KM</div>\n                        <div class="rangetxt" range-left small *ngIf="range">{{range/1000}} KM</div>\n                        <div class="rangetxt" range-right>25 KM</div>\n                    </ion-range>\n                </ion-item>\n\n\n\n                <ion-item style="width: 60%; float:left;">\n                    <ion-label>END VALIDITY</ion-label>\n                    <ion-checkbox color="dark" formControlName="endvalidity"></ion-checkbox>\n                </ion-item>\n                <ion-item style="width: 40%; float:left;">\n<!--                    <ion-datetime displayFormat="HH:mm A" pickerFormat="HH:mm A" formControlName="date"></ion-datetime>-->\n                <select class="selectlist" formControlName="date">\n                    <option>1:15</option>\n                    <option>1:30</option>\n                    <option>1:45</option>\n                    <option>2:00</option>\n                    <option>2:15</option>\n                    <option>2:30</option>\n                    <option>2:45</option>\n                    <option>3:00</option>\n                    <option>3:15</option>\n                    <option>3:30</option>\n                    <option>3:45</option>\n                    <option>4:00</option>\n                    <option>4:15</option>\n                    <option>4:30</option>\n                    <option>4:45</option>\n                    <option>5:00</option>\n                    <option>5:15</option>\n                    <option>5:30</option>\n                    <option>5:45</option>\n                    <option>6:00</option>\n                    <option>6:15</option>\n                    <option>6:30</option>\n                    <option>6:45</option>\n                    <option>7:00</option>\n                    <option>7:15</option>\n                    <option>7:30</option>\n                    <option>7:45</option>\n                    <option>8:00</option>\n                    <option>8:15</option>\n                    <option>8:30</option>\n                    <option>8:45</option>\n                    <option>9:00</option>\n                    <option>9:15</option>\n                    <option>9:30</option>\n                    <option>9:45</option>\n                    <option>10:00</option>\n                    <option>10:15</option>\n                    <option>10:30</option>\n                    <option>10:45</option>\n                    <option>11:00</option>\n                    <option>11:15</option>\n                    <option>11:30</option>\n                    <option>11:45</option>\n                    <option>12:00</option>\n                    <option>12:15</option>\n                    <option>12:30</option>\n                    <option>12:45</option>\n                    <option>13:00</option>\n                    <option>13:15</option>\n                    <option>13:30</option>\n                    <option>13:45</option>\n                    <option>14:00</option>\n                    <option>14:15</option>\n                    <option>14:30</option>\n                    <option>14:45</option>\n                    <option>15:00</option>\n                    <option>15:15</option>\n                    <option>15:30</option>\n                    <option>15:45</option>\n                    <option>16:00</option>\n                    <option>16:15</option>\n                    <option>16:30</option>\n                    <option>16:45</option>\n                    <option>17:00</option>\n                    <option>17:15</option>\n                    <option>17:30</option>\n                    <option>17:45</option>\n                    <option>18:00</option>\n                    <option>18:15</option>\n                    <option>18:30</option>\n                    <option>18:45</option>\n                    <option>19:00</option>\n                    <option>19:15</option>\n                    <option>19:30</option>\n                    <option>19:45</option>\n                    <option>20:00</option>\n                    <option>20:15</option>\n                    <option>20:30</option>\n                    <option>20:45</option>\n                    <option>21:00</option>\n                    <option>21:15</option>\n                    <option>21:30</option>\n                    <option>21:45</option>\n                    <option>22:00</option>\n                    <option>22:15</option>\n                    <option>22:30</option>\n                    <option>22:45</option>\n                    <option>23:00</option>\n                    <option>23:15</option>\n                    <option>23:30</option>\n                    <option>23:45</option>\n                    <option>24:00</option>\n                    \n                </select>\n                </ion-item>\n     \n                \n                </ion-list>\n\n                <div class="addbtn">\n                    <button (click)="Close()" style="border-right:1px solid #ccc;">Cancel</button>\n                    <button (click)="short(sortdistance)">Ok</button>\n                </div>\n        </form>\n    </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/sortdistance/sortdistance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], SortdistancePage);
    return SortdistancePage;
}());

//# sourceMappingURL=sortdistance.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Totalnation2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addfilter_addfilter__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restaurantview_restaurantview__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Totalnation2Page = (function () {
    function Totalnation2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Totalnation2Page.prototype.ionViewDidLoad = function () {
        var d = new Date();
        console.log(d);
        this.headerdate = __WEBPACK_IMPORTED_MODULE_3_moment__(d).format('llll');
        console.log('ionViewDidLoad Totalnation2Page');
        console.log(this.navParams.get('indexno'));
        this.index = this.navParams.get('indexno');
        console.log(this.index);
        console.log(this.navParams.get('searchedvalue'));
        console.log(this.navParams.get('selectedRest'));
        this.stateparamdata = this.navParams.get('selectedRest');
        console.log(this.stateparamdata);
        this.stateparamdata.time = this.navParams.get('searchedvalue').time;
        //        var a = this.navParams.get('searchedvalue').time.split(':');
        //        if (a[0] > 11) {
        //            console.log(this.navParams.get('searchedvalue').time + ' PM');
        //            this.stateparamdata.time = this.navParams.get('searchedvalue').time + ' PM';
        //        } else {
        //            this.stateparamdata.time = this.navParams.get('searchedvalue').time + ' AM';
        //        }
        console.log(this.stateparamdata);
        this.loadMap();
    };
    Totalnation2Page.prototype.addfilter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addfilter_addfilter__["a" /* AddfilterPage */]);
    };
    Totalnation2Page.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(this.stateparamdata.loc.coordinates[1], this.stateparamdata.loc.coordinates[0]);
        var mapOptions = {
            center: latLng,
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        console.log(this.map);
        var myLatLng = { lat: this.stateparamdata.loc.coordinates[1], lng: this.stateparamdata.loc.coordinates[0] };
        var marker = new google.maps.Marker({
            map: this.map,
            icon: 'assets/img/location.png',
            label: '' + this.navParams.get('indexno'),
            animation: google.maps.Animation.DROP,
            position: myLatLng
        });
        var infowindow = new google.maps.InfoWindow({
            content: this.stateparamdata.category
        });
        google.maps.event.addListener(marker, "click", function (clickedres) {
            console.log(clickedres.latLng.lat());
            console.log(clickedres.latLng.lng());
            console.log('clicked on marker');
            infowindow.open(this.map, marker);
        });
    };
    Totalnation2Page.prototype.reserve = function () {
        console.log(this.navParams.get('searchedvalue'));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__restaurantview_restaurantview__["a" /* RestaurantviewPage */], { paymentdata: this.stateparamdata, selecteddata: this.navParams.get('searchedvalue') });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], Totalnation2Page.prototype, "mapElement", void 0);
    Totalnation2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-totalnation2',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/totalnation2/totalnation2.html"*/'<!--\n  Generated template for the Totalnation2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="white">\n    <ion-title> <span class="maintitle"> Reserve now </span> <span class="subtitle">{{headerdate}}</span></ion-title>\n    <ion-buttons end (click)="notification()">\n      <button ion-button icon-only>\n        <ion-icon name="notifications-outline"><span class="noti_counter">0</span></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="PopoverModal()">\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content style="background:#f9f9f9;">\n<div class="mapouter" #map id="map"></div>\n<!--<div class="mapouter">\n  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.9352172945055!2d-71.80711768488622!3d42.25855597919382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e40663492673c1%3A0xaf8e200228d2a96e!2s2+Ionic+Ave%2C+Worcester%2C+MA+01608%2C+USA!5e0!3m2!1sen!2sin!4v1511332038652" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>\n</div>-->\n\n<div class="list_item">\n<ion-list no-lines>\n <ion-item (click)="reserve()">\n    <div class="thumb"  item-start>\n       <img [src]="stateparamdata?.image">\n        <div class="imgblack">\n     <img src="assets/img/img_b.png">\n      </div>\n      <div class="circle">{{index}}</div>\n    </div>\n\n    <h2>{{stateparamdata?.category}}</h2>\n    <h4 class="categories_sub">{{stateparamdata?.category_name}}</h4>\n    <p class="type">Type : \n      <button ion-button small color="yellow" class="btn_new" *ngFor="let typename of stateparamdata?.dishes;let i = index" [ngClass]="i%2===0 ? \'Yellow\' : \'blue\'">{{typename.menu_type}}</button> \n<!--      <button ion-button small  class="btn_new">Big</button>-->\n    </p>\n     <p>End Validity : {{stateparamdata?.time}}</p>     \n    <p>Distance : {{stateparamdata?.distance}} KM</p>\n    <p>Address : {{stateparamdata?.address}}</p>\n    <div class="pricer" *ngIf="stateparamdata?.coupon">\n    <button *ngIf="stateparamdata?.coupon.percentage" ion-button outline color="black" class="btn_new1">{{stateparamdata?.coupon.percentage}} %<span class="euro1"> DISCOUNT ON PAYMENT</span></button>\n    <button *ngIf="stateparamdata?.coupon.price" ion-button outline color="black" class="btn_new1">{{stateparamdata?.coupon.price}}<span class="euro1"><ion-icon><img src="assets/img/euro.png"></ion-icon> PRICE RESERVATION</span></button>\n   <button *ngIf=\'stateparamdata?.coupon.res_type == "free"\' ion-button outline color="black" class="btn_new1"><span class="euro1">FREE RESERVATION</span></button>\n   \n     </div>\n  </ion-item>\n</ion-list>\n</div>\n\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/totalnation2/totalnation2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], Totalnation2Page);
    return Totalnation2Page;
}());

//# sourceMappingURL=totalnation2.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_popover__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restaurant2_restaurant2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tryagain_tryagain__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__payment_payment__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signin_signin__ = __webpack_require__(39);
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
 * Generated class for the RestaurantviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestaurantviewPage = (function () {
    function RestaurantviewPage(navCtrl, navParams, popoverCtrl, common, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.common = common;
        this.alertCtrl = alertCtrl;
        console.log(this.common.cords);
    }
    RestaurantviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RestaurantviewPage');
        this.currentuser = JSON.parse(localStorage.getItem('CurrentUser'));
        console.log(this.currentuser);
        this.selected_data = this.navParams.get('selecteddata');
        //if(this.navParams.get('selecteddata')){
        console.log(this.navParams.get('selecteddata').seats);
        var t = this.navParams.get('selecteddata').seats.split(':');
        this.selected_data.seat = t[0];
        //  }
        console.log(this.selected_data);
        var d = new Date();
        console.log(d);
        this.headerdate = __WEBPACK_IMPORTED_MODULE_7_moment__(d).format('llll');
        console.log(this.navParams.get('paymentdata'));
        console.log(this.navParams.get('selecteddata'));
        this.resdetail = this.navParams.get('paymentdata');
        console.log(this.resdetail.coupon.startdate);
        this.resdetail.offer_start = __WEBPACK_IMPORTED_MODULE_7_moment__(this.resdetail.coupon.startdate).format('llll');
        console.log(this.resdetail);
        if (localStorage.getItem('filterdata')) {
            console.log(JSON.parse(localStorage.getItem('filterdata')));
        }
    };
    RestaurantviewPage.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notification_notification__["a" /* NotificationPage */]);
    };
    RestaurantviewPage.prototype.PopoverModal = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popover_popover__["a" /* PopoverPage */]);
        popover.present();
    };
    RestaurantviewPage.prototype.restaurant2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__restaurant2_restaurant2__["a" /* Restaurant2Page */]);
    };
    RestaurantviewPage.prototype.tryagain = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tryagain_tryagain__["a" /* TryagainPage */]);
    };
    RestaurantviewPage.prototype.paymentPage = function (detail) {
        console.log(detail);
        console.log(JSON.parse(localStorage.getItem('searcheddata')));
        var search = JSON.parse(localStorage.getItem('searcheddata'));
        console.log(localStorage.getItem('CurrentUser'));
        this.currentUser = localStorage.getItem('CurrentUser');
        if (this.currentUser) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__payment_payment__["a" /* PaymentPage */], { resDetail: detail });
        }
        else {
            this.presentConfirm();
            // this.common.presentAlert('Payment','Please login to comfirm this reservation!');
        }
    };
    RestaurantviewPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Payment',
            message: 'Please login to comfirm this reservation!',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Login',
                    handler: function () {
                        console.log('login clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__signin_signin__["a" /* SigninPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    RestaurantviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-restaurantview',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/restaurantview/restaurantview.html"*/'<!--\n  Generated template for the RestaurantviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="white">\n        <button ion-button menuToggle>\n            <ion-icon name="menus"></ion-icon>\n        </button>\n        <ion-title> <span class="maintitle"> Reserve now </span> <span class="subtitle">{{headerdate}}</span></ion-title>\n        <ion-buttons end (click)="notification()">\n                     <button ion-button icon-only>\n                <ion-icon name="notifications-outline"><span class="noti_counter">0</span></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end (click)="PopoverModal()">\n                     <button ion-button icon-only>\n                <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="box">\n        <ion-list no-lines>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img [src]="resdetail?.image"/>\n                </ion-thumbnail>\n                <h2>{{resdetail?.category}}</h2>\n                <p>{{resdetail?.category_name}}</p>\n            </ion-item>\n        </ion-list> \n    </div>\n\n    <div class="box2">\n        <ion-grid class="details">\n            <ion-row>\n                <ion-col col-5><h1>address :</h1></ion-col>\n                <ion-col col-7>\n                    <ion-item no-padding><ion-label>{{resdetail?.address}} \n                            <ion-icon class="arrow"><img src="assets/img/arrow.png"/> </ion-icon>  </ion-label></ion-item>   \n                    <!--          <ion-item no-padding><ion-label>\n                              Portland, Oregon  </ion-label> </ion-item>           -->\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5><h1>tel :</h1></ion-col>\n                <ion-col col-7><ion-item no-padding><ion-label>{{currentuser?.phone}}</ion-label></ion-item></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5><h1>email :</h1></ion-col>\n                <ion-col col-7><ion-item no-padding><ion-label>{{currentuser?.email}}</ion-label></ion-item></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5><h1>opening time :</h1></ion-col>\n                <ion-col col-7><ion-item no-padding><ion-label>{{resdetail?.start_date| date:\'shortTime\'}} to {{resdetail?.end_date| date:\'shortTime\'}}</ion-label></ion-item></ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n\n    <div class="box2">\n        <ion-grid class="details">\n            <ion-row>\n                <ion-col col-5><h1>menu type :</h1></ion-col>\n                <ion-col col-7><span *ngFor="let menutype of resdetail?.dishes">{{menutype.menu_type}}</span></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5><h1>menu price:</h1></ion-col>\n                <ion-col col-7><span>FIXED</span></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5><h1>location:</h1></ion-col>\n                <ion-col col-7><span>{{resdetail?.location_type}}</span></ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <div class="yellowbox">\n        <div class="outline">\n            <h1>reserve now</h1>\n            <h3>DATE:<span>{{selected_data?.date}}</span></h3>\n            <h3>TABLE SEATS:<span>{{selected_data?.seat}}</span></h3>\n            <div class="pricer" *ngIf="resdetail?.coupon">\n                <h3>VALIDITY FROM:<span>{{resdetail?.coupon.startdate| date:\'shortTime\'}} to {{resdetail?.coupon.enddate| date:\'shortTime\'}}</span></h3>\n                <h4 *ngIf=\'resdetail?.coupon.res_type == "discount"\'>-{{resdetail?.coupon.percentage}}%<br><span  class="discount">DISCOUNT ON PAYMENT</span></h4>\n                <h4 *ngIf=\'resdetail?.coupon.res_type == "price"\'>-€{{resdetail?.coupon.price}}<br><span  class="discount">PRICE RESERVATION</span></h4>\n                <span *ngIf=\'resdetail?.coupon.res_type == "free"\' class="discount">FREE RESERVATION</span>\n            </div>\n\n            <button  ion-button round (click)="paymentPage(resdetail)" class="confirm">confirm</button>\n        </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/restaurantview/restaurantview.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__providers_common__["a" /* Common */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_common__["a" /* Common */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _e || Object])
    ], RestaurantviewPage);
    return RestaurantviewPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=restaurantview.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TryagainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_popover__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restaurants_restaurants__ = __webpack_require__(67);
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
 * Generated class for the TryagainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TryagainPage = (function () {
    function TryagainPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    TryagainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TryagainPage');
    };
    TryagainPage.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notification_notification__["a" /* NotificationPage */]);
    };
    TryagainPage.prototype.PopoverModal = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popover_popover__["a" /* PopoverPage */]);
        popover.present();
    };
    TryagainPage.prototype.restaurants = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__restaurants_restaurants__["a" /* RestaurantsPage */]);
    };
    TryagainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tryagain',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/tryagain/tryagain.html"*/'<!--\n  Generated template for the TryagainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> <span class="maintitle"> Reserve now </span></ion-title>\n    <ion-buttons end (click)="notification()">\n      <button ion-button icon-only>\n        <ion-icon name="notifications-outline"><span class="noti_counter">0</span></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="PopoverModal()">\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="main_img">\n        <img src="assets/img/sorry.png"/>\n\n    </div>\n<div class="sorrytext">\n  <h2>SORRY <br>\nNO RESERVATION <br>\nAVAILABLE </h2>\n  </div>\n  <div class="trybtn">\n     <button  ion-button block (click)="restaurants()">TRY AGAIN</button>\n     </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/tryagain/tryagain.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"]])
    ], TryagainPage);
    return TryagainPage;
}());

//# sourceMappingURL=tryagain.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_stripe__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_paypal__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_sms__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/********* plugin for payment ***********/



/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams, formBuilder, appsetting, http, loadingCtrl, common, payPal, stripe, sms) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.common = common;
        this.payPal = payPal;
        this.stripe = stripe;
        this.sms = sms;
    }
    PaymentPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.PaymentForm = this.formBuilder.group({
            cardnumber: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(16)]],
            cardname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            month: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            cvv: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3)]],
        });
        // this.tryagain();
    };
    PaymentPage.prototype.isValid = function (field) {
        var formField = this.PaymentForm.get(field);
        return formField.valid || formField.pristine;
    };
    PaymentPage.prototype.ionViewDidLoad = function () {
        //alert('payment new');
        console.log('ionViewDidLoad PaymentPage');
        console.log(this.navParams.get('resDetail'));
        this.resDetail = this.navParams.get('resDetail');
        this.userData = JSON.parse(localStorage.getItem('CurrentUser'));
        this.stripe.setPublishableKey('pk_test_4hLziJ9z1MpONnlbn2l8FxnK');
    };
    PaymentPage.prototype.Payment = function (formdata) {
        var _this = this;
        console.log(formdata.value);
        var card = {
            number: formdata.value.cardnumber,
            expMonth: formdata.value.month,
            expYear: formdata.value.year,
            cvc: formdata.value.cvv,
            name: formdata.value.cardname,
            currency: 'EUR'
        };
        console.log('postdata==' + JSON.stringify(card));
        this.stripe.createCardToken(card).then(function (token) {
            console.log('Payment done');
            //alert(JSON.stringify(token));
            var options = _this.appsetting.header();
            var postdata = {
                price: 1.5,
                token: token.id
            };
            var serialized = _this.appsetting.serializeObj(postdata);
            var Loading = _this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.url + 'payment/stripe', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    // Loading.dismiss();
                    if (response.error == 0) {
                        //                        this.common.presentAlert('Payment', 'Payment successfully done');
                        //                        console.log(this.sms.hasPermission());
                        var reservationdata = {
                            date_time: new Date(),
                            subcategoryid: _this.resDetail._id,
                            category: _this.resDetail.category,
                            category_name: _this.resDetail.category_name,
                            price: 1.5,
                            userid: _this.userData._id,
                            paymentmethod: 'stripe',
                            image: _this.resDetail.image
                        };
                        // alert(JSON.stringify(reservationdata));
                        var serialized = _this.appsetting.serializeObj(reservationdata);
                        _this.http.post(_this.appsetting.url + 'payment/reservations', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response);
                            Loading.dismiss();
                            if (response.error == 0) {
                                _this.common.presentAlert('Payment', 'Payment successfully done');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                            }
                            else {
                                _this.common.presentAlert('Payment', response.message);
                            }
                        });
                    }
                    else {
                        Loading.dismiss();
                        _this.common.presentAlert('Payment', response.message);
                    }
                });
            });
        })
            .catch(function (error) { return console.error(error); });
    };
    PaymentPage.prototype.PaymentViaPaypal = function () {
        var _this = this;
        //alert('clicked');
        console.log('clicked');
        this.payPal.init({
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            PayPalEnvironmentSandbox: 'AcdJh17biSqtUTrV84faj3ICNHJrJU-pmwweL1mkUc0SH3Pp3F4qG8EO3l8MNLyfu7v3e4JijdPOLnlo'
        }).then(function (initsuccess) {
            //alert(JSON.stringify(initsuccess));
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new __WEBPACK_IMPORTED_MODULE_8__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                //alert('here');
                var payment = new __WEBPACK_IMPORTED_MODULE_8__ionic_native_paypal__["c" /* PayPalPayment */]('0.5', 'EUR', 'Description', 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function (res) {
                    // Successfully paid
                    console.log(res);
                    //                    alert(JSON.stringify(res));
                    //                    alert('Payment done')
                    var options = _this.appsetting.header();
                    var postdata = {
                        transactionid: res.response.id,
                        date_time: res.response.create_time,
                        subcategoryid: _this.resDetail._id,
                        category: _this.resDetail.category,
                        category_name: _this.resDetail.category_name,
                        price: 0.5,
                        userid: _this.userData._id,
                        paymentmethod: 'paypal',
                        image: _this.resDetail.image
                    };
                    //alert(JSON.stringify(postdata))
                    var serialized = _this.appsetting.serializeObj(postdata);
                    var Loading = _this.loadingCtrl.create({
                        spinner: 'bubbles',
                        content: 'Loading...'
                    });
                    Loading.present().then(function () {
                        _this.http.post(_this.appsetting.url + 'payment/reservations', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response);
                            Loading.dismiss();
                            if (response.error == 0) {
                                _this.common.presentAlert('Payment', 'Payment successfully done');
                                console.log(_this.sms.hasPermission());
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                            }
                            else {
                                _this.common.presentAlert('Payment', response.message);
                            }
                        });
                    });
                }, function (error) {
                    // Error or render dialog closed without being successful
                    alert(JSON.stringify(error));
                });
            }, function () {
                // Error in configuration
            });
        }, function () {
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payment',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/payment/payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>payment</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="text-sec">\n        <h3><span>€ Choose a payment method :</span>\n            <img src="assets/img/visa.png">\n            <img src="assets/img/MasterCard.png">          \n        </h3>\n    </div>\n\n    <div class="creditcart">\n        <ion-grid>\n            <ion-row>\n                <ion-col col-6>\n                    <button class="blankbtn">\n                        <div class="cradit">\n                            <div class="imgsec">\n                                <img src="assets/img/credit.png">\n                            </div>\n                            <h1>Credit Card</h1>\n                        </div>\n                    </button>\n                </ion-col>\n\n                <ion-col col-6 (click)="PaymentViaPaypal()">\n                         <button class="blankbtn">\n                        <div class="paypal">\n                            <div class="imgsec">\n                                <img src="assets/img/paypal.png">\n                            </div>\n                            <h1>Paypal</h1>\n                        </div>\n                    </button>\n                </ion-col>\n\n\n\n\n            </ion-row>\n        </ion-grid>\n    </div>\n    <div class="text-sec">\n        <h3>Accepted credit cards:</h3>\n    </div>\n\n    <div class="content-sec">\n        <div class="form-sec">\n            <form [formGroup]="PaymentForm"  (submit)="Payment(PaymentForm)">\n                <ion-list>\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col col-12>\n                                <ion-item>\n                                    <ion-input type="text" placeholder="Card Number" formControlName="cardnumber" maxLength="16"></ion-input>\n                                </ion-item>\n                                <p *ngIf="!isValid(\'cardnumber\')" style="color: #ff0000;" padding-left class="pwdreq">Invalid card number.</p>\n                            </ion-col>\n                            <ion-col col-12>\n                                <ion-item>\n                                    <ion-input type="text" placeholder="Name On Card" formControlName="cardname"></ion-input>\n                                </ion-item>\n                                <p *ngIf="!isValid(\'cardname\')" style="color: #ff0000;" padding-left class="pwdreq">Invalid card name.</p>\n                            </ion-col>\n                            <div class="text-sec">\n                                <h3>Expiration Date</h3>\n                            </div>\n                            <ion-col col-6>\n                                <ion-item>\n                                    <ion-input type="tel" placeholder="Month" formControlName="month" maxLength="2"></ion-input>\n                                </ion-item>\n                                <p *ngIf="!isValid(\'month\')" style="color: #ff0000;" padding-left class="pwdreq">Invalid month.</p>\n                            </ion-col>\n                            <ion-col col-6>\n                                <ion-item>\n                                    <ion-input type="tel" placeholder="Year" formControlName="year" maxLength="4"></ion-input>\n                                </ion-item>\n                                <p *ngIf="!isValid(\'year\')" style="color: #ff0000;" padding-left class="pwdreq">Invalid year.</p>\n                            </ion-col>\n                            <ion-col col-6>\n                                <ion-item>\n                                    <ion-input type="tel" placeholder="3 digit code" formControlName="cvv" maxLength="4"></ion-input>\n                                </ion-item>\n                                <p *ngIf="!isValid(\'cvv\')" style="color: #ff0000;" padding-left class="pwdreq">Invalid cvv.</p>\n                            </ion-col>\n                            <ion-col col-6>\n                                <div class="imgsec cvv">\n                                    <img src="assets/img/cvv.png">\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-list>  \n                <div class="btn-sec">\n                    <button ion-button full type="submit">SAVE</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_paypal__["a" /* PayPal */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_stripe__["a" /* Stripe */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_sms__["a" /* SMS */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hotelfilter_hotelfilter__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_popover__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__locationmap_locationmap__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reservationtype_reservationtype__ = __webpack_require__(136);
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
 * Generated class for the HotelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HotelsPage = (function () {
    function HotelsPage(navCtrl, navParams, modalCtrl, viewCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.popoverCtrl = popoverCtrl;
    }
    HotelsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HotelsPage');
    };
    HotelsPage.prototype.HotelModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__hotelfilter_hotelfilter__["a" /* HotelfilterPage */]);
        modal.present();
    };
    HotelsPage.prototype.PopoverModal = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popover_popover__["a" /* PopoverPage */]);
        popover.present();
    };
    HotelsPage.prototype.ReservtypeModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__reservationtype_reservationtype__["a" /* ReservationtypePage */]);
        modal.present();
    };
    HotelsPage.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notification_notification__["a" /* NotificationPage */]);
    };
    HotelsPage.prototype.locationmap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__locationmap_locationmap__["a" /* LocationmapPage */]);
    };
    HotelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hotels',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/hotels/hotels.html"*/'<!--\n  Generated template for the HotelsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="white">\n    <button ion-button menuToggle>\n      <ion-icon name="menus"></ion-icon>\n    </button>\n    <ion-title> <span class="maintitle"> Reserve now </span> <span class="subtitle">Thurs 2 july 9:2:55</span></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="notifications-outline"><span class="noti_counter">0</span></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="PopoverModal()">\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#f9f9f9;">\n  <div class="search_filter">\n    <ion-list>\n    <form>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <ion-searchbar (ionInput)="getItems()"></ion-searchbar>\n          </ion-col>\n          <ion-col col-12>\n            <ion-searchbar (ionInput)="getItems()"></ion-searchbar>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label stacked>Date</ion-label>\n              <ion-input type="date"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label stacked>Time</ion-label>\n              <ion-input type="time"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-5>\n            <ion-item>\n              <ion-label stacked>Table Seats</ion-label>\n              <ion-input type="number" value="5"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-7>\n            <ion-item (click)="HotelModal()">\n              <ion-label stacked>Add Filter</ion-label>\n              <ion-input type="text" value="Hostel"></ion-input>\n            </ion-item>\n          </ion-col>\n\n          <ion-col col-12>\n            <ion-item (click)="ReservtypeModal()">\n              <ion-label stacked>Reservation Type</ion-label>\n              <ion-input type="text" value="Discount / Price / All"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <button (click)="locationmap()" full class="btn">SEarch</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n    </ion-list>\n  </div>\n\n\n<div class="list_item">\n  <h1 class="product_title">Top Hotels</h1>\n<ion-list no-lines>\n  <ion-item>\n    <div class="thumb"  item-start>\n       <img src="assets/img/r1.jpg">\n    </div>\n\n    <h2>Barbeque Nation</h2>\n    <h4 class="categories_sub">Hotels</h4>\n    <p>Distance : 350m</p>\n    <p>Address : Dongi Garadgi, Gaji</p>\n    <button ion-button small class="btn_new">Reserve</button>\n  </ion-item>\n  <ion-item>\n    <div class="thumb"  item-start>\n       <img src="assets/img/r1.jpg">\n    </div>\n\n    <h2>Barbeque Nation</h2>\n    <h4 class="categories_sub">Hotels</h4>\n    <p>Distance : 350m</p>\n    <p>Address : Dongi Garadgi, Gaji</p>\n    <button ion-button small class="btn_new">Reserve</button>\n  </ion-item>\n</ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/hotels/hotels.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"]])
    ], HotelsPage);
    return HotelsPage;
}());

//# sourceMappingURL=hotels.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelfilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the HotelfilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HotelfilterPage = (function () {
    function HotelfilterPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    HotelfilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HotelfilterPage');
    };
    HotelfilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    HotelfilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hotelfilter',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/hotelfilter/hotelfilter.html"*/'<!--\n  Generated template for the HotelfilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n  <ion-navbar color="white">\n    <ion-buttons start left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title> Filter</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background: #f9f9f9;">\n  <div class="filter_list">\n     <ion-list no-lines>\n    <ion-item>\n      <ion-label>Hotel Type</ion-label>\n      <ion-select [(ngModel)]="hotel">\n        <ion-option value="1">1 Star</ion-option>\n        <ion-option value="2">2 Star</ion-option>\n        <ion-option value="3">3 Stars</ion-option>\n        <ion-option value="4">4 Stars</ion-option>\n        <ion-option value="5">5 Stars</ion-option>\n        <ion-option value="6">bb</ion-option>\n        <ion-option value="7">Residence</ion-option>\n        <ion-option value="8">Hostel</ion-option>\n      </ion-select>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>Hotel Service</ion-label>\n      <ion-select [(ngModel)]="Service">\n        <ion-option value="1">Service 1</ion-option>\n        <ion-option value="2">Service 2 </ion-option>\n      </ion-select>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>Room Price</ion-label>\n      <ion-select [(ngModel)]="Price">\n        <ion-option value="1">Price 1</ion-option>\n        <ion-option value="2">Price 2 </ion-option>\n      </ion-select>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>Location Type</ion-label>\n      <ion-select [(ngModel)]="Location">\n        <ion-option value="1">Location 1</ion-option>\n        <ion-option value="2">Location 2 </ion-option>\n      </ion-select>\n  </ion-item>\n     </ion-list>\n     <div class="tag">wifi <span class="tag_delete">x</span></div>\n     <div class="tag">wifi <span class="tag_delete">x</span></div>\n  </div>\n</ion-content>\n\n<ion-footer no-lines>\n  <ion-toolbar class="footer_button">\n    <button ion-button block color="dark">Add</button>\n    <button ion-button block  color="yellow">Reset All</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/hotelfilter/hotelfilter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], HotelfilterPage);
    return HotelfilterPage;
}());

//# sourceMappingURL=hotelfilter.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_popover__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(18);
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
 * Generated class for the LocationmapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationmapPage = (function () {
    function LocationmapPage(navCtrl, navParams, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
    }
    LocationmapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationmapPage');
    };
    LocationmapPage.prototype.PopoverModal = function () {
        var popover = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popover_popover__["a" /* PopoverPage */]);
        popover.present();
    };
    LocationmapPage.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */]);
    };
    LocationmapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-locationmap',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/locationmap/locationmap.html"*/'<!--\n  Generated template for the LocationmapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="white">\n    <button ion-button menuToggle>\n      <ion-icon name="menus"></ion-icon>\n    </button>\n    <ion-title> <span class="maintitle"> Reserve now </span> <span class="subtitle">Thurs 2 july 9:2:55</span></ion-title>\n    <ion-buttons end (click)="notification()">\n      <button ion-button icon-only>\n        <ion-icon name="notifications-outline"><span class="noti_counter">0</span></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="PopoverModal()">\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n<ion-searchbar class="customsearch" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)">\n    </ion-searchbar>\n</ion-header>\n\n\n<ion-content style="background:#f9f9f9;">\n\n<div class="mapouter">\n  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.9352172945055!2d-71.80711768488622!3d42.25855597919382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e40663492673c1%3A0xaf8e200228d2a96e!2s2+Ionic+Ave%2C+Worcester%2C+MA+01608%2C+USA!5e0!3m2!1sen!2sin!4v1511332038652" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>\n</div>\n\n\n<div class="list_item">\n  <h1 class="product_title">Top Hotels</h1>\n<ion-list no-lines>\n  <ion-item>\n    <div class="thumb"  item-start>\n       <img src="assets/img/r1.jpg">\n    </div>\n\n    <h2>Barbeque Nation</h2>\n    <h4 class="categories_sub">Hotels</h4>\n    <p>Distance : 350m</p>\n    <p>Address : Dongi Garadgi, Gaji</p>\n    <p class="type">Type : \n      <button ion-button small color="yellow" class="btn_new">Sushi</button> \n      <button ion-button small  class="btn_new">Big</button>\n      <button ion-button small color="yellow" class="btn_new">Fish</button> \n      <button ion-button small  class="btn_new">Reserve</button>\n      <button ion-button small color="yellow" class="btn_new">Map View</button> \n    </p>\n  </ion-item>\n  <ion-item>\n    <div class="thumb"  item-start>\n       <img src="assets/img/r1.jpg">\n    </div>\n\n    <h2>Barbeque Nation</h2>\n    <h4 class="categories_sub">Hotels</h4>\n    <p>Distance : 350m</p>\n    <p>Address : Dongi Garadgi, Gaji</p>\n    <p class="type">Type : \n      <button ion-button small color="yellow" class="btn_new">Sushi</button> \n      <button ion-button small  class="btn_new">Big</button>\n      <button ion-button small color="yellow" class="btn_new">Fish</button> \n      <button ion-button small  class="btn_new">Reserve</button>\n      <button ion-button small color="yellow" class="btn_new">Map View</button> \n    </p>\n  </ion-item>\n</ion-list>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/locationmap/locationmap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], LocationmapPage);
    return LocationmapPage;
}());

//# sourceMappingURL=locationmap.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationtypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the ReservationtypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservationtypePage = (function () {
    function ReservationtypePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ReservationtypePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservationtypePage');
    };
    ReservationtypePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReservationtypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reservationtype',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/reservationtype/reservationtype.html"*/'<!--\n  Generated template for the ReservationtypePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="white">\n    <ion-buttons start left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title> Reservation Type</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#f9f9f9;">\n<ion-grid class="range_sec">\n  <ion-row>\n    <ion-col col-5><p class="left_discount">Discount</p></ion-col>\n    <ion-col col-2><button ion-button outline small class="btn_new">All</button></ion-col>\n    <ion-col col-5><p class="right_price">Price</p></ion-col>\n  </ion-row>\n</ion-grid>\n\n  <ion-list no-lines>\n  <ion-item class="range_slide">\n     <ion-range dualKnobs="true" min="-100" step="10" snaps="true" [(ngModel)]="text">\n      <div class="rangetxt" range-left small>100%</div>\n      <div class="rangetxt" range-right>€ 100</div>\n    </ion-range>\n  </ion-item>\n  </ion-list>\n  \n</ion-content>\n\n\n\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/reservationtype/reservationtype.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], ReservationtypePage);
    return ReservationtypePage;
}());

//# sourceMappingURL=reservationtype.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_signin__ = __webpack_require__(39);
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
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = (function () {
    function ForgotPage(navCtrl, navParams, formBuilder, http, appsetting, common, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.appsetting = appsetting;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    ForgotPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.ForgotForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, this.emailValidator.bind(this)]],
        });
    };
    ForgotPage.prototype.emailValidator = function (control) {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return { invalidEmail: true };
        }
    };
    ForgotPage.prototype.ForgotPassword = function (forgotdata) {
        var _this = this;
        console.log(forgotdata.value);
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            var options_1 = this.appsetting.header();
            var postdata = {
                email: forgotdata.value.email,
            };
            console.log(postdata);
            var serialized = this.appsetting.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.url + 'forgetpassword', serialized, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    if (response.error == "0") {
                        localStorage.removeItem('CurrentUser');
                        _this.common.presentAlert('Forgot', response.message);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signin_signin__["a" /* SigninPage */]);
                    }
                    else {
                        _this.common.presentAlert('Forgot', response.message);
                    }
                });
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPage');
    };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/forgot/forgot.html"*/'<!--\n  Generated template for the ForgotPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="theme-header">\n    <ion-title>Forget password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<div class="content-sec">\n		<div class="sign">\n			<form class="form-sec" [formGroup]="ForgotForm" (ngSubmit)="ForgotPassword(ForgotForm)">\n				<ion-list>\n                                   <ion-col col-12>\n				  <ion-item>\n				    <ion-label stacked>Email</ion-label>\n				    <ion-input type="email" formControlName="email"></ion-input>\n				  </ion-item>\n                                   </ion-col>\n				</ion-list>\n                            <div class="frgtpwd">\n			<button type="submit" ion-button [disabled]="!ForgotForm.valid">SAVE</button>\n		</div>\n			</form>\n		</div>\n		\n\n	</div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/forgot/forgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptatumanagerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signin_signin__ = __webpack_require__(39);
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
 * Generated class for the OptatumanagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OptatumanagerPage = (function () {
    function OptatumanagerPage(navCtrl, navParams, appsetting, http, formBuilder, toastCtrl, common, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.category = [];
        // alert('optatumanager ');
    }
    OptatumanagerPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.OptatuManagerForm = this.formBuilder.group({
            category: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            name: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            surname: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            activityName: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            activityAddress: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            postalCode: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            province: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            city: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, this.emailValidator.bind(this)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            companyName: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            vatNumber: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            billingAddress: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            billingProvince: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            billingCity: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            billingNation: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            iban: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            ibanName: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            ibanSurname: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            paypalemail: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, this.emailValidator.bind(this)]],
            legal: [true, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, this.checkbox.bind(this)]],
            terms: [true, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, this.checkbox.bind(this)]],
            privacy: [true, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, this.checkbox.bind(this)]]
        });
    };
    OptatumanagerPage.prototype.emailValidator = function (control) {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return { invalidEmail: true };
        }
    };
    OptatumanagerPage.prototype.checkbox = function (legal) {
        console.log(legal.value);
        if (legal.value == false) {
            return { legal: false };
        }
    };
    OptatumanagerPage.prototype.OptatuManager = function (managerdata) {
        var _this = this;
        console.log(managerdata.value);
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            if (managerdata.value.password.indexOf(' ') != 0) {
                var options_1 = this.appsetting.header();
                var postdata = {
                    category: managerdata.value.category,
                    name: managerdata.value.name,
                    surname: managerdata.value.surname,
                    activityname: managerdata.value.activityName,
                    location: managerdata.value.activityAddress,
                    postalcode: managerdata.value.postalCode,
                    province: managerdata.value.province,
                    city: managerdata.value.city,
                    telephone: managerdata.value.phone,
                    email: managerdata.value.email,
                    password: managerdata.value.password,
                    companyname: managerdata.value.companyName,
                    vat: managerdata.value.vatNumber,
                    billingaddress: managerdata.value.billingAddress,
                    billingprovince: managerdata.value.billingProvince,
                    billingcity: managerdata.value.billingCity,
                    billingnation: managerdata.value.billingNation,
                    iban: managerdata.value.iban,
                    ibanname: managerdata.value.ibanName,
                    ibansurname: managerdata.value.ibanSurname,
                    paypalemail: managerdata.value.paypalemail,
                    role: 'vendor'
                };
                var serialized = this.appsetting.serializeObj(postdata);
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    content: 'Loading...'
                });
                Loading.present().then(function () {
                    _this.http.post(_this.appsetting.url + 'users/registervendor', serialized, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response);
                        Loading.dismiss();
                        if (response.error == "0") {
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Optatu manager',
                                subTitle: 'Congratulation you have been successfully registered.Please check your email to activate your account.',
                                buttons: [
                                    {
                                        text: 'Ok',
                                        role: 'submit',
                                        handler: function () {
                                            console.log('ok clicked');
                                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__signin_signin__["a" /* SigninPage */]);
                                        }
                                    }
                                ]
                            });
                            alert_1.present();
                            //this.common.presentAlert('Optatu Manager', response.message);
                        }
                    });
                });
            }
            else {
                this.common.presentAlert('Optatu Manager', 'Space not allowed in password!');
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    OptatumanagerPage.prototype.ionViewDidLoad = function () {
        this.getCategory();
        console.log('ionViewDidLoad OptatumanagerPage');
    };
    OptatumanagerPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    OptatumanagerPage.prototype.isValid = function (field) {
        var formField = this.OptatuManagerForm.get(field);
        return formField.valid || formField.pristine;
    };
    OptatumanagerPage.prototype.categorySelect = function (eventdata) {
        console.log(eventdata);
        this.selectedCat = eventdata.join(', ');
        console.log(this.selectedCat);
        //this.OptatuManagerForm = {'category' : this.selectedCat[0]};
    };
    OptatumanagerPage.prototype.getCategory = function () {
        var _this = this;
        var options = this.appsetting.header();
        this.http.get(this.appsetting.url + 'managercategorylist', options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            _this.category = response.data;
        });
    };
    OptatumanagerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-optatumanager',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/optatumanager/optatumanager.html"*/'<!--\n  Generated template for the OptatumanagerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Optatu Manager</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content style="background-color:f2f2f2">\n   <div class="content-sec">\n  <div class="sign">\n   <form [formGroup]="OptatuManagerForm">\n     <ion-grid >\n       \n    <ion-list>\n        <ion-row>\n<ion-col col-12>\n       <ion-item>\n  <ion-label>CATEGORY</ion-label>\n  <ion-select multiple="true" formControlName="category" (ngModelChange)="categorySelect($event)" >\n    <ion-option *ngFor="let cat of category">{{cat.category}}</ion-option>\n  </ion-select>\n</ion-item>\n    <p class="selectedcat" *ngIf="selectedCat">{{selectedCat}}</p>\n    <p *ngIf="!isValid(\'category\')" color="danger" padding-left>Choose at least one category</p>\n</ion-col>\n        </ion-row>\n  <ion-row>\n    <ion-col col-6 style="padding-right: 4px;position: initial;">\n      <ion-item>\n        <ion-input type="text" name="username" placeholder="NAME" formControlName="name"></ion-input>\n      </ion-item>\n        <p *ngIf="!isValid(\'name\')" color="danger" padding-left>Name required.</p>\n      </ion-col>\n    <ion-col col-6  style="padding-left: 4px;position: initial;">\n      <ion-item>\n        <ion-input type="text" name="username" placeholder="LAST NAME" formControlName="surname"></ion-input>\n      </ion-item>\n        <p *ngIf="!isValid(\'surname\')" color="danger" padding-left>Last name required.</p>\n      </ion-col>\n  </ion-row>\n\n        <ion-row>\n<ion-col col-12 style="position: initial;">\n  <ion-item>\n     <ion-input type="text" name="username" placeholder="ACTIVITY NAME" formControlName="activityName"></ion-input>\n      </ion-item>\n    <p *ngIf="!isValid(\'activityName\')" color="danger" padding-left>Activity name required.</p>\n</ion-col>\n        </ion-row>\n        <ion-row>\n<ion-col col-12 style="position: initial;">\n      <ion-item>\n <ion-input type="text" name="username" placeholder="LOCATION / ACTIVITY ADDRESS" formControlName="activityAddress"></ion-input>\n     </ion-item>\n    <p *ngIf="!isValid(\'activityAddress\')" color="danger" padding-left>Activity address required.</p>\n     </ion-col>\n        </ion-row>\n        <ion-row>\n     <ion-col col-12 style="position: initial;">\n      <ion-item>\n <ion-input type="tel" name="username" placeholder="POSTAL CODE / CAP" formControlName="postalCode" maxLength="15"></ion-input>\n     </ion-item>\n         <p *ngIf="!isValid(\'postalCode\')" color="danger" padding-left>Postal code required.</p>\n     </ion-col>\n        </ion-row>\n        <ion-row>\n\n  <ion-col col-12 style="position: initial;">\n      <ion-item>\n <ion-input type="text" name="username" placeholder="PROVINCE " formControlName="province"></ion-input>\n     </ion-item>\n      <p *ngIf="!isValid(\'province\')" color="danger" padding-left>Province required.</p>\n     </ion-col>\n        </ion-row>\n        <ion-row>\n    <ion-col col-12 style="position: initial;">\n      <ion-item>\n <ion-input type="text" name="username" placeholder="CITY" formControlName="city"></ion-input>\n     </ion-item>\n         <p *ngIf="!isValid(\'city\')" color="danger" padding-left>City required.</p>\n     </ion-col>\n        </ion-row>\n        <ion-row>\n     <ion-col col-12 style="position: initial;">\n      <ion-item>\n <ion-input type="tel" name="username" placeholder="TELEPHONE" formControlName="phone" maxLength="15"></ion-input>\n     </ion-item>\n<!--          <p *ngIf="!isValid(\'phone\')" color="danger" padding-left>Phone required.</p>-->\n     </ion-col>\n        </ion-row>\n        <ion-row>\n     <ion-col col-12 style="position: initial;">\n      <ion-item>\n <ion-input type="email" name="username" placeholder="EMAIL" formControlName="email"></ion-input>\n     </ion-item>\n        <p *ngIf="!isValid(\'email\')" color="danger" padding-left>Invalid email</p>\n     </ion-col>\n        </ion-row>\n        <ion-row>\n        <ion-col col-12 style="position: initial;">\n      <ion-item>\n <ion-input type="password" name="password" placeholder="PASSWORD" formControlName="password"></ion-input>\n     </ion-item>\n        <p *ngIf="!isValid(\'password\')" color="danger" padding-left>Password required.</p>\n     </ion-col>\n        </ion-row>\n        <ion-row>\n     <ion-col col-12 style="position: initial;">\n <h1>BILLING INVOICE</h1>\n     </ion-col>\n        </ion-row>\n        <ion-row>\n      <ion-col col-12 style="position: initial;">\n      <ion-item>\n <ion-input type="text" name="username" placeholder="COMPANY NAME" formControlName="companyName"></ion-input>\n     </ion-item>\n          <p *ngIf="!isValid(\'companyName\')" color="danger" padding-left>Company name required.</p>\n     </ion-col>\n        </ion-row>\n        <ion-row>\n        <ion-col col-12 style="position: initial;">\n      <ion-item>\n <ion-input type="tel" name="username" placeholder="VAT NUMBER / FISCAL CODE" formControlName="vatNumber" maxLength="15"></ion-input>\n     </ion-item>\n          <p *ngIf="!isValid(\'vatNumber\')" color="danger" padding-left>Vat number required.</p>\n     </ion-col>\n        </ion-row>\n        <ion-row>\n        <ion-col col-12 style="position: initial;">\n      <ion-item>\n <ion-input type="text" name="username" placeholder="BILLING ADDRESS" formControlName="billingAddress"></ion-input>\n     </ion-item>\n            <p *ngIf="!isValid(\'billingAddress\')" color="danger" padding-left>Billing address required.</p>\n     </ion-col>\n        </ion-row>\n        <ion-row>\n        <ion-col col-12 style="position: initial;">\n      <ion-item>\n <ion-input type="text" name="username" placeholder="PROVINCE" formControlName="billingProvince"></ion-input>\n     </ion-item>\n            <p *ngIf="!isValid(\'billingProvince\')" color="danger" padding-left>Billing province required.</p>\n     </ion-col>\n        </ion-row>\n        <ion-row>\n        <ion-col col-12 style="position: initial;">\n      <ion-item>\n <ion-input type="text" name="username" placeholder="CITY" formControlName="billingCity"></ion-input>\n     </ion-item>\n        <p *ngIf="!isValid(\'billingCity\')" color="danger" padding-left>Billing city required.</p>\n     </ion-col>\n        </ion-row>\n        <ion-row>\n        <ion-col col-12 style="position: initial;">\n      <ion-item>\n <ion-input type="text" name="username" placeholder="NATION" formControlName="billingNation"></ion-input>\n     </ion-item>\n        <p *ngIf="!isValid(\'billingNation\')" color="danger" padding-left>Billing nation required.</p>\n     </ion-col>\n        </ion-row>\n        <ion-row>\n        <ion-col col-12 style="position: initial;">\n      <ion-item>\n <ion-input type="text" name="username" placeholder="IBAN" formControlName="iban"></ion-input>\n     </ion-item>\n            <p *ngIf="!isValid(\'iban\')" color="danger" padding-left>IBAN required.</p>\n     </ion-col>\n        </ion-row>\n  <ion-row>\n    <ion-col col-6 style="padding-right: 4px;position: initial;">\n      <ion-item>\n        <ion-input type="text" name="username" placeholder="IBAN NAME" formControlName="ibanName"></ion-input>\n      </ion-item>\n        <p *ngIf="!isValid(\'ibanName\')" color="danger" padding-left>IBAN name required.</p>\n      </ion-col>\n    <ion-col col-6 style="padding-left: 4px;position: initial;">\n      <ion-item>\n        <ion-input type="email" name="username" placeholder="IBAN LAST NAME" formControlName="ibanSurname"></ion-input>\n      </ion-item>\n        <p *ngIf="!isValid(\'ibanSurname\')" color="danger" padding-left>IBAN lastname required.</p>\n      </ion-col>\n  </ion-row>\n        <ion-row>\n <ion-col col-12 style="position: initial;">\n      <ion-item>\n <ion-input type="email" name="username" placeholder="PAYPAL EMAIL" formControlName="paypalemail"></ion-input>\n     </ion-item>\n      <p *ngIf="!isValid(\'paypalemail\')" color="danger" padding-left>Paypal email required.</p>\n     </ion-col>\n        </ion-row>\n     \n      </ion-list>\n     </ion-grid>\n\n     <ion-item class="rbtn">\n  <ion-label>LEGAL REFERENCE CONFIRM</ion-label>\n  <ion-checkbox color="dark" formControlName="legal"></ion-checkbox>\n</ion-item>\n\n    <ion-item class="rbtn">\n  <ion-label>OPTATU SERVICE TERMS & CONDITIONS</ion-label>\n  <ion-checkbox color="dark" formControlName="terms"></ion-checkbox>\n</ion-item>\n\n    <ion-item class="rbtn" style="background:none">\n  <ion-label>PRIVACY </ion-label>\n  <ion-checkbox color="dark" formControlName="privacy"></ion-checkbox>\n</ion-item>\n  <div class="btn-sec">\n   <button ion-button full class="custom_btn" type="submit" color="dark"  (click)="OptatuManager(OptatuManagerForm)" [disabled]="!OptatuManagerForm.valid">REGISTER</button>\n   </div>\n\n  </form>\n \n </div>\n</div>\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/optatumanager/optatumanager.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], OptatumanagerPage);
    return OptatumanagerPage;
}());

//# sourceMappingURL=optatumanager.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateaccuntPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_unique_device_id__ = __webpack_require__(103);
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
 * Generated class for the CreateaccuntPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateaccuntPage = (function () {
    function CreateaccuntPage(navCtrl, navParams, formBuilder, http, appsetting, camera, actionSheetCtrl, uniqueDeviceID, common, toastCtrl, events, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.appsetting = appsetting;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.uniqueDeviceID = uniqueDeviceID;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.base64Image = "assets/img/profile.png";
        this.type = 'password';
        this.Ctype = 'password';
        this.showPass = false;
        this.showCpass = false;
        this.iconname = 'eye';
        this.iconname1 = 'eye';
        this.myColors = [];
        this.bar0 = '#DDD';
        this.bar1 = '#DDD';
        this.bar2 = '#DDD';
        this.bar3 = '#DDD';
        this.bar4 = '#DDD';
        //alert('Rahul ');
    }
    CreateaccuntPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateaccuntPage');
    };
    CreateaccuntPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.SignupForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            surname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, this.emailValidator.bind(this)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(6)]],
            cpassword: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(6)]],
            legal: [true, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, this.checkbox.bind(this)]]
        }, { validator: this.matchingPasswords('password', 'cpassword') });
    };
    CreateaccuntPage.prototype.emailValidator = function (control) {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return { invalidEmail: true };
        }
    };
    CreateaccuntPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    CreateaccuntPage.prototype.showPassword = function () {
        console.log('showpassword');
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
            this.iconname = 'eye-off';
        }
        else {
            this.type = 'password';
            this.iconname = 'eye';
        }
    };
    CreateaccuntPage.prototype.checkbox = function (legal) {
        console.log(legal.value);
        if (legal.value == false) {
            return { legal: false };
        }
    };
    CreateaccuntPage.prototype.showCPassword = function () {
        console.log('showCpassword');
        this.showCpass = !this.showCpass;
        if (this.showCpass) {
            this.Ctype = 'text';
            this.iconname1 = 'eye-off';
        }
        else {
            this.Ctype = 'password';
            this.iconname1 = 'eye';
        }
    };
    CreateaccuntPage.prototype.isValid = function (field) {
        var formField = this.SignupForm.get(field);
        return formField.valid || formField.pristine;
    };
    CreateaccuntPage.prototype.CreateAccount = function (formdata) {
        var _this = this;
        console.log(formdata.value);
        console.log(formdata.value.password.indexOf(' '));
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            if (formdata.value.password.indexOf(' ') != 0) {
                var options_1 = this.appsetting.header();
                //      this.uniqueDeviceID.get().then((uuid: any) => {
                //  console.log(uuid);
                if (this.ImageToSend != undefined) {
                    this.ImageToSend = this.ImageToSend;
                }
                else {
                    this.ImageToSend = '';
                }
                var postdata = {
                    name: formdata.value.name,
                    surname: formdata.value.surname,
                    phone: formdata.value.phone,
                    email: formdata.value.email,
                    password: formdata.value.password,
                    image: this.ImageToSend,
                    //token:uuid,
                    role: 'user'
                };
                var serialized = this.appsetting.serializeObj(postdata);
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    content: 'Loading...'
                });
                Loading.present().then(function () {
                    _this.http.post(_this.appsetting.url + 'users/register', serialized, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response);
                        Loading.dismiss();
                        if (response.error == "0") {
                            localStorage.setItem('CurrentUser', JSON.stringify(response.data.all));
                            _this.events.publish('Loggedin', 'loginpage');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                        }
                        else {
                            _this.common.presentAlert('Signup', response.message);
                        }
                    });
                });
            }
            else {
                this.common.presentAlert('Signup', 'Space not allowed in password.');
            }
            //}).catch((error: any) => console.log(error));
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    CreateaccuntPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CreateaccuntPage.prototype.pass_strength = function (pass) {
        var strongRegularExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*()<>{}:;+'~|,-_?/=])(?=.{8,})");
        var mediumRegularExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if (strongRegularExp.test(pass.value)) {
            console.log('strong');
            this.bar0 = '#00FF00';
            this.bar1 = '#00FF00';
            this.bar2 = '#00FF00';
            this.bar3 = '#00FF00';
            this.bar4 = '#00FF00';
        }
        else if (mediumRegularExp.test(pass.value)) {
            console.log('medium');
            this.bar0 = '#FFA500';
            this.bar1 = '#FFA500';
            this.bar2 = '#DDD';
            this.bar3 = '#DDD';
            this.bar4 = '#DDD';
        }
        else {
            console.log('low');
            this.bar0 = '#FF0000';
            this.bar1 = '#DDD';
            this.bar2 = '#DDD';
            this.bar3 = '#DDD';
            this.bar4 = '#DDD';
        }
    };
    CreateaccuntPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose image',
            buttons: [
                {
                    text: 'Camera',
                    role: 'submit',
                    handler: function () {
                        console.log('submit clicked');
                        _this.chooseImage(1);
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        console.log('Gallery clicked');
                        _this.chooseImage(0);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CreateaccuntPage.prototype.chooseImage = function (Type) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: Type,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 800,
            targetHeight: 800,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.ImageToSend = imageData;
        }, function (err) {
            // Handle error
            console.log(err);
        });
    };
    CreateaccuntPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-createaccunt',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/createaccunt/createaccunt.html"*/'<!--\n  Generated template for the CreateaccuntPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Create Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="main">\n    <div class="top-sec">\n     <div class="input-main">\n      <div class="main-img">\n        <img [src]="base64Image">\n      </div>\n      <div class="input-sec" (click)="presentActionSheet()">\n      <div class="upld">\n        <ion-icon name="camera"></ion-icon>\n      </div>\n      </div>\n     </div>\n    </div>\n  </div>\n  <div class="content-sec">\n    <div class="form-sec">\n      <form [formGroup]="SignupForm">\n        <ion-list>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12 style="position: initial;">\n              <ion-item>\n                <ion-input type="text" placeholder="NAME" formControlName="name"></ion-input>\n              </ion-item>\n                  <p *ngIf="!isValid(\'name\')" color="danger" padding-left>Name required.</p>\n            </ion-col>\n\n            <ion-col col-12 style="position: initial;">\n              <ion-item>\n                <ion-input type="text" placeholder="LAST NAME " formControlName="surname"></ion-input>\n              </ion-item>\n                <p *ngIf="!isValid(\'surname\')" color="danger" padding-left>Last name required.</p>\n            </ion-col>\n            <ion-col col-12 style="position: initial;">\n               <ion-item>\n                <ion-input type="tel" placeholder="PHONE NUMBER" formControlName="phone" maxLength="15"></ion-input>\n              </ion-item>\n<!--                <p *ngIf="!isValid(\'phone\')" color="danger" padding-left>Phone should be 10 digits.</p>-->\n            </ion-col>\n            <ion-col col-12 style="position: initial;">\n               <ion-item>\n                <ion-input type="email" placeholder="EMAIL " formControlName="email" autocapitalize="off"></ion-input>\n              </ion-item>\n                <p *ngIf="!isValid(\'email\')" color="danger" padding-left>Invalid email.</p>\n            </ion-col>\n            <ion-col col-12 style="position: initial;">\n                <div class="itemouter">\n               <ion-item>\n                <ion-input type="{{type}}" placeholder="PASSWORD" formControlName="password" class="form-control" id="password" name="password" (input)="pass_strength(SignupForm.controls.password)" maxLength="15"></ion-input>\n               </ion-item>\n                    <button type="button" color="dark" class="eyebutton" (click)="showPassword()" ion-button icon-only clear>\n                    <ion-icon name="{{iconname}}"></ion-icon>\n                  </button>\n                <div id="strength">\n                    <p class="strnth">Password strength:</p>\n                        <ul id="strengthBar">\n                            <li class="point" [style.background-color]="bar0"></li>\n                            <li class="point" [style.background-color]="bar1"></li>\n                            <li class="point" [style.background-color]="bar2"></li>\n                            <li class="point" [style.background-color]="bar3"></li>\n                            <li class="point" [style.background-color]="bar4"></li>\n                        </ul>\n                    </div>\n                </div>\n            </ion-col>\n\n              <ion-col col-12 style="position: initial;">\n                  <div class="itemouter">\n               <ion-item>\n                <ion-input type="{{Ctype}}" placeholder="CONFIRM PASSWORD" formControlName="cpassword"></ion-input>\n                   </ion-item>\n                    <button type="button" color="dark" class="eyebutton" (click)="showCPassword()" ion-button icon-only clear>\n  <ion-icon name="{{iconname1}}"></ion-icon>\n</button>\n                <div class=\'form-text error\' color="danger" *ngIf="SignupForm.controls.cpassword.touched">\n          <div *ngIf="SignupForm.hasError(\'mismatchedPasswords\')">Passwords do not match.</div>\n        </div>\n                </div>\n                  </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-list>\n                <ion-item class="rbtn" style="background:none">\n                <ion-label>LEGAL DISCLAIMER</ion-label>\n                <ion-checkbox color="dark" formControlName="legal"></ion-checkbox>\n              </ion-item>\n          <!--<p *ngIf="!isValid(\'legal\')" danger padding-left>Must accept legal disclaimer</p>-->\n           <div class="btn-sec">\n               \n    <button type="submit" ion-button (click)="CreateAccount(SignupForm)" [disabled]="!SignupForm.valid">REGISTER</button>\n  </div>\n      </form>\n      \n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/createaccunt/createaccunt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], CreateaccuntPage);
    return CreateaccuntPage;
}());

//# sourceMappingURL=createaccunt.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appsetting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the Appsetting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Appsetting = (function () {
    function Appsetting(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.url = 'http://default-environment.mm4pnmggzz.us-east-2.elasticbeanstalk.com/api/'; //shop/shippingaddress
        console.log('Hello Appsetting Provider');
    }
    Appsetting.prototype.header = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    Appsetting.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    Appsetting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"]])
    ], Appsetting);
    return Appsetting;
}());

//# sourceMappingURL=appsetting.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(16);
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
 * Generated class for the ReservationdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservationdetailPage = (function () {
    function ReservationdetailPage(navCtrl, navParams, popoverCtrl, common, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.common = common;
        this.alertCtrl = alertCtrl;
        console.log(this.common.cords);
    }
    ReservationdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RestaurantviewPage');
        this.currentuser = JSON.parse(localStorage.getItem('CurrentUser'));
        console.log(this.currentuser);
        this.resdetail = this.navParams.get('selecteddata');
        var d = new Date();
        console.log(d);
        this.headerdate = __WEBPACK_IMPORTED_MODULE_3_moment__(d).format('llll');
    };
    ReservationdetailPage.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notification_notification__["a" /* NotificationPage */]);
    };
    ReservationdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reservationdetail',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/reservationdetail/reservationdetail.html"*/'<!--\n  Generated template for the ReservationdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="white">\n        <button ion-button menuToggle>\n            <ion-icon name="menus"></ion-icon>\n        </button>\n        <ion-title> <span class="maintitle"> Reserve now </span> <span class="subtitle">{{headerdate}}</span></ion-title>\n        <ion-buttons end (click)="notification()">\n                     <button ion-button icon-only>\n                <ion-icon name="notifications-outline"><span class="noti_counter">0</span></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end (click)="PopoverModal()">\n                     <button ion-button icon-only>\n                <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="box">\n        <ion-list no-lines>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img [src]="resdetail?.image"/>\n                </ion-thumbnail>\n                <h2>{{resdetail?.category}}</h2>\n                <p>{{resdetail?.category_name}}</p>\n            </ion-item>\n        </ion-list> \n    </div>\n\n    <div class="box2">\n        <ion-grid class="details">\n            <ion-row>\n                <ion-col col-5><h1>address :</h1></ion-col>\n                <ion-col col-7>\n                    <ion-item no-padding><ion-label>{{resdetail?.address}} \n                            <ion-icon class="arrow"><img src="assets/img/arrow.png"/> </ion-icon>  </ion-label></ion-item>   \n                    <!--          <ion-item no-padding><ion-label>\n                              Portland, Oregon  </ion-label> </ion-item>           -->\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5><h1>tel :</h1></ion-col>\n                <ion-col col-7><ion-item no-padding><ion-label>{{currentuser?.phone}}</ion-label></ion-item></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5><h1>email :</h1></ion-col>\n                <ion-col col-7><ion-item no-padding><ion-label>{{currentuser?.email}}</ion-label></ion-item></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5><h1>opening time :</h1></ion-col>\n                <ion-col col-7><ion-item no-padding><ion-label>{{resdetail?.start_date| date:\'shortTime\'}} to {{resdetail?.end_date| date:\'shortTime\'}}</ion-label></ion-item></ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n\n<!--    <div class="box2">\n        <ion-grid class="details">\n            <ion-row>\n                <ion-col col-5><h1>menu type :</h1></ion-col>\n                <ion-col col-7><span *ngFor="let menutype of resdetail?.dishes">{{menutype.menu_type}}</span></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5><h1>menu price:</h1></ion-col>\n                <ion-col col-7><span>sushi</span></ion-col>\n            </ion-row>\n                    <ion-row>\n                      <ion-col col-5><h1>location:</h1></ion-col>\n                      <ion-col col-7><span>sushi</span></ion-col>\n                    </ion-row>\n        </ion-grid>\n    </div>-->\n\n<!--    <div class="yellowbox">\n        <div class="outline">\n            <h1>reserve now</h1>\n            <h3>date:<span>{{selected_data?.date}}</span></h3>\n            <h3>table seats:<span>{{selected_data?.seats}}</span></h3>\n            <div class="pricer" *ngIf="resdetail?.coupon.length>0">\n                <h3>validity from:<span>{{resdetail?.coupon[0].startdate | date:\'shortTime\'}} to {{resdetail?.coupon[0].enddate | date:\'shortTime\'}}</span></h3>\n                <h4 *ngIf="resdetail?.coupon[0].percentage">-{{resdetail?.coupon[0].percentage}}%</h4>\n                <h4 *ngIf="resdetail?.coupon[0].price">-€{{resdetail?.coupon[0].price}}</h4>\n            <span *ngIf="resdetail?.coupon[0].res_type == \'free\'" class="discount">Free</span>\n            <span *ngIf="resdetail?.coupon[0].res_type != \'free\'" class="discount">discount on payment</span>\n            </div>\n            \n            <button  ion-button round (click)="paymentPage(resdetail)" class="confirm">confirm</button>\n        </div>\n    </div>-->\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/reservationdetail/reservationdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], ReservationdetailPage);
    return ReservationdetailPage;
}());

//# sourceMappingURL=reservationdetail.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getstart_getstart__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common__ = __webpack_require__(16);
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
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = (function () {
    function ChangepasswordPage(navCtrl, navParams, appsetting, http, formBuilder, common) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.formBuilder = formBuilder;
        this.common = common;
        this.type = 'password';
        this.Ctype = 'password';
        this.Ctype1 = 'password';
        this.showPass = false;
        this.showCpass = false;
        this.showCpass1 = false;
        this.iconname = 'eye';
        this.iconname1 = 'eye';
        this.iconname2 = 'eye';
        //alert('change password hh');
        console.log(JSON.parse(localStorage.getItem('CurrentUser')));
    }
    ChangepasswordPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.changepassword = this.formBuilder.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,]],
            newpassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)]],
            cnewpassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)]],
        }, { validator: this.matchingPasswords('newpassword', 'cnewpassword') });
    };
    ChangepasswordPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    ChangepasswordPage.prototype.isValid = function (field) {
        var formField = this.changepassword.get(field);
        console.log(formField);
        return formField.valid || formField.pristine;
    };
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
    };
    ChangepasswordPage.prototype.showPassword = function () {
        console.log('showpassword');
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
            this.iconname = 'eye-off';
        }
        else {
            this.type = 'password';
            this.iconname = 'eye';
        }
    };
    ChangepasswordPage.prototype.showCPassword = function () {
        console.log('showCpassword');
        this.showCpass = !this.showCpass;
        if (this.showCpass) {
            this.Ctype = 'text';
            this.iconname1 = 'eye-off';
        }
        else {
            this.Ctype = 'password';
            this.iconname1 = 'eye';
        }
    };
    ChangepasswordPage.prototype.showCPassword1 = function () {
        console.log('showCpassword');
        this.showCpass1 = !this.showCpass1;
        if (this.showCpass1) {
            this.Ctype1 = 'text';
            this.iconname2 = 'eye-off';
        }
        else {
            this.Ctype1 = 'password';
            this.iconname2 = 'eye';
        }
    };
    ChangepasswordPage.prototype.ChangePassword = function (changeform) {
        var _this = this;
        console.log(changeform.value);
        console.log(JSON.parse(localStorage.getItem('CurrentUser')).email);
        var options = this.appsetting.header();
        var postdata = {
            email: JSON.parse(localStorage.getItem('CurrentUser')).email,
            password: changeform.value.password,
            newpassword: changeform.value.newpassword
        };
        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'changePassword', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.error == "0") {
                localStorage.removeItem('CurrentUser');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__getstart_getstart__["a" /* GetstartPage */]);
            }
            else {
                _this.common.presentAlert('Change password', response.message);
            }
        });
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-changepassword',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/changepassword/changepassword.html"*/'<!--\n  Generated template for the ChangepasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="theme-header">\n        <ion-title>change password</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="content-sec">\n        <div class="sign">\n            <form class="form-sec" [formGroup]="changepassword">\n                <ion-list>\n                    <ion-col col-12>\n                        <div class="itemouter">\n                            <ion-item>\n                                <ion-label stacked>Enter your old password</ion-label>\n                                <ion-input type="{{type}}" formControlName="password"></ion-input>\n                            </ion-item>\n                            <button type="button" color="dark" class="eyebutton" (click)="showPassword()" ion-button icon-only clear>\n                                <ion-icon name="{{iconname}}"></ion-icon>\n                            </button>\n                        </div>\n                        <p *ngIf="!isValid(\'password\')" color="danger" padding-left>Password required.</p>\n                    </ion-col>\n                    <ion-col col-12>\n                        <div class="itemouter">\n                            <ion-item>\n                                <ion-label stacked>Enter your new password</ion-label>\n                                <ion-input type="{{Ctype}}" formControlName="newpassword"></ion-input>\n                            </ion-item>\n                            <p *ngIf="!isValid(\'newpassword\')" color="danger" padding-left>New password required.</p>\n<!--                            <p *ngIf="!isValidLength(\'newpassword\')" color="danger" padding-left>Enter at least 6 char.</p>-->\n                            <button type="button" color="dark" class="eyebutton" (click)="showCPassword()" ion-button icon-only clear>\n                                <ion-icon name="{{iconname1}}"></ion-icon>\n                            </button>\n                        </div>\n                    </ion-col>\n                    <ion-col col-12>\n                        <div class="itemouter">\n                            <ion-item>\n                                <ion-label stacked>Confirm your new password</ion-label>\n                                <ion-input type="{{Ctype1}}" formControlName="cnewpassword"></ion-input>\n                            </ion-item>\n\n                            <button type="button" color="dark" class="eyebutton" (click)="showCPassword1()" ion-button icon-only clear>\n                                <ion-icon name="{{iconname2}}"></ion-icon>\n                            </button>\n                            <div class=\'form-text error\' color="danger" *ngIf="changepassword.controls.cnewpassword.touched">\n                                <div *ngIf="changepassword.hasError(\'mismatchedPasswords\')">Passwords do not match.</div>   \n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-list>\n                <div class="frgtpwd">\n                    <button type="submit" ion-button [disabled]="!changepassword.valid" (click)="ChangePassword(changepassword)">Save</button>\n                </div>\n            </form>\n        </div>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/changepassword/changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__providers_common__["a" /* Common */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__ = __webpack_require__(101);
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
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = (function () {
    function EditprofilePage(navCtrl, navParams, formBuilder, appsetting, common, http, camera, actionSheetCtrl, geolocation, nativeGeocoder, events, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.appsetting = appsetting;
        this.common = common;
        this.http = http;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.ImageToSend = "";
        this.click = false;
        // alert('edit profile hh');
    }
    EditprofilePage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.getUser();
        this.Editprofile = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            surname: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, this.emailValidator.bind(this)]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
        });
    };
    EditprofilePage.prototype.emailValidator = function (control) {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return { invalidEmail: true };
        }
    };
    EditprofilePage.prototype.isValid = function (field) {
        var formField = this.Editprofile.get(field);
        return formField.valid || formField.pristine;
    };
    EditprofilePage.prototype.getUser = function () {
        var _this = this;
        //alert('fetched');
        console.log(JSON.parse(localStorage.getItem('CurrentUser'))._id);
        var options = this.appsetting.header();
        var postdata = {
            id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/userdetailbyid', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.error == 0) {
                _this.base64Image = null;
                _this.base64Image = response.data.image;
                console.log('image');
                console.log(_this.base64Image);
                _this.events.publish('Loggedin', 'loginpage');
                _this.Editprofile = _this.formBuilder.group({
                    name: [response.data.name, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
                    surname: [response.data.surname, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
                    email: [response.data.email, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, _this.emailValidator.bind(_this)]],
                    phone: [response.data.phone, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
                });
            }
        });
    };
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
    };
    EditprofilePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getUser();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    EditprofilePage.prototype.editProfile = function (profiledata) {
        var _this = this;
        //alert(this.ImageToSend);
        // alert(this.click);
        console.log(profiledata.value);
        var options = this.appsetting.header();
        if (this.click == true) {
        }
        else {
            this.ImageToSend = "";
        }
        var postdata = {
            id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
            name: profiledata.value.name,
            surname: profiledata.value.surname,
            email: profiledata.value.email,
            phone: profiledata.value.phone,
            image: this.ImageToSend
        };
        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'users/edituser', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.error == 0) {
                    _this.events.publish('Loggedin', 'loginpage');
                    _this.common.presentAlert('Profile', response.message);
                    localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
                }
            });
        });
    };
    EditprofilePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose image',
            buttons: [
                {
                    text: 'Camera',
                    role: 'submit',
                    handler: function () {
                        console.log('submit clicked');
                        _this.chooseImage(1);
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        console.log('Gallery clicked');
                        _this.chooseImage(0);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditprofilePage.prototype.chooseImage = function (Type) {
        var _this = this;
        this.ImageToSend = "";
        var options = {
            quality: 10,
            sourceType: Type,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 800,
            targetHeight: 800,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.click = true;
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.ImageToSend = imageData;
        }, function (err) {
            // Handle error
            console.log(err);
        });
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editprofile',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/editprofile/editprofile.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n     <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class="main">\n    <div class="top-sec">\n      <div class="main-img">\n        <img [src]="base64Image">\n      </div>\n      <div class="input-sec" (click)="presentActionSheet()">\n      <div class="upld">\n        <ion-icon name="camera"></ion-icon>\n      </div>\n\n      </div>\n    </div>\n    <div class="text-sec">\n        <h3>Optatu Fast Service</h3>\n        <h6><ion-icon ios="ios-pin" md="md-pin"></ion-icon> Chandigarh</h6>\n      </div>\n  </div>\n \n\n  <div class="content-sec">\n    <div class="form-sec">\n      <form [formGroup]="Editprofile">\n        <ion-list>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12>\n\n              <ion-item>\n                <ion-input type="text" placeholder="NAME" formControlName="name"></ion-input>\n              </ion-item>\n                   <p *ngIf="!isValid(\'name\')" color="danger" padding-left>Name required.</p>\n            </ion-col>\n\n            <ion-col col-12>\n              <ion-item>\n                <ion-input type="text" placeholder="LAST NAME " formControlName="surname"></ion-input>\n              </ion-item>\n                <p *ngIf="!isValid(\'surname\')" color="danger" padding-left>Lastname required.</p>\n            </ion-col>\n            <ion-col col-12>\n               <ion-item>\n                <ion-input type="email" placeholder="EMAIL " formControlName="email" [readonly]="isReadonly"></ion-input>\n              </ion-item>\n                <p *ngIf="!isValid(\'email\')" color="danger" padding-left>Invalid email.</p>\n            </ion-col>\n\n            <ion-col col-12>\n               <ion-item>\n                <ion-input type="tel" placeholder="PHONE NUMBER" formControlName="phone" maxLength=\'15\'></ion-input>\n              </ion-item>\n                <p *ngIf="!isValid(\'phone\')" color="danger" padding-left>Phone required.</p>\n            </ion-col>\n            \n      \n          </ion-row>\n        </ion-grid>\n      </ion-list>   \n           <div class="btn-sec"><button ion-button full (click)="editProfile(Editprofile)">SAVE</button></div>\n      </form>\n   \n    </div>\n  </div>\n    \n</ion-content>\n<!--\n<ion-footer>\n <div class="btn-sec">\n    <button ion-button full (click)="home()">SAVE</button>\n    </div>\n</ion-footer>-->'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/editprofile/editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegaldisclamerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_terms__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__privacy_privacy__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_popover__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_notification__ = __webpack_require__(18);
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
 * Generated class for the LegaldisclamerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LegaldisclamerPage = (function () {
    function LegaldisclamerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LegaldisclamerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LegaldisclamerPage');
    };
    LegaldisclamerPage.prototype.terms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__terms_terms__["a" /* TermsPage */]);
    };
    LegaldisclamerPage.prototype.privacy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__privacy_privacy__["a" /* PrivacyPage */]);
    };
    LegaldisclamerPage.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__notification_notification__["a" /* NotificationPage */]);
    };
    LegaldisclamerPage.prototype.PopoverModal = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__popover_popover__["a" /* PopoverPage */]);
        popover.present();
    };
    LegaldisclamerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-legaldisclamer',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/legaldisclamer/legaldisclamer.html"*/'<!--\n  Generated template for the LegaldisclamerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="white">\n    <button ion-button menuToggle>\n      <ion-icon name="menus"></ion-icon>\n    </button>\n    <ion-title> <span class="maintitle"> Legal Disclamer</span></ion-title>\n    <ion-buttons end (click)="notification()">\n      <button ion-button icon-only>\n        <ion-icon name="notifications-outline"><span class="noti_counter">0</span></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="PopoverModal()">\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n  <ion-item>\n    <ion-label (click)="terms()">TERMS & CONDITIONS</ion-label>\n    \n  </ion-item>\n\n  <ion-item (click)="privacy()">\n    <ion-label>PRIVACY</ion-label>\n    \n  </ion-item>\n\n\n\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/legaldisclamer/legaldisclamer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], LegaldisclamerPage);
    return LegaldisclamerPage;
}());

//# sourceMappingURL=legaldisclamer.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
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
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsPage = (function () {
    function TermsPage(navCtrl, navParams, http, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TermsPage');
        var options = this.appsetting.header();
        var postdata = {
            title: 'Terms & conditions',
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'staticpage/staticpagebytitle', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            _this.terms = response.staticpage[0];
        });
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/terms/terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Terms and conditions</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="main">\n        <h3>{{terms?.title}}</h3>\n        <p>{{terms?.description}}</p>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
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
 * Generated class for the PrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivacyPage = (function () {
    function PrivacyPage(navCtrl, navParams, http, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
    }
    PrivacyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PrivacyPage');
        var options = this.appsetting.header();
        var postdata = {
            title: 'Privacy',
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'staticpage/staticpagebytitle', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            _this.privacy = response.staticpage[0];
        });
    };
    PrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-privacy',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/privacy/privacy.html"*/'<!--\n  Generated template for the PrivacyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>privacy</ion-title>\n  </ion-navbar>\n\n</ion-header>\n  <ion-content padding>\n	<div class="main">\n		<h3 style="text-transform: uppercase;">{{privacy?.title}}</h3>\n		<p>{{privacy?.description}}</p>\n	</div>\n</ion-content>\n\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/privacy/privacy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */]])
    ], PrivacyPage);
    return PrivacyPage;
}());

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
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
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = (function () {
    function HelpPage(navCtrl, navParams, http, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad HelpPage');
        var options = this.appsetting.header();
        var postdata = {
            title: 'Help',
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'staticpage/staticpagebytitle', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            _this.help = response.staticpage[0];
        });
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-help',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/help/help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<ion-navbar color="white">\n    <button ion-button menuToggle>\n      <ion-icon name="menus"></ion-icon>\n    </button>\n    <ion-title>help</ion-title>\n     </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="main">\n		<h3 style=\'text-transform: uppercase;\'>{{help?.title}}</h3>\n		<p>{{help?.description}}</p>\n	</div>\n</ion-content>\n\n\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/help/help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentlyviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the RecentlyviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecentlyviewPage = (function () {
    function RecentlyviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RecentlyviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecentlyviewPage');
    };
    RecentlyviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recentlyview',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/recentlyview/recentlyview.html"*/'<!--\n  Generated template for the RecentlyviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n     <ion-toolbar color="white">\n    <button ion-button menuToggle>\n      <ion-icon name="menus"></ion-icon>\n    </button>\n    <ion-title>RECENTLY VIEWED</ion-title>\n     </ion-toolbar>\n \n\n</ion-header>\n\n\n<ion-content>\n<div class="list_item">\n<ion-list no-lines>\n  <ion-item>\n    <div class="thumb"  item-start>\n       <img src="assets/img/r1.jpg">\n      \n    </div>\n\n    <h2>Barbeque Nation </h2>\n    <h4 class="categories_sub">RESTAURANT</h4>\n    <p class="type">Type : \n      <button ion-button small color="yellow" class="btn_new">Sushi</button> \n      <button ion-button small  class="btn_new">Big</button>\n      <button ion-button small color="yellow" class="btn_new">Fish</button>\n    </p>\n     <p>End Validity : 20:00 PM</p>\n    <p>Distance : 350m</p>\n   \n     <div class="pricer">\n    <button ion-button outline color="black" class="btn_new1">-20% PRICE RESERVATION\n    </button>\n    </div>\n  </ion-item>\n\n\n  <ion-item>\n    <div class="thumb"  item-start>\n       <img src="assets/img/barbeach_img.png">\n      \n    </div>\n\n    <h2>BAR BEACH </h2>\n    <h4 class="categories_sub">BEACH</h4>\n    <p class="type">Type : \n      <button ion-button small color="yellow" class="btn_new">Sushi</button> \n      <button ion-button small  class="btn_new">Bio</button>\n      <button ion-button small  class="btn_new">Fish</button>\n    </p>\n     <p>End Validity : 20:00 PM</p>\n    <p>Distance : 350m</p>\n\n     <div class="pricer">\n    <button ion-button outline color="black" class="btn_new1">20<span class="euro1"><ion-icon><img src="assets/img/euro.png"></ion-icon>PRICE RESERVATION</span>\n    </button>\n    </div>\n  </ion-item>\n\n\n <ion-item>\n    <div class="thumb"  item-start>\n       <img src="assets/img/hotel_img.png">\n    </div>\n\n    <h2>HILTON PLACE </h2>\n    <h4 class="categories_sub">HOTEL</h4>\n    <p class="type">Type : \n      <button ion-button small color="yellow" class="btn_new">Sushi</button> \n      <button ion-button small  class="btn_new">Bio</button>\n      <button ion-button small  class="btn_new">Fish</button>\n    </p>\n     <p>End Validity : 20:00 PM</p>\n    <p>Distance : 350m</p>\n\n     <div class="pricer">\n    <button ion-button outline color="black" class="btn_new1">FREE RESERVATION\n    </button>\n    </div>\n  </ion-item>\n\n\n\n\n  <ion-item>\n    <div class="thumb"  item-start>\n       <img src="assets/img/parking.png">\n    </div>\n\n    <h2>TOP TOP </h2>\n    <h4 class="categories_sub">PARKING </h4>\n    <p class="type">Type : \n      <button ion-button small color="yellow" class="btn_new">Sushi</button> \n      <button ion-button small  class="btn_new">Bio</button>\n      <button ion-button small  class="btn_new">Fish</button>\n    </p>\n     <p>End Validity : 20:00 PM</p>\n    <p>Distance : 350m</p>\n\n     <div class="pricer">\n    <button ion-button outline color="black" class="btn_new1"> -10% DISCOUNT ON PAYMENT</button>\n    </div>\n  </ion-item>\n\n\n\n</ion-list>\n<!--<div class="addbtn">\n   <button ion-button full (click)="FilterpresentModal()"><h1 class="product_title"  >Add Filtter</h1></button>\n</div>-->\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/recentlyview/recentlyview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], RecentlyviewPage);
    return RecentlyviewPage;
}());

//# sourceMappingURL=recentlyview.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editprofile_editprofile__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__changepassword_changepassword__ = __webpack_require__(141);
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
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.edit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__editprofile_editprofile__["a" /* EditprofilePage */]);
    };
    SettingPage.prototype.changepassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__changepassword_changepassword__["a" /* ChangepasswordPage */]);
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setting',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/setting/setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n     <ion-toolbar color="white">\n    <button ion-button menuToggle>\n      <ion-icon name="menus"></ion-icon>\n    </button>\n    <ion-title>SETTINGS</ion-title>\n     </ion-toolbar>\n \n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n  <ion-item>\n    <ion-label>NOTIFICATION</ion-label>\n    <ion-toggle color="secondary" [(ngModel)]="pepperoni"></ion-toggle>\n  </ion-item>\n\n  <ion-item (click)="edit()">\n    <ion-label>CHANGE PROFILE DETAILS</ion-label>\n    <ion-avatar item-end>\n      <img src="assets/img/user.jpg">\n    </ion-avatar>\n  </ion-item>\n  <ion-item (click)="changepassword()">\n    <ion-label>CHANGE PASSWORD</ion-label>\n    <ion-avatar item-end>\n      <img src="assets/img/change_password.png">\n    </ion-avatar>\n  </ion-item>\n\n\n\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Common; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*********Native plugins *************/

/*
  Generated class for the Appsetting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Common = (function () {
    function Common(http, alertCtrl, geolocation) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        console.log('Hello Common Provider');
        this.currentlocation();
    }
    Common.prototype.presentAlert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
        });
        setTimeout(function () {
            alert.dismiss();
        }, 3000);
        return alert.present();
    };
    Common.prototype.currentlocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp);
            _this.cords = resp.coords;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    Common.prototype.distance = function (lat1, lon1, lat2, lon2, unit) {
        console.log(lat1);
        console.log(lon1);
        console.log(lat2);
        console.log(lon2);
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344;
        }
        // if (unit == "N") {dist = dist * 0.8684}
        console.log(dist);
        return Math.round(dist);
    };
    Common = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], Common);
    return Common;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservationstatus_reservationstatus__ = __webpack_require__(127);
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
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage.prototype.reserstatus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reservationstatus_reservationstatus__["a" /* ReservationstatusPage */]);
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notification',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="white">\n    <ion-title>notification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<ion-list class="notification" no-lines>\n  <ion-item style="border-bottom: 2px solid rgb(200, 199, 204);" (click)="reserstatus()">\n    <h2>start validity reservayion</h2>\n    <button ion-button outline color="lightgery">barbeque nation</button>\n  </ion-item>\n  <ion-item style="border-bottom: 2px solid rgb(200, 199, 204);" (click)="reserstatus()">\n    <h2>start validity reservayion</h2>\n    <button ion-button outline color="lightgery">barbeque nation</button>\n  </ion-item>\n  <ion-item style="border-bottom: 2px solid rgb(200, 199, 204);" (click)="reserstatus()">\n    <h2>start validity reservayion</h2>\n    <button ion-button outline color="lightgery">barbeque nation</button>\n  </ion-item>\n  <ion-item style="border-bottom: 2px solid rgb(200, 199, 204);" (click)="reserstatus()">\n    <h2>start validity reservayion</h2>\n    <button ion-button outline color="lightgery">barbeque nation</button>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = (function () {
    function PopoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-popover',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/popover/popover.html"*/'<!--\n  Generated template for the PopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n\n  <ion-navbar>\n    <ion-title>popover</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-item-group>\n    <ion-item>Language <ion-icon ios="ios-checkmark" md="md-checkmark" style="text-align:right"></ion-icon></ion-item>\n    <ion-item>Currency <ion-icon ios="ios-checkmark" md="md-checkmark"></ion-icon></ion-item>\n  </ion-item-group>\n</ion-content>\n\n\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/popover/popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addfilter/addfilter.module": [
		472,
		33
	],
	"../pages/barbequenation/barbequenation.module": [
		473,
		32
	],
	"../pages/changepassword/changepassword.module": [
		474,
		31
	],
	"../pages/createaccunt/createaccunt.module": [
		476,
		30
	],
	"../pages/editprofile/editprofile.module": [
		475,
		29
	],
	"../pages/forgot/forgot.module": [
		477,
		28
	],
	"../pages/getstart/getstart.module": [
		478,
		27
	],
	"../pages/help/help.module": [
		482,
		26
	],
	"../pages/hotelfilter/hotelfilter.module": [
		479,
		25
	],
	"../pages/hotels/hotels.module": [
		480,
		24
	],
	"../pages/legaldisclamer/legaldisclamer.module": [
		481,
		23
	],
	"../pages/locationmap/locationmap.module": [
		483,
		22
	],
	"../pages/maplistfull/maplistfull.module": [
		484,
		21
	],
	"../pages/myreservation/myreservation.module": [
		486,
		20
	],
	"../pages/notification/notification.module": [
		485,
		19
	],
	"../pages/optatumanager/optatumanager.module": [
		489,
		18
	],
	"../pages/payment/payment.module": [
		488,
		17
	],
	"../pages/popover/popover.module": [
		487,
		16
	],
	"../pages/popoverTime/popoverTime.module": [
		490,
		0
	],
	"../pages/privacy/privacy.module": [
		491,
		15
	],
	"../pages/recentlyview/recentlyview.module": [
		492,
		14
	],
	"../pages/reservationdetail/reservationdetail.module": [
		496,
		13
	],
	"../pages/reservationstatus/reservationstatus.module": [
		493,
		12
	],
	"../pages/reservationtype/reservationtype.module": [
		494,
		11
	],
	"../pages/restaurant2/restaurant2.module": [
		495,
		10
	],
	"../pages/restaurants/restaurants.module": [
		500,
		9
	],
	"../pages/restaurantview/restaurantview.module": [
		499,
		8
	],
	"../pages/setting/setting.module": [
		497,
		7
	],
	"../pages/shareapp/shareapp.module": [
		498,
		6
	],
	"../pages/signin/signin.module": [
		502,
		5
	],
	"../pages/sortdistance/sortdistance.module": [
		503,
		4
	],
	"../pages/terms/terms.module": [
		501,
		3
	],
	"../pages/totalnation2/totalnation2.module": [
		504,
		2
	],
	"../pages/tryagain/tryagain.module": [
		505,
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
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareappPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the ShareappPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShareappPage = (function () {
    function ShareappPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShareappPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShareappPage');
    };
    ShareappPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shareapp',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/shareapp/shareapp.html"*/'<!--\n  Generated template for the ShareappPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>shareapp</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/shareapp/shareapp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ShareappPage);
    return ShareappPage;
}());

//# sourceMappingURL=shareapp.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(402);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hotels_hotels__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_popover__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__restaurants_restaurants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_geocoder__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*********Native plugins *************/


/*******Google map autocomplete*****/

var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, viewCtrl, popoverCtrl, http, appsetting, events, common, geolocation, nativeGeocoder, zone, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.popoverCtrl = popoverCtrl;
        this.http = http;
        this.appsetting = appsetting;
        this.events = events;
        this.common = common;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.service = new google.maps.places.AutocompleteService();
        // alert('asdkfajsdfhj');
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    HomePage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.tryagain();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(new Date());
        var d = new Date();
        this.date = __WEBPACK_IMPORTED_MODULE_9_moment__(d).format('llll');
        console.log(this.date);
        if (localStorage.getItem('CurrentUser')) {
            this.events.publish('Loggedin', 'loginpage');
        }
        else {
            this.events.publish('skip', 'skip');
        }
        console.log('ionViewDidLoad HomePage');
        var options = this.appsetting.header();
        this.http.get(this.appsetting.url + 'categorylist', options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.error == 0) {
                _this.homedata = response.data.reverse();
                console.log(_this.homedata);
            }
        });
        this.Getlocation();
    };
    HomePage.prototype.Getlocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
                .then(function (result) {
                console.log('reverse geocoding');
                console.log(JSON.stringify(result));
                //this.autocomplete.query = result.subLocality + ',' + result.locality + ',' + result.administrativeArea + ',' + result.postalCode + ',' + result.countryCode;
            }).catch(function (error) { console.log(error); });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    HomePage.prototype.updateSearch = function () {
        console.log('update');
        console.log(this.autocomplete.query);
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({ input: this.autocomplete.query }, function (predictions, status) {
            me.autocompleteItems = [];
            console.log('here');
            me.zone.run(function () {
                predictions.forEach(function (prediction) {
                    //console.log(prediction);
                    me.autocompleteItems.push(prediction.description);
                });
                console.log(me.autocompleteItems);
            });
        });
    };
    HomePage.prototype.chooseItem = function (item) {
        console.log(item);
        this.autocomplete.query = item;
        this.autocompleteItems = [];
    };
    HomePage.prototype.hotels = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hotels_hotels__["a" /* HotelsPage */]);
    };
    HomePage.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */]);
    };
    HomePage.prototype.PopoverModal = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__popover_popover__["a" /* PopoverPage */]);
        popover.present();
    };
    HomePage.prototype.restaurants = function (catid, catname) {
        console.log(catid);
        //address: this.autocomplete.query
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__restaurants_restaurants__["a" /* RestaurantsPage */], { address: this.autocomplete.query, categoryid: catid, categoryName: catname });
    };
    HomePage.prototype.tryagain = function () {
        var _this = this;
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            console.log('you are offline');
            var alert_1 = this.alertCtrl.create({
                message: '<img src="assets/img/network.png">',
                buttons: [{
                        text: 'Try again',
                        role: 'cancel',
                        handler: function () {
                            console.log('try again clicked');
                            _this.tryagain();
                        }
                    }]
            });
            alert_1.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar color="white">\n    <button ion-button menuToggle>\n      <ion-icon name="menus"></ion-icon>\n    </button>\n    <ion-title> <span class="maintitle"> Reserve now </span> <span class="subtitle">{{date}}</span></ion-title>\n    <ion-buttons end (click)="notification()">\n      <button ion-button icon-only>\n        <ion-icon name="notifications-outline"><span class="noti_counter">0</span></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="PopoverModal()">\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n<!--  <div class="main">\n     \n<ion-searchbar placeholder="WHERE (CITY, ADDRESS) " [(ngModel)]="autocomplete.query" class="customsearch" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel()" style="position:relative" (input)="updateSearch()" >\n    </ion-searchbar>\n    <ion-icon><img src="assets/img/interactive_map.png"></ion-icon>\n     <ion-list *ngIf="autocompleteItems != \'\'">\n    <ion-item *ngFor="let item of autocompleteItems" tappable   (click)="chooseItem(item)">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n  </div>-->\n<div class="search-sec">\n<div class="outersearch">\n    <ion-searchbar placeholder="WHERE (CITY, ADDRESS) " class="abcd" [(ngModel)]="autocomplete.query" [showCancelButton]="shouldShowCancel" (input)="updateSearch()">\n    </ion-searchbar>\n<!--    <ion-searchbar placeholder="WHERE (CITY, ADDRESS) " [(ngModel)]="autocomplete.query" class="abcd" [showCancelButton]="shouldShowCancel" (input)="updateSearch()">\n    </ion-searchbar>-->\n    <ion-icon class="loc-img"><img src="assets/img/interactive_map.png"></ion-icon>\n</div>\n<!--     <ion-list *ngIf="autocompleteItems != \'\'" class="suggestion">\n         <ion-item *ngFor="let item of autocompleteItems" tappable   (click)="chooseItem(item)">{{ item }}\n    </ion-item>\n  </ion-list>-->\n</div>\n</ion-header>\n\n<ion-content padding>\n<ion-list class="cat_list" no-padding no-lines>\n<!--     <ion-item (click)="restaurants(home._id,home.category)" *ngFor="let home of homedata" style="background: url({{home.image}}) no-repeat top center">\n    <div class="categories_box hotal">\n      <img width="45px" src="{{home.icon}}">\n      <h1>{{home.category}}</h1>\n    </div>\n  </ion-item>-->\n    \n    \n  <ion-item (click)="restaurants(\'5a61bc4adf6f1101acf32337\',\'Restaurants\')">\n    <div class="categories_box hotal">\n      <img width="45px" src="assets/img/icon1.png">\n      <h1>Hotels</h1>\n    </div>\n  </ion-item>\n  <ion-item (click)="restaurants(\'5a61bc4adf6f1101acf32337\',\'Restaurants\')">\n    <div class="categories_box restaurant">\n      <img width="45px" src="assets/img/icon2.png">\n      <h1>restaurants</h1>\n    </div>\n  </ion-item>\n  <ion-item (click)="restaurants(\'5a61bc4adf6f1101acf32337\',\'Restaurants\')">\n    <div class="categories_box beaches">\n      <img width="45px" src="assets/img/icon3.png">\n      <h1>beaches</h1>\n    </div>\n  </ion-item>\n  <ion-item (click)="restaurants(\'5a61bc4adf6f1101acf32337\',\'Restaurants\')">\n    <div class="categories_box parking">\n      <img width="45px" src="assets/img/icon4.png">\n      <h1>parkings</h1>\n    </div>\n  </ion-item>\n  <ion-item (click)="restaurants(\'5a61bc4adf6f1101acf32337\',\'Restaurants\')">\n    <div class="categories_box entertainment">\n      <img width="45px" src="assets/img/icon5.png">\n      <h1>entertainments</h1>\n    </div>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_8__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_forgot__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__optatumanager_optatumanager__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__createaccunt_createaccunt__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_unique_device_id__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__ = __webpack_require__(61);
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
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = (function () {
    function SigninPage(platform, navCtrl, navParams, alertCtrl, formBuilder, appsetting, http, uniqueDeviceID, events, common, toastCtrl, loadingCtrl, network) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.appsetting = appsetting;
        this.http = http;
        this.uniqueDeviceID = uniqueDeviceID;
        this.events = events;
        this.common = common;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.type = 'password';
        this.showPass = false;
        this.iconname = 'eye';
        // alert('signin ');
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SigninPage');
        this.platform.ready().then(function () {
            var lastTimeBackPress = 0;
            var timePeriodToExit = 2000;
            _this.platform.registerBackButtonAction(function () {
                // get current active page
                var view = _this.navCtrl.getActive();
                if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                    _this.platform.exitApp(); //Exit from app
                }
                else {
                    // alert('Press back again to exit App?');
                    var toast = _this.toastCtrl.create({
                        message: 'Press back again to exit from app?',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    lastTimeBackPress = new Date().getTime();
                }
            });
        });
    };
    SigninPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.SigninForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, this.emailValidator.bind(this)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
        });
        // this.tryagain();
    };
    SigninPage.prototype.emailValidator = function (control) {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return { invalidEmail: true };
        }
    };
    SigninPage.prototype.isValid = function (field) {
        var formField = this.SigninForm.get(field);
        return formField.valid || formField.pristine;
    };
    SigninPage.prototype.showPassword = function () {
        console.log('showpassword');
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
            this.iconname = 'eye-off';
        }
        else {
            this.type = 'password';
            this.iconname = 'eye';
        }
    };
    SigninPage.prototype.Signin = function (signindata) {
        var _this = this;
        console.log(signindata.value);
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            //      this.uniqueDeviceID.get().then((uuid: any) => {
            //  console.log(uuid)
            var options_1 = this.appsetting.header();
            var postdata = {
                email: signindata.value.email,
                password: signindata.value.password,
                // deviceid:uuid,
                role: 'user'
            };
            var serialized = this.appsetting.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.url + 'users/login', serialized, options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    if (response.success == true) {
                        localStorage.setItem('CurrentUser', JSON.stringify(response.userinfo));
                        _this.events.publish('Loggedin', 'loginpage');
                        _this.appsetting.userprofile = response.userinfo;
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                    else {
                        _this.common.presentAlert('Login', response.message);
                    }
                });
            });
            // }).catch((error: any) => console.log(error));
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    SigninPage.prototype.home = function () {
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            this.events.publish('skip', 'skip');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    SigninPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgot_forgot__["a" /* ForgotPage */]);
    };
    SigninPage.prototype.presentConfirm = function () {
        var alert = this.alertCtrl.create({
            title: 'ABOUT OPTATU MANAGER',
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            cssClass: 'popuptxt',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    SigninPage.prototype.optatumanager = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__optatumanager_optatumanager__["a" /* OptatumanagerPage */]);
    };
    SigninPage.prototype.createaccunt = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__createaccunt_createaccunt__["a" /* CreateaccuntPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/signin/signin.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n\n  <ion-navbar>\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="image2">\n  <div class="skip">\n<button ion-button clear (click)="home()">SKIP</button>\n  </div>\n\n      <div class="main">\n <div class="logo2">\n  <img src="assets/img/logo2.png">\n </div>\n </div>\n  <div class="text-sec">\n  <h3>WELCOME TO OPTATU</h3>\n </div>\n\n\n <div class="content-sec">\n  <div class="sign">\n      \n   <form [formGroup]="SigninForm">\n    <ion-list>\n        <ion-col col-12 style="position: initial;">\n      <ion-item>\n        <ion-input type="email" name="username" placeholder="EMAIL ADDRESS" formControlName="email" autocapitalize="off"></ion-input>\n      </ion-item>\n        <p *ngIf="!isValid(\'email\')" style="color: #ff0000;" padding-left class="pwdreq">Invalid email.</p>\n        </ion-col>\n        <ion-col col-12 style="position: initial;">\n <div class="itemouter">\n      <ion-item>\n        <ion-input type="{{type}}" name="password" placeholder="PASSWORD" formControlName="password"></ion-input>\n      </ion-item>\n     <p *ngIf="!isValid(\'password\')"  padding-left class="pwdreq" style="color: #ff0000;">Password required.</p>\n      <button type="button" color="dark" class="eyebutton" (click)="showPassword()" ion-button icon-only clear>\n         <ion-icon name="{{iconname}}" ></ion-icon>\n        </button>\n           </div>\n        </ion-col>\n    </ion-list>\n\n    <div class="forgtpwd">\n   <h1 (click)="forgot()">FORGOT PASSWORD ?</h1>\n</div>\n       \n        <div class="btn-sec">\n   <button ion-button full class="custom_btn" type="submit" color="dark" (click)="Signin(SigninForm)"  [disabled]="!SigninForm.valid">SIGN IN</button>\n   </div>\n      <div class="btn-sec line">\n       <h2><img src="assets/img/circle-outline.png"></h2>\n   </div>\n      <div class="btn-sec ">\n   <button ion-button full class="custom_btn whitetext" type="submit" color="yellow"  (click)="createaccunt()">CREATE ACCOUNT</button>\n   </div>\n   </form>\n </div>\n\n \n   <div class="registerlast">\n   <h3 class="register"><span (click)="presentConfirm()"><u>REGISTER YOUR BUSINESS</u></span></h3>\n </div>\n\n       <div class="btn-sec">\n   <button ion-button full class="custom_btn" type="submit" color="dark"  (click)="optatumanager()" >OPTATU MANAGER</button>\n   </div>\n\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_8__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__["a" /* Network */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_getstart_getstart__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_hotels_hotels__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_hotelfilter_hotelfilter__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notification_notification__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_popover_popover__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_locationmap_locationmap__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_reservationtype_reservationtype__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_reservationstatus_reservationstatus__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signin_signin__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_forgot_forgot__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_optatumanager_optatumanager__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_restaurants_restaurants__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_createaccunt_createaccunt__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_restaurant2_restaurant2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_maplist_maplist__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_filter_filter__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_filter1_filter1__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_barbequenation_barbequenation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_restaurantview_restaurantview__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_maplistfull_maplistfull__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_myreservation_myreservation__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_recentlyview_recentlyview__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_setting_setting__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_legaldisclamer_legaldisclamer__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_help_help__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_shareapp_shareapp__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_tryagain_tryagain__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_sortdistance_sortdistance__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_editprofile_editprofile__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_terms_terms__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_privacy_privacy__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_totalnation2_totalnation2__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_changepassword_changepassword__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_addfilter_addfilter__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_payment_payment__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_calendar_calendar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ng2_password_strength_bar__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ng2_password_strength_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_45_ng2_password_strength_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_ion2_calendar__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_46_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_angular2_tag_input__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_angular2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_47_angular2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_reservationdetail_reservationdetail__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_status_bar__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_splash_screen__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_camera__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_unique_device_id__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_geolocation__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_native_geocoder__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_network__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ionic_native_social_sharing__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_stripe__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_paypal__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_sms__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ionic_native_Keyboard__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































//import { TagInputModule } from 'ng2-tag-input';
/********* Native plugins **********/












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_getstart_getstart__["a" /* GetstartPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_hotels_hotels__["a" /* HotelsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_hotelfilter_hotelfilter__["a" /* HotelfilterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_locationmap_locationmap__["a" /* LocationmapPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_reservationtype_reservationtype__["a" /* ReservationtypePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_reservationstatus_reservationstatus__["a" /* ReservationstatusPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_optatumanager_optatumanager__["a" /* OptatumanagerPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_restaurants_restaurants__["a" /* RestaurantsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_createaccunt_createaccunt__["a" /* CreateaccuntPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_restaurant2_restaurant2__["a" /* Restaurant2Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_maplist_maplist__["a" /* MaplistPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_barbequenation_barbequenation__["a" /* BarbequenationPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_restaurantview_restaurantview__["a" /* RestaurantviewPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_maplistfull_maplistfull__["a" /* MaplistfullPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_myreservation_myreservation__["a" /* MyreservationPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_recentlyview_recentlyview__["a" /* RecentlyviewPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_legaldisclamer_legaldisclamer__["a" /* LegaldisclamerPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_shareapp_shareapp__["a" /* ShareappPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_tryagain_tryagain__["a" /* TryagainPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_sortdistance_sortdistance__["a" /* SortdistancePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_totalnation2_totalnation2__["a" /* Totalnation2Page */],
                __WEBPACK_IMPORTED_MODULE_40__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_addfilter_addfilter__["a" /* AddfilterPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_reservationdetail_reservationdetail__["a" /* ReservationdetailPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_filter1_filter1__["a" /* Filter1Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_44__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_45_ng2_password_strength_bar__["PasswordStrengthBarModule"],
                __WEBPACK_IMPORTED_MODULE_46_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_47_angular2_tag_input__["RlTagInputModule"],
                //TagInputModule,
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addfilter/addfilter.module#AddfilterPageModule', name: 'AddfilterPage', segment: 'addfilter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/barbequenation/barbequenation.module#BarbequenationPageModule', name: 'BarbequenationPage', segment: 'barbequenation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createaccunt/createaccunt.module#CreateaccuntPageModule', name: 'CreateaccuntPage', segment: 'createaccunt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/getstart/getstart.module#GetstartPageModule', name: 'GetstartPage', segment: 'getstart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotelfilter/hotelfilter.module#HotelfilterPageModule', name: 'HotelfilterPage', segment: 'hotelfilter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotels/hotels.module#HotelsPageModule', name: 'HotelsPage', segment: 'hotels', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/legaldisclamer/legaldisclamer.module#LegaldisclamerPageModule', name: 'LegaldisclamerPage', segment: 'legaldisclamer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/locationmap/locationmap.module#LocationmapPageModule', name: 'LocationmapPage', segment: 'locationmap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maplistfull/maplistfull.module#MaplistfullPageModule', name: 'MaplistfullPage', segment: 'maplistfull', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myreservation/myreservation.module#MyreservationPageModule', name: 'MyreservationPage', segment: 'myreservation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/optatumanager/optatumanager.module#OptatumanagerPageModule', name: 'OptatumanagerPage', segment: 'optatumanager', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popoverTime/popoverTime.module#PopoverTimePageModule', name: 'PopoverTimePage', segment: 'popoverTime', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule', name: 'PrivacyPage', segment: 'privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recentlyview/recentlyview.module#RecentlyviewPageModule', name: 'RecentlyviewPage', segment: 'recentlyview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservationstatus/reservationstatus.module#ReservationstatusPageModule', name: 'ReservationstatusPage', segment: 'reservationstatus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservationtype/reservationtype.module#ReservationtypePageModule', name: 'ReservationtypePage', segment: 'reservationtype', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurant2/restaurant2.module#Restaurant2PageModule', name: 'Restaurant2Page', segment: 'restaurant2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservationdetail/reservationdetail.module#ReservationdetailPageModule', name: 'ReservationdetailPage', segment: 'reservationdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shareapp/shareapp.module#ShareappPageModule', name: 'ShareappPage', segment: 'shareapp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurantview/restaurantview.module#RestaurantviewPageModule', name: 'RestaurantviewPage', segment: 'restaurantview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurants/restaurants.module#RestaurantsPageModule', name: 'RestaurantsPage', segment: 'restaurants', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sortdistance/sortdistance.module#SortdistancePageModule', name: 'SortdistancePage', segment: 'sortdistance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/totalnation2/totalnation2.module#Totalnation2PageModule', name: 'Totalnation2Page', segment: 'totalnation2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tryagain/tryagain.module#TryagainPageModule', name: 'TryagainPage', segment: 'tryagain', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_getstart_getstart__["a" /* GetstartPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_hotels_hotels__["a" /* HotelsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_hotelfilter_hotelfilter__["a" /* HotelfilterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_locationmap_locationmap__["a" /* LocationmapPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_reservationtype_reservationtype__["a" /* ReservationtypePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_reservationstatus_reservationstatus__["a" /* ReservationstatusPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_optatumanager_optatumanager__["a" /* OptatumanagerPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_restaurants_restaurants__["a" /* RestaurantsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_createaccunt_createaccunt__["a" /* CreateaccuntPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_restaurant2_restaurant2__["a" /* Restaurant2Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_maplist_maplist__["a" /* MaplistPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_barbequenation_barbequenation__["a" /* BarbequenationPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_restaurantview_restaurantview__["a" /* RestaurantviewPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_maplistfull_maplistfull__["a" /* MaplistfullPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_myreservation_myreservation__["a" /* MyreservationPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_recentlyview_recentlyview__["a" /* RecentlyviewPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_legaldisclamer_legaldisclamer__["a" /* LegaldisclamerPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_shareapp_shareapp__["a" /* ShareappPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_tryagain_tryagain__["a" /* TryagainPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_sortdistance_sortdistance__["a" /* SortdistancePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_totalnation2_totalnation2__["a" /* Totalnation2Page */],
                __WEBPACK_IMPORTED_MODULE_40__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_addfilter_addfilter__["a" /* AddfilterPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_reservationdetail_reservationdetail__["a" /* ReservationdetailPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_filter1_filter1__["a" /* Filter1Page */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
                __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_56__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_57__ionic_native_stripe__["a" /* Stripe */],
                __WEBPACK_IMPORTED_MODULE_58__ionic_native_paypal__["a" /* PayPal */],
                __WEBPACK_IMPORTED_MODULE_59__ionic_native_sms__["a" /* SMS */],
                __WEBPACK_IMPORTED_MODULE_60__ionic_native_Keyboard__["a" /* Keyboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 205,
	"./af.js": 205,
	"./ar": 206,
	"./ar-dz": 207,
	"./ar-dz.js": 207,
	"./ar-kw": 208,
	"./ar-kw.js": 208,
	"./ar-ly": 209,
	"./ar-ly.js": 209,
	"./ar-ma": 210,
	"./ar-ma.js": 210,
	"./ar-sa": 211,
	"./ar-sa.js": 211,
	"./ar-tn": 212,
	"./ar-tn.js": 212,
	"./ar.js": 206,
	"./az": 213,
	"./az.js": 213,
	"./be": 214,
	"./be.js": 214,
	"./bg": 215,
	"./bg.js": 215,
	"./bm": 216,
	"./bm.js": 216,
	"./bn": 217,
	"./bn.js": 217,
	"./bo": 218,
	"./bo.js": 218,
	"./br": 219,
	"./br.js": 219,
	"./bs": 220,
	"./bs.js": 220,
	"./ca": 221,
	"./ca.js": 221,
	"./cs": 222,
	"./cs.js": 222,
	"./cv": 223,
	"./cv.js": 223,
	"./cy": 224,
	"./cy.js": 224,
	"./da": 225,
	"./da.js": 225,
	"./de": 226,
	"./de-at": 227,
	"./de-at.js": 227,
	"./de-ch": 228,
	"./de-ch.js": 228,
	"./de.js": 226,
	"./dv": 229,
	"./dv.js": 229,
	"./el": 230,
	"./el.js": 230,
	"./en-au": 231,
	"./en-au.js": 231,
	"./en-ca": 232,
	"./en-ca.js": 232,
	"./en-gb": 233,
	"./en-gb.js": 233,
	"./en-ie": 234,
	"./en-ie.js": 234,
	"./en-nz": 235,
	"./en-nz.js": 235,
	"./eo": 236,
	"./eo.js": 236,
	"./es": 237,
	"./es-do": 238,
	"./es-do.js": 238,
	"./es-us": 239,
	"./es-us.js": 239,
	"./es.js": 237,
	"./et": 240,
	"./et.js": 240,
	"./eu": 241,
	"./eu.js": 241,
	"./fa": 242,
	"./fa.js": 242,
	"./fi": 243,
	"./fi.js": 243,
	"./fo": 244,
	"./fo.js": 244,
	"./fr": 245,
	"./fr-ca": 246,
	"./fr-ca.js": 246,
	"./fr-ch": 247,
	"./fr-ch.js": 247,
	"./fr.js": 245,
	"./fy": 248,
	"./fy.js": 248,
	"./gd": 249,
	"./gd.js": 249,
	"./gl": 250,
	"./gl.js": 250,
	"./gom-latn": 251,
	"./gom-latn.js": 251,
	"./gu": 252,
	"./gu.js": 252,
	"./he": 253,
	"./he.js": 253,
	"./hi": 254,
	"./hi.js": 254,
	"./hr": 255,
	"./hr.js": 255,
	"./hu": 256,
	"./hu.js": 256,
	"./hy-am": 257,
	"./hy-am.js": 257,
	"./id": 258,
	"./id.js": 258,
	"./is": 259,
	"./is.js": 259,
	"./it": 260,
	"./it.js": 260,
	"./ja": 261,
	"./ja.js": 261,
	"./jv": 262,
	"./jv.js": 262,
	"./ka": 263,
	"./ka.js": 263,
	"./kk": 264,
	"./kk.js": 264,
	"./km": 265,
	"./km.js": 265,
	"./kn": 266,
	"./kn.js": 266,
	"./ko": 267,
	"./ko.js": 267,
	"./ky": 268,
	"./ky.js": 268,
	"./lb": 269,
	"./lb.js": 269,
	"./lo": 270,
	"./lo.js": 270,
	"./lt": 271,
	"./lt.js": 271,
	"./lv": 272,
	"./lv.js": 272,
	"./me": 273,
	"./me.js": 273,
	"./mi": 274,
	"./mi.js": 274,
	"./mk": 275,
	"./mk.js": 275,
	"./ml": 276,
	"./ml.js": 276,
	"./mr": 277,
	"./mr.js": 277,
	"./ms": 278,
	"./ms-my": 279,
	"./ms-my.js": 279,
	"./ms.js": 278,
	"./mt": 280,
	"./mt.js": 280,
	"./my": 281,
	"./my.js": 281,
	"./nb": 282,
	"./nb.js": 282,
	"./ne": 283,
	"./ne.js": 283,
	"./nl": 284,
	"./nl-be": 285,
	"./nl-be.js": 285,
	"./nl.js": 284,
	"./nn": 286,
	"./nn.js": 286,
	"./pa-in": 287,
	"./pa-in.js": 287,
	"./pl": 288,
	"./pl.js": 288,
	"./pt": 289,
	"./pt-br": 290,
	"./pt-br.js": 290,
	"./pt.js": 289,
	"./ro": 291,
	"./ro.js": 291,
	"./ru": 292,
	"./ru.js": 292,
	"./sd": 293,
	"./sd.js": 293,
	"./se": 294,
	"./se.js": 294,
	"./si": 295,
	"./si.js": 295,
	"./sk": 296,
	"./sk.js": 296,
	"./sl": 297,
	"./sl.js": 297,
	"./sq": 298,
	"./sq.js": 298,
	"./sr": 299,
	"./sr-cyrl": 300,
	"./sr-cyrl.js": 300,
	"./sr.js": 299,
	"./ss": 301,
	"./ss.js": 301,
	"./sv": 302,
	"./sv.js": 302,
	"./sw": 303,
	"./sw.js": 303,
	"./ta": 304,
	"./ta.js": 304,
	"./te": 305,
	"./te.js": 305,
	"./tet": 306,
	"./tet.js": 306,
	"./th": 307,
	"./th.js": 307,
	"./tl-ph": 308,
	"./tl-ph.js": 308,
	"./tlh": 309,
	"./tlh.js": 309,
	"./tr": 310,
	"./tr.js": 310,
	"./tzl": 311,
	"./tzl.js": 311,
	"./tzm": 312,
	"./tzm-latn": 313,
	"./tzm-latn.js": 313,
	"./tzm.js": 312,
	"./uk": 314,
	"./uk.js": 314,
	"./ur": 315,
	"./ur.js": 315,
	"./uz": 316,
	"./uz-latn": 317,
	"./uz-latn.js": 317,
	"./uz.js": 316,
	"./vi": 318,
	"./vi.js": 318,
	"./x-pseudo": 319,
	"./x-pseudo.js": 319,
	"./yo": 320,
	"./yo.js": 320,
	"./zh-cn": 321,
	"./zh-cn.js": 321,
	"./zh-hk": 322,
	"./zh-hk.js": 322,
	"./zh-tw": 323,
	"./zh-tw.js": 323
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
webpackContext.id = 435;

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_getstart_getstart__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_myreservation_myreservation__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_recentlyview_recentlyview__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_legaldisclamer_legaldisclamer__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_help_help__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signin_signin__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_network__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_Keyboard__ = __webpack_require__(370);
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
    function MyApp(app, platform, statusBar, splashScreen, modalCtrl, appsetting, http, events, alertCtrl, toastCtrl, network, socialSharing, keyboard) {
        var _this = this;
        this.app = app;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.network = network;
        this.socialSharing = socialSharing;
        this.keyboard = keyboard;
        this.text = {
            Hours: "H",
            Minutes: "M",
            Seconds: "S",
        };
        // alert('updated dfgdf');
        this.initializeApp();
        events.subscribe('Loggedin', function (Loggedin) {
            //alert("vikki");
            console.log(Loggedin);
            console.log('Loggedin');
            _this.getUser();
            _this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'assets/img/home.png' },
                { title: 'My Reservation', component: __WEBPACK_IMPORTED_MODULE_6__pages_myreservation_myreservation__["a" /* MyreservationPage */], icon: 'assets/img/myreservation.png' },
                { title: 'Recently Viewed', component: __WEBPACK_IMPORTED_MODULE_7__pages_recentlyview_recentlyview__["a" /* RecentlyviewPage */], icon: 'assets/img/view.png' },
                { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__["a" /* SettingPage */], icon: 'assets/img/settings.png' },
                { title: 'Legal Disclamer', component: __WEBPACK_IMPORTED_MODULE_9__pages_legaldisclamer_legaldisclamer__["a" /* LegaldisclamerPage */], icon: 'assets/img/legal.png' },
                { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_10__pages_help_help__["a" /* HelpPage */], icon: 'assets/img/help.png' },
            ];
        });
        // used for an example of ngFor and navigation
        events.subscribe('skip', function (skip) {
            console.log('skip');
            _this.currentuser = null;
            _this.pages = [
                { title: 'Sign in or create account', component: __WEBPACK_IMPORTED_MODULE_13__pages_signin_signin__["a" /* SigninPage */], icon: 'assets/img/person.png' },
                { title: 'Legal Disclamer', component: __WEBPACK_IMPORTED_MODULE_9__pages_legaldisclamer_legaldisclamer__["a" /* LegaldisclamerPage */], icon: 'assets/img/legal.png' },
            ];
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.events.publish('Loggedin', 'loginpage');
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.statusBar.hide();
            console.log('rahul');
            console.log(window.navigator.onLine);
            if (window.navigator.onLine == true) {
                console.log('You are online');
            }
            else {
                _this.tryagain();
            }
            if (localStorage.getItem('CurrentUser')) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_getstart_getstart__["a" /* GetstartPage */];
            }
            if (_this.platform.is('android')) {
                // alert('android');
                var appEl_1 = (document.getElementsByTagName('ION-APP')[0]), appElHeight_1 = appEl_1.clientHeight;
                _this.keyboard.disableScroll(true);
                window.addEventListener('native.keyboardshow', function (e) {
                    appEl_1.style.height = (appElHeight_1 - e.keyboardHeight) + 'px';
                });
                window.addEventListener('native.keyboardhide', function () {
                    appEl_1.style.height = '100%';
                });
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage = page;
    };
    MyApp.prototype.checkActivePage = function (page) {
        return page === this.activePage;
    };
    MyApp.prototype.getUser = function () {
        var _this = this;
        console.log(JSON.parse(localStorage.getItem('CurrentUser'))._id);
        var options = this.appsetting.header();
        var postdata = {
            id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/userdetailbyid', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.error == 0) {
                _this.userimage = response.data.image;
                //alert(this.userimage);
                console.log('userimage');
                console.log(_this.userimage);
                _this.currentuser = null;
                _this.currentuser = response.data;
                console.log(_this.currentuser);
            }
        });
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        localStorage.removeItem('CurrentUser');
                        localStorage.removeItem('searcheddata');
                        localStorage.removeItem('filterdata');
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_getstart_getstart__["a" /* GetstartPage */]);
                        // this.rootPage = GetstartPage;
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.tryagain = function () {
        var _this = this;
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            console.log('you are offline');
            var alert_1 = this.alertCtrl.create({
                message: '<img src="assets/img/network.png">',
                buttons: [{
                        text: 'Try again',
                        role: 'cancel',
                        handler: function () {
                            console.log('try again clicked');
                            _this.tryagain();
                        }
                    }]
            });
            alert_1.present();
        }
    };
    MyApp.prototype.shareapp = function () {
        // share with all social media and supporting email
        var message = "Are you not on Optatu yet? Get it now!";
        var subject = "Invitation to join Optatu";
        var url = 'https://www.google.co.in';
        this.socialSharing.share(message, subject, '', url).then(function () {
            // Sharing via social media is possible
            console.log('Can share');
        }).catch(function () {
            // Sharing via social media is not possible
            console.log('Can not share');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/app/app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false">\n    <ion-header>\n        <ion-toolbar color="yellow">\n            <ion-list no-lines class="profile_menu" *ngIf="currentuser">\n                <ion-item>\n\n                    <ion-avatar item-start>\n                        <img [src]="userimage">\n                    </ion-avatar>\n                    <h2>{{currentuser?.name}}</h2>\n                    <p>{{currentuser?.email}}</p>\n                </ion-item>\n            </ion-list>\n\n            <ion-list no-lines class="profile_menu" *ngIf="currentuser == null">\n                      <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/img/user.jpg">\n                    </ion-avatar>\n                    <h2>Username</h2>\n                    <p>johnlocke@gmail.com</p>\n                </ion-item>\n            </ion-list>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list no-lines class="sidemenu" *ngIf="currentuser">\n            <button menuClose color="black" ion-item *ngFor="let p of pages" (click)="openPage(p)" [class.active]="checkActivePage(p)">\n                    <ion-icon><img src="{{p.icon}}"></ion-icon>\n                {{p.title}}\n            </button>\n            <button menuClose color="black" ion-item (click)="shareapp()">\n                <ion-icon><img src="assets/img/share.png"></ion-icon>\n                Share This App\n            </button>\n            <button menuClose color="black" ion-item (click)="logout()">\n                    <ion-icon><img src="assets/img/logout.png"></ion-icon>\n                Logout\n            </button>\n        </ion-list>\n\n        <ion-list no-lines class="sidemenu" *ngIf="currentuser == null">\n                  <button menuClose color="black" ion-item *ngFor="let p of pages" (click)="openPage(p)" [class.active]="checkActivePage(p)">\n                <ion-icon><img src="{{p.icon}}"></ion-icon>\n                {{p.title}}\n            </button>\n            <button menuClose color="black" ion-item (click)="shareapp()">\n                <ion-icon><img src="assets/img/share.png"></ion-icon>\n                Share This App\n            </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_12__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_Keyboard__["a" /* Keyboard */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__barbequenation_barbequenation__ = __webpack_require__(52);
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
 * Generated class for the Filter1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Filter1Page = (function () {
    function Filter1Page(navCtrl, navParams, viewCtrl, modalCtrl, formBuilder, appsetting, common, loadingCtrl, http, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.appsetting = appsetting;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.geolocation = geolocation;
    }
    Filter1Page.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        console.log(localStorage.getItem('filterdata'));
        if (localStorage.getItem('filterdata') != null) {
            this.filterdata = JSON.parse(localStorage.getItem('filterdata'));
            console.log(this.filterdata);
            this.reservation = this.filterdata.reservationType;
            this.menutype = this.filterdata.menuType;
            this.menuprice = this.filterdata.menuPrice;
            this.locationtype = this.filterdata.locationType;
            this.FilterForm = this.formBuilder.group({
                reservationType: [this.filterdata.reservationType],
                menuType: [this.filterdata.menuType],
                menuPrice: [this.filterdata.menuPrice],
                locationType: [this.filterdata.locationType]
            });
        }
        else {
            console.log('else');
            this.FilterForm = this.formBuilder.group({
                reservationType: [''],
                menuType: [''],
                menuPrice: [''],
                locationType: ['']
            });
        }
    };
    Filter1Page.prototype.reservationSelect = function (eventdata) {
        console.log(eventdata);
        if (eventdata != undefined) {
            this.reservation = eventdata;
        }
    };
    Filter1Page.prototype.onChange = function (tag) {
        console.log('reservation');
        console.log(tag);
        this.reservation = '';
    };
    Filter1Page.prototype.SelectedMenuType = function (event) {
        console.log(event);
        if (event != undefined) {
            this.menudata = event;
            console.log(this.menudata);
        }
    };
    Filter1Page.prototype.SelectedMenuTypeDelete = function (event, index) {
        console.log(event);
        console.log(index);
        this.menudata.pop(index);
        console.log(this.menutype.length);
        if (this.menudata.length === 0) {
            this.menutype = '';
        }
    };
    Filter1Page.prototype.SelectedMenuPrice = function (event) {
        console.log(event);
        if (event != undefined) {
            this.menuprice = event;
        }
    };
    Filter1Page.prototype.MenuPriceDelete = function () {
        console.log('menu delete');
        this.menuprice = '';
    };
    Filter1Page.prototype.LocationType = function (event) {
        console.log(event);
        if (event != undefined) {
            this.locationtype = event;
        }
    };
    Filter1Page.prototype.locationtypeDelete = function () {
        this.locationtype = '';
    };
    Filter1Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Filter1Page');
        console.log();
        this.dateTime = new Date();
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lattitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
        });
    };
    Filter1Page.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Filter1Page.prototype.FilterAccept = function (filterForm) {
        console.log(filterForm.value);
        console.log(filterForm.value.menuPrice);
        if (filterForm.value.reservationType != undefined) {
            filterForm.value.reservationType = filterForm.value.reservationType;
        }
        else {
            filterForm.value.reservationType = '';
        }
        if (filterForm.value.menuType != undefined) {
            filterForm.value.menuType = filterForm.value.menuType;
        }
        else {
            filterForm.value.menuType = '';
        }
        if (filterForm.value.locationType != undefined) {
            filterForm.value.locationType = filterForm.value.locationType;
        }
        else {
            filterForm.value.locationType = '';
        }
        console.log(filterForm.value.menuPrice);
        var postdata;
        if (filterForm.value.menuPrice) {
            var a = filterForm.value.menuPrice.split('-');
            console.log(a);
            console.log('if part');
            postdata = {
                res_type: filterForm.value.reservationType,
                menu_type: filterForm.value.menuType,
                location_type: filterForm.value.locationType,
                min_menu_price: a[0],
                max_menu_price: a[1],
            };
        }
        else {
            postdata = {
                res_type: filterForm.value.reservationType,
                menu_type: filterForm.value.menuType,
                location_type: filterForm.value.locationType,
                min_menu_price: '',
                max_menu_price: '',
            };
        }
        this.viewCtrl.dismiss({ filterdata: postdata });
        //this.navCtrl.push(BarbequenationPage,{filterdata:postdata});
    };
    Filter1Page.prototype.ResetFilter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__barbequenation_barbequenation__["a" /* BarbequenationPage */], { filterdata: '' });
    };
    Filter1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-filter1',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/filter1/filter1.html"*/'<!--\n  Generated template for the Filter1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<form [formGroup]="FilterForm">\n<ion-header>\n  <ion-navbar color="white">\n    <ion-buttons start left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title> Filter</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background: #f9f9f9;">\n  <div class="filter_list">\n     <ion-list no-lines>\n    <ion-item>\n      <ion-label>RESERVATION TYPE</ion-label>\n      <ion-select formControlName="reservationType" [(ngModel)]="reservation" (ngModelChange)="reservationSelect($event)" >\n        <ion-option value="discount">DISCOUNT</ion-option>\n        <ion-option value="free">FREE</ion-option>\n        <ion-option value="price">PRICE</ion-option>\n      </ion-select>\n  </ion-item> \n<!--         <rl-tag-input *ngIf="selectedCat.length>0" [(ngModel)]="selectedCat" [ngModelOptions]="{standalone: true}" (click)="onChange(selectedCat)"></rl-tag-input>-->\n  <div class="tag" *ngIf="reservation">{{reservation}} <span class="tag_delete" (click)="onChange()">x</span></div>\n  <ion-item>\n      <ion-label>Menu Type</ion-label>\n      <ion-select multiple="true" formControlName="menuType" [(ngModel)]="menutype" (ngModelChange)="SelectedMenuType($event)" >\n        <ion-option>ITALIAN</ion-option>\n        <ion-option>SUSHI</ion-option>\n        <ion-option>SALAD</ion-option>\n        <ion-option>THAI</ion-option>\n        <ion-option>SEA FOOD</ion-option>\n        <ion-option>LIQUOR</ion-option>\n      </ion-select>\n  </ion-item>\n  <div *ngIf="menudata?.length>0">\n  <div class="tag" *ngFor="let type of menudata;let i = index">{{type}}<span class="tag_delete" (click)="SelectedMenuTypeDelete(i)">x</span></div>\n<!--  <div class="tag">SUSHI<span class="tag_delete">x</span></div>-->\n  </div>\n  <ion-item>\n      <ion-label>Menu Price</ion-label>\n      <ion-select formControlName="menuPrice" [(ngModel)]="menuprice" (ngModelChange)="SelectedMenuPrice($event)" >\n        <ion-option>0-20</ion-option>\n        <ion-option>20-40</ion-option>\n      </ion-select>\n  </ion-item>\n  \n  \n<!--  <rl-tag-input *ngIf="MenuPrice.length>0" [(ngModel)]="MenuPrice" [ngModelOptions]="{standalone: true}" (click)="MenuPriceDelete(MenuPrice)"></rl-tag-input>-->\n  <div class="tag" *ngIf="menuprice">{{menuprice}} <span class="tag_delete" (click)="MenuPriceDelete()">x</span></div>\n  <ion-item>\n      <ion-label>Location Type</ion-label>\n      <ion-select formControlName="locationType" [(ngModel)]="locationtype" (ngModelChange)="LocationType($event)" >\n        <ion-option>SEA VIEW</ion-option>\n        <ion-option>SCENIC VIEW</ion-option>\n      </ion-select>\n  </ion-item>\n     </ion-list>\n     <div class="tag" *ngIf="locationtype">{{locationtype}}<span class="tag_delete" (click)="locationtypeDelete()">x</span></div>\n  </div>\n    \n</ion-content>\n\n<ion-footer no-lines>\n  <ion-toolbar class="footer_button">\n    <button ion-button block color="dark" type="submit" (click)="FilterAccept(FilterForm)">ADD </button>\n    <button ion-button block color="yellow" type="button" (click)="ResetFilter()">RESET ALL</button>\n  </ion-toolbar>\n</ion-footer>\n    \n</form>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/filter1/filter1.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _k || Object])
    ], Filter1Page);
    return Filter1Page;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=filter1.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarbequenationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_popover__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restaurant2_restaurant2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__restaurantview_restaurantview__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendar_calendar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__maplistfull_maplistfull__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__filter1_filter1__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_appsetting__ = __webpack_require__(14);
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
 * Generated class for the BarbequenationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BarbequenationPage = (function () {
    function BarbequenationPage(navCtrl, navParams, popoverCtrl, formBuilder, modalCtrl, appsetting, http, common, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
        this.BarbForm = {
            date: '',
            time: '',
            seats: ''
        };
    }
    BarbequenationPage.prototype.ngOnInit = function () {
        var d = new Date();
        this.mindate = __WEBPACK_IMPORTED_MODULE_8_moment__(d).format('YYYY-MM-DD');
        console.log(this.mindate);
        console.log('ngOnInit');
        this.BarbForm = this.formBuilder.group({
            date: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            time: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
            seats: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]],
        });
    };
    BarbequenationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BarbequenationPage');
        console.log(JSON.parse(localStorage.getItem('selectedItem')));
        this.resdata = JSON.parse(localStorage.getItem('selectedItem'));
        var d = new Date();
        console.log(d);
        this.headerdate = __WEBPACK_IMPORTED_MODULE_8_moment__(d).format('llll');
        console.log(this.navParams.get('filterdata'));
    };
    BarbequenationPage.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notification_notification__["a" /* NotificationPage */]);
    };
    BarbequenationPage.prototype.PopoverModal = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popover_popover__["a" /* PopoverPage */]);
        popover.present();
    };
    BarbequenationPage.prototype.restaurant2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__restaurant2_restaurant2__["a" /* Restaurant2Page */]);
    };
    BarbequenationPage.prototype.restaurantview = function (event) {
        var _this = this;
        console.log(this.filterdata);
        console.log(event.value);
        if (event.value.seats != undefined && event.value.date != undefined && event.value.time != undefined) {
            console.log(event.value.time);
            console.log(event.value.date + ' ' + event.value.time);
            var dateTime = event.value.date + ' ' + event.value.time;
            var d = new Date(dateTime);
            console.log(d);
            var t = event.value.time.split(':');
            //var a = event.value.time.split(':');
            if (t[0] > 11) {
                console.log(event.value.time + ' PM');
                event.value.time = event.value.time + ' PM';
            }
            else {
                event.value.time = event.value.time + ' AM';
            }
            console.log(t.join('.'));
            var time = t.join('.');
            if (event.value.date == undefined) {
                event.value.date = '';
            }
            var seat;
            if (event.value.seats != undefined) {
                seat = event.value.seats.split(':');
            }
            else {
                seat = '';
            }
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(function () {
                var headers = _this.appsetting.header();
                var postdata;
                if (_this.filterdata != undefined) {
                    postdata = {
                        id: _this.resdata._id,
                        seats: seat[0],
                        time: time,
                        date: event.value.date,
                        location_type: _this.filterdata.location_type,
                        min_menu_price: _this.filterdata.min_menu_price,
                        max_menu_price: _this.filterdata.max_menu_price,
                        menu_type: _this.filterdata.menu_type,
                        res_type: _this.filterdata.res_type
                    };
                }
                else {
                    postdata = {
                        id: _this.resdata._id,
                        seats: seat[0],
                        time: time,
                        date: event.value.date,
                        location_type: '',
                        min_menu_price: '',
                        max_menu_price: '',
                        menu_type: '',
                        res_type: ''
                    };
                }
                console.log(postdata);
                var serialized = _this.appsetting.serializeObj(postdata);
                _this.http.post(_this.appsetting.url + 'subcatbynames', serialized, headers).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    if (response.error == 0) {
                        if (response.subcatlist.length > 0) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__restaurantview_restaurantview__["a" /* RestaurantviewPage */], {
                                paymentdata: JSON.parse(localStorage.getItem('selectedItem')),
                                selecteddata: postdata
                            });
                        }
                        else {
                            _this.common.presentAlert('RESERVE NOW', 'No restaurant found');
                        }
                    }
                    else if (response.code == 2) {
                        _this.common.presentAlert('RESERVE NOW', 'Please use at least one field to fill the criteria that will be used to search.');
                    }
                });
            });
        }
        else {
            this.common.presentAlert('RESERVE NOW', 'Make sure you selected date,time and table seats!');
        }
    };
    BarbequenationPage.prototype.openCalendar = function (myEvent) {
        var _this = this;
        var opts = {
            cssClass: 'calendarcls'
        };
        var options = {
            disableWeeks: [0, 6]
        };
        var myCalendar = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__calendar_calendar__["a" /* CalendarPage */], {}, opts);
        myCalendar.present({
            ev: myEvent
        });
        myCalendar.onDidDismiss(function (date, type) {
            console.log(date);
            if (date != null) {
                _this.mindate = __WEBPACK_IMPORTED_MODULE_8_moment__(date).format('YYYY-MM-DD');
                _this.data.date = _this.mindate;
            }
            else {
                _this.data.date = "";
            }
        });
    };
    BarbequenationPage.prototype.MapView = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__maplistfull_maplistfull__["a" /* MaplistfullPage */], { RestData: JSON.parse(localStorage.getItem('selectedItem')) });
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data != undefined) {
                _this.filterdata = data.filterdata;
            }
        });
        modal.present();
    };
    BarbequenationPage.prototype.FilterPage = function () {
        var _this = this;
        var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__filter1_filter1__["a" /* Filter1Page */]);
        filterModal.onDidDismiss(function (data) {
            console.log(data);
            if (data != undefined) {
                _this.filterdata = data.filterdata;
            }
        });
        filterModal.present();
    };
    BarbequenationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-barbequenation',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/barbequenation/barbequenation.html"*/'<!--\n  Generated template for the BarbequenationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="white">\n        <button ion-button menuToggle>\n            <ion-icon name="menus"></ion-icon>\n        </button>\n        <ion-title> <span class="maintitle"> Reserve now </span> <span class="subtitle">{{headerdate}}</span></ion-title>\n        <ion-buttons end (click)="notification()">\n                     <button ion-button icon-only>\n                <ion-icon name="notifications-outline"><span class="noti_counter">0</span></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end (click)="PopoverModal()">\n                     <button ion-button icon-only>\n                <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="barbequenation">\n        <h1>{{resdata?.category}}<br> {{resdata?.category_name}}</h1>\n        <button ion-button small class="mapviewbtn cmbtn" (click)="MapView()">MAP VIEW</button>\n    </div>\n<form [formGroup]="BarbForm" (submit)="restaurantview(BarbForm)">\n    <div class="list">\n        <ion-list no-lines class="searchheader">\n            <ion-item>\n                <ion-icon  item-start class="calender"><img src="assets/img/date_calendar.png"></ion-icon>\n                <ion-label class="cdate" style="position:static; width:30%">Date</ion-label>\n                <ion-input (focus)="openCalendar()" type="text" class="sdate clndr" formControlName="date" [(ngModel)]="data.date" name="date"></ion-input>\n            </ion-item>\n            <!--          <ion-item>\n                          <ion-icon ><img src="assets/img/date_calendar.png"/></ion-icon>date\n                      </ion-item>-->\n            <ion-item> \n                <ion-icon  item-start class="calender"><img src="assets/img/time.png"></ion-icon>\n                <ion-label class="cdate" style="position:static; width:30%">Time</ion-label>\n                <ion-datetime class="customclass5454" formControlName="time" displayFormat="HH:mm A" pickerFormat="HH:mm A" [(ngModel)]="data.time" name="time"></ion-datetime>\n            </ion-item>\n            <!--            <ion-item> \n                            <ion-icon ><img src="assets/img/time.png"/></ion-icon>time\n                        </ion-item>-->\n            <ion-item>\n                <ion-icon  item-start class="calender"><img src="assets/img/table.png"></ion-icon>\n                <ion-label class="cdate">Table Seats</ion-label>\n                <ion-datetime class="customclass5454" formControlName="seats" displayFormat="h" pickerFormat="h" [(ngModel)]="data.seats" name="seats"></ion-datetime>\n                <!--                            <ion-select formControlName="seats">\n                                                <ion-option *ngFor="let seatl of seatlist">{{seatl.seat}}</ion-option>\n                                            </ion-select>-->\n            </ion-item>\n            <!--            <ion-item> \n                            <ion-icon ><img src="assets/img/table.png"/></ion-icon>table seats\n                        </ion-item>-->\n            <ion-item (click)="FilterPage()">\n                <ion-icon ><img src="assets/img/add.png"/></ion-icon> add filters\n            </ion-item>\n        </ion-list>\n    </div>\n    <div class="trybtn">\n        <button  ion-button  class="search cmbtn" type="submit">search</button>\n    </div>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/barbequenation/barbequenation.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_13__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__providers_appsetting__["a" /* Appsetting */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* Http */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11__providers_common__["a" /* Common */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__providers_common__["a" /* Common */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _j || Object])
    ], BarbequenationPage);
    return BarbequenationPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=barbequenation.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Restaurant2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_popover__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__maplist_maplist__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myreservation_myreservation__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__maplistfull_maplistfull__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__barbequenation_barbequenation__ = __webpack_require__(52);
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
 * Generated class for the Restaurant2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Restaurant2Page = (function () {
    function Restaurant2Page(navCtrl, navParams, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
    }
    Restaurant2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Restaurant2Page');
    };
    Restaurant2Page.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notification_notification__["a" /* NotificationPage */]);
    };
    Restaurant2Page.prototype.PopoverModal = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popover_popover__["a" /* PopoverPage */]);
        popover.present();
    };
    Restaurant2Page.prototype.presentMapPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__maplist_maplist__["a" /* MaplistPage */]);
    };
    Restaurant2Page.prototype.myreservationtype = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__myreservation_myreservation__["a" /* MyreservationPage */]);
    };
    Restaurant2Page.prototype.MaplistfullModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__maplistfull_maplistfull__["a" /* MaplistfullPage */]);
        modal.present();
    };
    Restaurant2Page.prototype.barbequenationModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__barbequenation_barbequenation__["a" /* BarbequenationPage */]);
        modal.present();
    };
    Restaurant2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-restaurant2',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/restaurant2/restaurant2.html"*/'<!--\n  Generated template for the Restaurant2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="white">\n    <button ion-button menuToggle>\n      <ion-icon name="menus"></ion-icon>\n    </button>\n    <ion-title> <span class="maintitle"> Reserve now </span> <span class="subtitle">Thurs 2 july 9:2:55</span></ion-title>\n    <ion-buttons end (click)="notification()">\n      <button ion-button icon-only>\n        <ion-icon name="notifications-outline"><span class="noti_counter">0</span></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="PopoverModal()">\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background:#f9f9f9;">\n  <div class="search_filter">\n    <ion-list>\n    <form>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <!--ion-searchbar placeholder="WHERE (CITY, ADDRESS) " (ionInput)="getItems()"></ion-searchbar-->\n\n           <label class="item item-input inputwidicon">\n    \n    <ion-input type="search" placeholder="WHERE (CITY, ADDRESS) " class="abcd"></ion-input>\n    <!--<ion-icon name="arrow-forward" item-right primary></ion-icon>-->\n           </label>\n\n\n          </ion-col>\n\n          <ion-col col-12>\n       <label class="item item-input inputwidicon">\n    \n    <ion-input type="search" placeholder="BARBECUE NATION" class="jj"></ion-input>\n    <!--<ion-icon name="arrow-forward" item-right primary></ion-icon>-->\n           </label>\n          </ion-col>\n          \n\n\n\n          <ion-col col-12>\n            <ion-item>\n               <ion-icon  item-start class="calender"><img src="assets/img/date_calendar.png"></ion-icon>\n              <ion-label class="cdate" style="position:static; width:15%">Date</ion-label>\n              <ion-input type="date" class="sdate"></ion-input>\n            </ion-item>\n          </ion-col>\n\n          <ion-col col-6>\n            \n            <ion-item>\n              <ion-icon  item-start class="calender"><img src="assets/img/time.png"></ion-icon>\n              <ion-label class="cdate" style="position:static; width:15%">Time</ion-label>\n            <ion-datetime displayFormat="h:mm A"></ion-datetime>\n        </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n               <ion-icon  item-start class="calender"><img src="assets/img/table.png"></ion-icon>\n                    <ion-label class="cdate" style="position:static; width:30%">Table Seats</ion-label>\n              <ion-datetime displayFormat="mm" class="sdate" style="width: 19%;">Table Seats</ion-datetime>\n            </ion-item>\n          </ion-col>\n          \n          <ion-col col-12>\n            <button full class="btn" (click)="presentMapPage()">SEarch</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n    </ion-list>\n  </div>\n\n\n<div class="list_item">\n  <h2 class="product_title">TOP RESTAURANTS</h2>\n<ion-list no-lines>\n  <ion-item>\n    <div class="thumb"  item-start>\n       <img src="assets/img/r1.jpg">\n    </div>\n\n    <h2>Barbeque Nation</h2>\n    <p class="categories_sub">RESTAURANTS</p>\n    <p>Distance : 350m</p>\n    <p>Address : Dongi Garadgi, Gaji</p>\n    <p class="type">Type : \n      <button ion-button small color="yellow" class="btn_new">Sushi</button> \n      <button ion-button small  class="btn_new">Bio</button>\n    \n    </p>\n    <button ion-button small class="btn_new"(click)="presentMapPage()">Reserve</button>\n    <button ion-button small class="btn_new" (click)="MaplistfullModal()">MAP VIEW</button>\n\n  </ion-item>\n  <ion-item>\n    <div class="thumb"  item-start>\n       <img src="assets/img/r1.jpg">\n    </div>\n    <h2>Barbeque Nation</h2>\n    <p class="categories_sub">RESTAURANTS</p>\n    <p>Distance : 350m</p>\n    <p>Address : Dongi Garadgi, Gaji</p>\n    <p class="type">Type : \n      <button ion-button small color="yellow" class="btn_new">Sushi</button> \n      <button ion-button small  class="btn_new">Bio</button>\n    </p>\n    <button ion-button small class="btn_new" (click)="barbequenationModal()">Reserve</button>\n    <button ion-button small class="btn_new">MAP VIEW</button>\n\n  </ion-item>\n</ion-list>\n</div>\n</ion-content>\n\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/restaurant2/restaurant2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], Restaurant2Page);
    return Restaurant2Page;
}());

//# sourceMappingURL=restaurant2.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaplistfullPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__barbequenation_barbequenation__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*************Used Plugins ****************/


var MaplistfullPage = (function () {
    function MaplistfullPage(navCtrl, viewCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
    }
    MaplistfullPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaplistfullPage');
        console.log(this.navParams.get('RestData'));
        this.mapdata = this.navParams.get('RestData');
        console.log(parseFloat(this.mapdata.loc.coordinates[0]));
        var d = new Date();
        console.log(d);
        this.headerdate = __WEBPACK_IMPORTED_MODULE_2_moment__(d).format('llll');
        this.loadMap();
    };
    MaplistfullPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    /***************** Function for loadmap and get the direction and show custom pointer ***********/
    MaplistfullPage.prototype.loadMap = function () {
        var _this = this;
        var temp = this;
        // alert('navigation');
        this.geolocation.getCurrentPosition().then(function (resp) {
            var lat = _this.mapdata.loc.coordinates[1]; // coordinates[1] used for latitude
            var long = _this.mapdata.loc.coordinates[0]; // coordinates[0] used for longitude
            console.log('current lat=' + resp.coords.latitude);
            console.log('current long=' + resp.coords.longitude);
            console.log(lat);
            console.log(long);
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;
            // Origin lat long
            var originlatlng = new google.maps.LatLng({ lat: resp.coords.latitude, lng: resp.coords.longitude });
            var mapOptions = {
                center: originlatlng,
                zoom: 3,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            console.log(_this.map);
            directionsDisplay.setMap(_this.map);
            directionsDisplay.setOptions({ suppressMarkers: true });
            var destLatLng = new google.maps.LatLng({ lat: lat, lng: long }); // Destination lat long
            console.log(destLatLng);
            directionsService.route({
                origin: originlatlng,
                destination: destLatLng,
                travelMode: google.maps.TravelMode['DRIVING'],
                unitSystem: google.maps.UnitSystem.METRIC
            }, function (response, status) {
                console.log(response);
                console.log(response.request.destination.location.lat());
                console.log(response.request.destination.location.lng());
                console.log(status);
                if (status == google.maps.DirectionsStatus.OK) {
                    var infowindow = new google.maps.InfoWindow({
                        content: '' + _this.mapdata.category
                    });
                    var icon = {
                        url: 'assets/img/restaurant.png',
                        scaledSize: new google.maps.Size(30, 30),
                    };
                    var originmarker = new google.maps.Marker({
                        map: _this.map,
                        icon: 'assets/img/icon-4.png',
                        animation: google.maps.Animation.DROP,
                        position: originlatlng
                    });
                    var marker_1 = new google.maps.Marker({
                        map: _this.map,
                        icon: icon,
                        animation: google.maps.Animation.DROP,
                        position: destLatLng
                    });
                    google.maps.event.addListener(marker_1, "click", function (clickedres) {
                        console.log(clickedres.latLng.lat());
                        console.log(clickedres.latLng.lng());
                        console.log('clicked on marker');
                        infowindow.open(temp.map, marker_1);
                    });
                    new google.maps.DirectionsRenderer({
                        map: _this.map,
                        directions: response,
                        suppressMarkers: true
                    });
                    directionsDisplay.setDirections(response);
                }
                else {
                    console.warn(status);
                }
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    MaplistfullPage.prototype.makeReservation = function (resdata) {
        console.log(resdata);
        //        resdata.start_date = resdata.start_date.replace(/T/gi, " ");
        //        resdata.start_date = resdata.start_date.replace(/:00.000Z/gi, " ");
        //
        //        resdata.end_date = resdata.end_date.replace(/T/gi, " ");
        //        resdata.end_date = resdata.end_date.replace(/:00.000Z/gi, " ");
        //
        //        resdata.coupon.enddate = resdata.coupon.enddate.replace(/T/gi, " ");
        //        resdata.coupon.enddate = resdata.coupon.enddate.replace(/:00.000Z/gi, " ");
        //        resdata.coupon.enddate = moment(resdata.coupon.enddate).format('llll');
        //
        //        resdata.coupon.startdate = resdata.coupon.startdate.replace(/T/gi, " ");
        //        resdata.coupon.startdate = resdata.coupon.startdate.replace(/:00.000Z/gi, " ");
        //        resdata.coupon.startdate = moment(resdata.coupon.startdate).format('llll');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__barbequenation_barbequenation__["a" /* BarbequenationPage */], { resdata: resdata });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MaplistfullPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('directionsPanel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MaplistfullPage.prototype, "directionsPanel", void 0);
    MaplistfullPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-maplistfull',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/maplistfull/maplistfull.html"*/'<!--\n  Generated template for the MaplistfullPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="white">\n      <ion-buttons start left>\n        <button ion-button icon-only (click)="closeModal()">\n            <ion-icon color="dark" name="ios-close-outline"></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-title> <span class="maintitle"> Reserve now </span> <span class="subtitle">{{headerdate}}</span></ion-title>\n    <ion-buttons end (click)="notification()">\n      <button ion-button icon-only>\n        <ion-icon name="notifications-outline"><span class="noti_counter">0</span></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end (click)="PopoverModal()">\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n<!--<ion-searchbar placeholder="WHERE (CITY, ADDRESS) " class="customsearch" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)" style="position:relative">\n   <ion-icon style="position:absolute"> <img width="45px" src="assets/img/interactive_map.png"></ion-icon> </ion-searchbar>-->\n\n</ion-header>\n\n\n\n\n<ion-content style="background:#f9f9f9;">\n\n<div class="mapouter">\n    <div class="mapouter" #map id="map"></div>\n<!--  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.9352172945055!2d-71.80711768488622!3d42.25855597919382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e40663492673c1%3A0xaf8e200228d2a96e!2s2+Ionic+Ave%2C+Worcester%2C+MA+01608%2C+USA!5e0!3m2!1sen!2sin!4v1511332038652" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>-->\n</div>\n<div class="list_item">\n<ion-list no-lines>\n  <ion-item>\n    <div class="thumb"  item-start>\n       <img [src]="mapdata?.image">\n    </div>\n\n    <h2>{{mapdata?.category}}</h2>\n    <p class="categories_sub">{{mapdata?.category_name}}</p>\n    <p>Distance : {{mapdata?.distance}} KM</p>\n    <p>Address : {{mapdata?.address}}</p>\n    <p class="type">Type : \n      <button ion-button small color="yellow" class="btn_new" *ngFor="let type of mapdata?.dishes;let i = index" [ngClass]="i%2===0 ? \'Yellow\' : \'blue\'">{{type.menu_type}}</button> \n<!--      <button ion-button small  class="btn_new">Bio</button>-->\n      \n    </p>\n    <button ion-button small class="btn_new" (click)="makeReservation(mapdata)">Reserve</button>\n  </ion-item>\n  <!--<ion-item>\n    <div class="thumb"  item-start>\n       <img src="assets/img/r1.jpg">\n    </div>\n    <h2>Barbeque Nation</h2>\n    <p class="categories_sub">RESTAURANTS</p>\n    <p>Distance : 350m</p>\n    <p>Address : Dongi Garadgi, Gaji</p>\n    <p class="type">Type : \n      <button ion-button small color="yellow" class="btn_new">Sushi</button> \n      <button ion-button small  class="btn_new">Bio</button>\n      <button ion-button small class="btn_new" (click)="barbequenation()">Reserve</button>\n    </p>\n    \n\n  </ion-item>-->\n</ion-list>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/maplistfull/maplistfull.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MaplistfullPage);
    return MaplistfullPage;
}());

//# sourceMappingURL=maplistfull.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_popover__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restaurant2_restaurant2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__barbequenation_barbequenation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__maplistfull_maplistfull__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__maplist_maplist__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__calendar_calendar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var RestaurantsPage = (function () {
    function RestaurantsPage(navCtrl, navParams, popoverCtrl, modalCtrl, formBuilder, appsetting, http, zone, common, geolocation, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.appsetting = appsetting;
        this.http = http;
        this.zone = zone;
        this.common = common;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.RestaurantForm = {
            query: '',
            restaurantName: '',
            date: '',
            time: '',
            seats: ''
        };
        this.optionsRange = {
            pickMode: 'range'
        };
        this.service = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: this.navParams.get('address')
        };
        //alert('restaurant');
    }
    RestaurantsPage.prototype.ngOnInit = function () {
        var d = new Date();
        this.mindate = __WEBPACK_IMPORTED_MODULE_12_moment__(d).format('YYYY-MM-DD');
        console.log(this.mindate);
        console.log('ngOnInit');
        this.RestaurantForm = this.formBuilder.group({
            query: [this.navParams.get('address'), []],
            restaurantName: ['', []],
            date: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required]],
            time: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required]],
            seats: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required]],
        });
    };
    RestaurantsPage.prototype.updateSearch = function () {
        console.log('update');
        console.log(this.autocomplete.query);
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({ input: this.autocomplete.query }, function (predictions, status) {
            me.autocompleteItems = [];
            console.log('here');
            me.zone.run(function () {
                predictions.forEach(function (prediction) {
                    //console.log(prediction);
                    me.autocompleteItems.push(prediction.description);
                });
                console.log(me.autocompleteItems);
            });
        });
    };
    RestaurantsPage.prototype.chooseItem = function (item) {
        console.log(item);
        this.autocomplete.query = item;
        this.autocompleteItems = [];
    };
    RestaurantsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RestaurantsPage');
        console.log(this.common.cords);
        console.log(this.navParams.get('address'));
        console.log(this.navParams.get('categoryid'));
        console.log(this.navParams.get('categoryName'));
        var d = new Date();
        console.log(d);
        this.dateTime = new Date();
        this.minTime = __WEBPACK_IMPORTED_MODULE_12_moment__(d).format('h:mm A');
        this.headerdate = __WEBPACK_IMPORTED_MODULE_12_moment__(d).format('llll');
        this.CategoryName = this.navParams.get('categoryName');
        this.getDataByCategoryId();
        //        this.SeatList();
    };
    RestaurantsPage.prototype.getDataByCategoryId = function () {
        var _this = this;
        var temp = this;
        //         this.geolocation.getCurrentPosition().then((resp) => {
        //            console.log(resp);
        var headers = this.appsetting.header();
        var postdata = {
            category_id: this.navParams.get('categoryid'),
            address: this.navParams.get('address')
        };
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'subcatbyid', serialized, headers).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.error == 0) {
                response.subcatlist.forEach(function (value, key) {
                    //                    console.log(value);
                    //                    console.log(key);
                    //                    console.log(value.loc.coordinates[1]);
                    var a = temp.common.distance(temp.common.cords.latitude, temp.common.cords.longitude, value.loc.coordinates[1], value.loc.coordinates[0], 'K');
                    console.log('Distance==' + a);
                    value.distance = a;
                    value.coupon.enddate = value.coupon.enddate.replace(/T/gi, " ");
                    value.coupon.enddate = value.coupon.enddate.replace(/:00.000Z/gi, " ");
                    //value.coupon.enddate = moment(value.coupon.enddate).format('llll');
                    value.coupon.startdate = value.coupon.startdate.replace(/T/gi, " ");
                    value.coupon.startdate = value.coupon.startdate.replace(/:00.000Z/gi, " ");
                    value.start_date = value.start_date.replace(/T/gi, " ");
                    value.start_date = value.start_date.replace(/:00.000Z/gi, " ");
                    value.end_date = value.end_date.replace(/T/gi, " ");
                    value.end_date = value.end_date.replace(/:00.000Z/gi, " ");
                });
                _this.restaurants = response.subcatlist;
                console.log(_this.restaurants);
            }
        });
        //        }).catch((error) => {
        //            console.log('Error getting location', error);
        //        });
    };
    RestaurantsPage.prototype.Search = function (searchdata) {
        var _this = this;
        console.log(searchdata.value);
        console.log(searchdata.value.time);
        console.log(searchdata.value.date + ' ' + searchdata.value.time);
        var dateTime = searchdata.value.date + ' ' + searchdata.value.time;
        var d = new Date(dateTime);
        console.log(d);
        var t = searchdata.value.time.split(':');
        console.log(t.join('.'));
        var time = t.join('.');
        var isAfter = __WEBPACK_IMPORTED_MODULE_12_moment__(d).isAfter(this.dateTime);
        console.log(isAfter);
        if (searchdata.value.seats && searchdata.value.date && searchdata.value.time) {
            console.log(isAfter);
            if (searchdata.value.date == undefined) {
                searchdata.value.date = '';
            }
            var seat;
            if (searchdata.value.seats != undefined) {
                seat = searchdata.value.seats.split(':');
                searchdata.value.seats = seat[0];
            }
            else {
                searchdata.value.seats = '';
            }
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(function () {
                var headers = _this.appsetting.header();
                var postdata = {
                    address: searchdata.value.query,
                    category: searchdata.value.restaurantName,
                    time: time,
                    date: searchdata.value.date,
                    seats: seat[0]
                };
                var serialized = _this.appsetting.serializeObj(postdata);
                _this.http.post(_this.appsetting.url + 'subcatbysearchvalues', serialized, headers).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    if (response.error == 0) {
                        if (response.subcatlist.length > 0) {
                            localStorage.setItem('searcheddata', JSON.stringify(searchdata.value));
                            localStorage.removeItem('filterdata');
                            localStorage.removeItem('sortsearch');
                            _this.searched = response.subcatlist;
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__maplist_maplist__["a" /* MaplistPage */], { searchedlist: response.subcatlist, searcheddata: searchdata.value });
                        }
                        else {
                            _this.common.presentAlert('RESERVE NOW', 'No restaurant found');
                        }
                    }
                    else if (response.code == 2) {
                        _this.common.presentAlert('RESERVE NOW', 'Please use at least one field to fill the criteria that will be used to search.');
                    }
                });
            });
        }
        else {
            this.common.presentAlert('RESERVE NOW', 'Please select date,time and seats.');
        }
    };
    //    SeatList() {
    //        var headers = this.appsetting.header();
    //        this.http.get(this.appsetting.url + 'seatlist', headers).map(res => res.json()).subscribe(response => {
    //            console.log(response);
    //            if (response.error == 0) {
    //                this.seatlist = response.data;
    //            }
    //        })
    //    }
    RestaurantsPage.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notification_notification__["a" /* NotificationPage */]);
    };
    RestaurantsPage.prototype.PopoverModal = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popover_popover__["a" /* PopoverPage */]);
        popover.present();
    };
    RestaurantsPage.prototype.restaurant2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__restaurant2_restaurant2__["a" /* Restaurant2Page */]);
    };
    RestaurantsPage.prototype.barbequenation = function (event) {
        localStorage.setItem('selectedItem', JSON.stringify(event));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__barbequenation_barbequenation__["a" /* BarbequenationPage */]);
    };
    RestaurantsPage.prototype.MaplistfullModal = function (res) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__maplistfull_maplistfull__["a" /* MaplistfullPage */], { RestData: res });
        modal.present();
    };
    RestaurantsPage.prototype.openCalendar = function (myEvent) {
        var _this = this;
        var opts = {
            cssClass: 'calendarcls'
        };
        var options = {
            disableWeeks: [0, 6]
        };
        var myCalendar = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_14__calendar_calendar__["a" /* CalendarPage */], {}, opts);
        myCalendar.present({
            ev: myEvent
        });
        myCalendar.onDidDismiss(function (date, type) {
            console.log(date);
            if (date != null) {
                _this.mindate = __WEBPACK_IMPORTED_MODULE_12_moment__(date).format('YYYY-MM-DD');
                _this.autocomplete.date = _this.mindate;
            }
            else {
                _this.autocomplete.date = "";
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], RestaurantsPage.prototype, "mapElement", void 0);
    RestaurantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-restaurants',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/restaurants/restaurants.html"*/'<!--\n  Generated template for the RestaurantsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-navbar color="white">\n        <button ion-button menuToggle>\n            <ion-icon name="menus"></ion-icon>\n        </button>\n        <ion-title> <span class="maintitle"> Reserve now </span> <span class="subtitle">{{headerdate}}</span></ion-title>\n        <ion-buttons end (click)="notification()">\n                     <button ion-button icon-only>\n                <ion-icon name="notifications-outline"><span class="noti_counter">0</span></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end (click)="PopoverModal()">\n                     <button ion-button icon-only>\n                <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n    <ion-toolbar color="yellow">\n        <form [formGroup]="RestaurantForm">\n            <ion-grid class="searchheader">\n                <ion-row>\n                    <ion-col col-12>\n                        <div class="outersearch">\n                            <ion-searchbar placeholder="WHERE (CITY, ADDRESS) " class="abcd" [showCancelButton]="shouldShowCancel" (input)="updateSearch()" formControlName="query">\n                            </ion-searchbar>\n<!--                            <ion-searchbar placeholder="WHERE (CITY, ADDRESS) " [(ngModel)]="autocomplete.query" class="abcd" [showCancelButton]="shouldShowCancel" (input)="updateSearch()" formControlName="query">\n                            </ion-searchbar>-->\n                            <ion-icon class="loc-img"><img src="assets/img/interactive_map.png"></ion-icon>\n                        </div>\n<!--                        <ion-list *ngIf="autocompleteItems != \'\'" class="suggestion">\n                            <ion-item *ngFor="let item of autocompleteItems" tappable   (click)="chooseItem(item)">{{ item }}</ion-item>\n                        </ion-list>-->\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-12>\n                        <ion-input type="text" placeholder="RESTAURANT NAME" class="searchinput" formControlName="restaurantName"></ion-input>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n<!--                    <ion-calendar (click)="openCalendar()" formControlName="date" (onChange)="onChange($event)" [type]="type" [format]="\'YYYY-MM-DD\'" [options]="optionsBasic"></ion-calendar>-->\n                    <ion-col col-12>\n                        <ion-item>\n                            <ion-icon  item-start class="calender"><img src="assets/img/date_calendar.png"></ion-icon>\n                            <ion-label class="cdate" style="position:static; width:30%">Date</ion-label>\n                            <ion-input type="text" class="sdate clndr" formControlName="date"  [(ngModel)]="autocomplete.date" (click)="openCalendar()"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                     <ion-col col-6>\n                        <ion-item> \n                            <ion-icon  item-start class="calender"><img src="assets/img/time.png"></ion-icon>\n                            <ion-label class="cdate" style="position:static; width:30%">Time</ion-label>\n                            <ion-datetime class="customclass5454" displayFormat="HH:mm A" pickerFormat="HH:mm A" formControlName="time"></ion-datetime>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-icon  item-start class="calender"><img src="assets/img/table.png"></ion-icon>\n                            <ion-label class="cdate">Table Seats</ion-label>\n                            <ion-datetime class="customclass5454" displayFormat="h" pickerFormat="h" formControlName="seats"></ion-datetime>\n<!--                            <ion-select formControlName="seats">\n                                <ion-option *ngFor="let seatl of seatlist">{{seatl.seat}}</ion-option>\n                            </ion-select>-->\n                        </ion-item>\n                    </ion-col>\n                   \n                </ion-row>\n                <ion-row>\n                    <ion-col col-12>\n                        <button full class="btn" (click)="Search(RestaurantForm)">Search</button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </form>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content style="background:#f9f9f9;">\n    <div class="list_item">\n        <h2 class="product_title">TOP {{CategoryName}}</h2>\n        <ion-list no-lines>\n            <ion-item *ngFor="let top of restaurants">\n                <div class="thumb"  item-start>\n                    <img [src]="top.image">\n                </div>\n\n                <h2>{{top.category}}</h2>\n                <p class="categories_sub">{{top.category_name}}</p>\n                <p>Distance : {{top.distance}} KM</p>\n                <p>Address : {{top.address}}</p>\n                <p class="type">Type :\n                \n                    <button ion-button small *ngFor="let type of top.dishes;let i = index" class="btn_new" [ngClass]="i%2===0 ? \'Yellow\' : \'blue\'">{{type.menu_type}}</button> \n<!--                    <button ion-button small  class="btn_new">Bio</button>-->\n\n                </p>\n                <button ion-button small class="btn_new" (click)="barbequenation(top)">Reserve</button>\n                <button ion-button small class="btn_new" (click)="MaplistfullModal(top)">MAP VIEW</button>\n            </ion-item>\n            <!--  <ion-item>\n                <div class="thumb"  item-start>\n                   <img src="assets/img/r1.jpg">\n                </div>\n                <h2>Barbeque Nation</h2>\n                <p class="categories_sub">RESTAURANTS</p>\n                <p>Distance : 350m</p>\n                <p>Address : Dongi Garadgi, Gaji</p>\n                <p class="type">Type : \n                  <button ion-button small color="yellow" class="btn_new">Sushi</button> \n                  <button ion-button small  class="btn_new">Bio</button>\n                </p>\n                <button ion-button small class="btn_new" (click)="barbequenation()">Reserve</button>\n                <button ion-button small class="btn_new" (click)="MaplistfullModal()">MAP VIEW</button>\n            \n              </ion-item>-->\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/restaurants/restaurants.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormBuilder"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__["a" /* Appsetting */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__providers_common__["a" /* Common */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_common__["a" /* Common */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _m || Object])
    ], RestaurantsPage);
    return RestaurantsPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=restaurants.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyreservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_popover__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reservationdetail_reservationdetail__ = __webpack_require__(140);
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
 * Generated class for the MyreservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyreservationPage = (function () {
    function MyreservationPage(navCtrl, navParams, appsetting, http, common, loadingCtrl, popoverCtrl, elm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.elm = elm;
        //this.futureString = new Date();
        // alert('vikk');
    }
    MyreservationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyreservationPage');
        this.userData = JSON.parse(localStorage.getItem('CurrentUser'));
        this.MyReservation();
        var d = new Date();
        console.log(d);
        this.headerdate = __WEBPACK_IMPORTED_MODULE_7_moment__(d).format('llll');
    };
    MyreservationPage.prototype.dhms = function (t) {
        var days, hours, minutes, seconds;
        //        days = Math.floor(t / 86400);
        //        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;
        return [
            //days + 'd',
            hours + 'H',
            minutes + 'M',
            seconds + 'S'
        ].join(':');
    };
    MyreservationPage.prototype.countdown = function (data) {
        var temp = this;
        data.forEach(function (value, key) {
            temp.future = new Date(value.date_time);
            //        temp.$counter = Observable.interval(1000).map((x) => {
            temp.diff = Math.floor((new Date().getTime() - temp.future.getTime()) / 1000);
            console.log(temp.diff);
            console.log('counter');
            //return x;
            //        });
            //temp.message = temp.dhms(temp.diff)
            //        temp.subscription = temp.$counter.subscribe((x) => temp.message = temp.dhms(temp.diff));
            //  console.log(temp.message);
            document.getElementById('rahul' + key).innerHTML = temp.dhms(temp.diff);
        });
    };
    MyreservationPage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MyreservationPage.prototype.onCreate = function () {
        console.log('create here');
    };
    MyreservationPage.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notification_notification__["a" /* NotificationPage */]);
    };
    MyreservationPage.prototype.PopoverModal = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popover_popover__["a" /* PopoverPage */]);
        popover.present();
    };
    MyreservationPage.prototype.MyReservation = function () {
        var _this = this;
        var temp = this;
        var options = this.appsetting.header();
        var postdata = {
            userid: this.userData._id
        };
        //alert(JSON.stringify(postdata))
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'payment/myreservations', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.error == 0) {
                    _this.myreservation = response.data;
                    //                    response.data.forEach(function (value, key) {
                    //                        console.log(value);
                    //                        temp.interval = setInterval(() => {
                    //                            console.log('interval hell');
                    //                            temp.countdown(response.data);
                    //                          }, 1000);
                    //                        temp.interval = Observable.interval(1000).map((x) => {
                    //                            console.log('interval hell');
                    //                            temp.countdown(value.date_time,key);
                    //                        });
                    //                    })
                }
                else {
                    _this.common.presentAlert('My reservation', 'No result found');
                }
            });
        });
    };
    MyreservationPage.prototype.reservationdetail = function (data) {
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__reservationdetail_reservationdetail__["a" /* ReservationdetailPage */], { selecteddata: data });
    };
    MyreservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-myreservation',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/myreservation/myreservation.html"*/'<!--\n  Generated template for the MyreservationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="white">\n    <button ion-button menuToggle>\n      <ion-icon name="menus"></ion-icon>\n    </button>\n    <ion-title> <span class="maintitle"> My reservations </span> <span class="subtitle">{{headerdate}}</span></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="notifications-outline"><span class="noti_counter">0</span></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <div class="headerbottom" color="yellow">\n  	<div class="left">\n  		<h3>My Rservations</h3>\n  	</div>\n  	<div class="right">\n  		<h3 style="text-align: right;">Time expires</h3>\n  	</div>\n  </div>\n</ion-header>\n\n\n<ion-content>\n  <ion-list class="reservationstatus">\n    <ion-item *ngFor="let reservation of myreservation;let i = index;" (click)="reservationdetail(reservation)">\n      <ion-thumbnail item-start>\n        <img [src]="reservation.image">\n      </ion-thumbnail>\n      <h2>{{reservation.category}}</h2>\n      <p>{{reservation.category_name}}</p>\n      <button ion-button item-end outline style="border-color: #008000; color:#000" id="rahul{{i}}" (click)="onCreate()">-1H:22M:21S</button>\n    </ion-item>\n\n<!--     <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/r1.jpg">\n      </ion-thumbnail>\n      <h2>My Neighbor Totoro</h2>\n      <p>Hayao Miyazaki • 1988</p>\n      <button ion-button item-end outline style="border-color: #008000; color:#000">-1H:50M:30S</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/r1.jpg">\n      </ion-thumbnail>\n      <h2>My Neighbor Totoro</h2>\n      <p>Hayao Miyazaki • 1988</p>\n      <button type="button" class="delete" ng-click="deleteModel(model)">\n        <span>×</span>\n    </button>\n      <button ion-button item-end outline style="border-color: #f53d3d; color:#f53d3d">EXPIRED</button>\n    </ion-item>-->\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/myreservation/myreservation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], MyreservationPage);
    return MyreservationPage;
}());

//# sourceMappingURL=myreservation.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetstartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HomePage } from '../home/home';


/**
 * Generated class for the GetstartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GetstartPage = (function () {
    function GetstartPage(platform, navCtrl, navParams, toastCtrl, network, alertCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.network = network;
        this.alertCtrl = alertCtrl;
    }
    GetstartPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.tryagain();
    };
    GetstartPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad GetstartPage');
        this.platform.ready().then(function () {
            var lastTimeBackPress = 0;
            var timePeriodToExit = 2000;
            _this.platform.registerBackButtonAction(function () {
                // get current active page
                var view = _this.navCtrl.getActive();
                if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                    _this.platform.exitApp(); //Exit from app
                }
                else {
                    // alert('Press back again to exit App?');
                    var toast = _this.toastCtrl.create({
                        message: 'Press back again to exit from app?',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    lastTimeBackPress = new Date().getTime();
                }
            });
        });
    };
    // home(){
    //   this.navCtrl.push(HomePage);
    // }
    GetstartPage.prototype.signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    GetstartPage.prototype.tryagain = function () {
        var _this = this;
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        }
        else {
            console.log('you are offline');
            var alert_1 = this.alertCtrl.create({
                message: '<img src="assets/img/network.png">',
                buttons: [{
                        text: 'Try again',
                        role: 'cancel',
                        handler: function () {
                            console.log('try again clicked');
                            _this.tryagain();
                        }
                    }]
            });
            alert_1.present();
        }
    };
    GetstartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-getstart',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/getstart/getstart.html"*/'<!--\n  Generated template for the GetstartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n\n  <ion-navbar>\n    <ion-title>getstart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="getstart_bg" (click)="signin()">\n  <div class="getstarted">\n    <div class="center_container">\n      <div class="logo">\n        <img width="80px" src="assets/img/logo.png">\n        <h4>Optatu</h4>\n      </div>\n      <h5> <span> <img width="15px" src="assets/img/line.png"> Fast Reserve </span> </h5>\n      <p>Reservations everywhere for\nRestaurants, Hotels, Beaches,\nParkings and Entertainments</p>\n\n    </div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/getstart/getstart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], GetstartPage);
    return GetstartPage;
}());

//# sourceMappingURL=getstart.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaplistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_popover__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_filter__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sortdistance_sortdistance__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__totalnation2_totalnation2__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*******Plugin for google maps********/


var MaplistPage = (function () {
    function MaplistPage(navCtrl, navParams, modalCtrl, viewCtrl, popoverCtrl, alertCtrl, geolocation, events, common) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.events = events;
        this.common = common;
    }
    MaplistPage.prototype.ionViewDidLoad = function () {
        // alert('maplist gg');
        var d = new Date();
        console.log(d);
        this.headerdate = __WEBPACK_IMPORTED_MODULE_7_moment__(d).format('llll');
        console.log('ionViewDidLoad MaplistPage');
        console.log(this.navParams.get('searchedlist'));
        this.searchedlist = this.navParams.get('searchedlist');
        console.log(this.navParams.get('searcheddata'));
        this.search = this.navParams.get('searcheddata');
        var a = this.navParams.get('searcheddata').time.split(':');
        if (a[0] > 11) {
            console.log(this.navParams.get('searcheddata').time + ' PM');
            this.search.time = this.navParams.get('searcheddata').time + ' PM';
        }
        else {
            this.search.time = this.navParams.get('searcheddata').time + ' AM';
        }
        console.log(this.search);
        this.myMap = document.getElementById('map');
        this.loadMap();
    };
    MaplistPage.prototype.PopoverModal = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popover_popover__["a" /* PopoverPage */]);
        popover.present();
    };
    MaplistPage.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */]);
    };
    MaplistPage.prototype.SortdistancepresentModal = function () {
        var _this = this;
        var temp = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__sortdistance_sortdistance__["a" /* SortdistancePage */], { searchformdata: this.navParams.get('searcheddata') });
        modal.onDidDismiss(function (data) {
            console.log(data.searchedlist);
            if (data.searchedlist) {
                data.searchedlist.forEach(function (value, key) {
                    //                    console.log(value);
                    //                    console.log(key);
                    //                    console.log(value.loc.coordinates[1]);
                    var a = temp.common.distance(temp.common.cords.latitude, temp.common.cords.longitude, value.loc.coordinates[1], value.loc.coordinates[0], 'K');
                    console.log('Distance==' + a);
                    value.distance = a;
                });
                _this.searchedlist = data.searchedlist;
                _this.loadMap();
            }
            else {
                _this.searchedlist = null;
                _this.loadMap();
            }
        });
        modal.present();
    };
    MaplistPage.prototype.FilterpresentModal = function () {
        var _this = this;
        var temp = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__filter_filter__["a" /* FilterPage */], { searcheddata: this.searchedlist });
        modal.onDidDismiss(function (res) {
            console.log(res);
            if (res.searchedlist) {
                res.searchedlist.forEach(function (value, key) {
                    console.log(value);
                    var a = temp.common.distance(temp.common.cords.latitude, temp.common.cords.longitude, value.loc.coordinates[1], value.loc.coordinates[0], 'K');
                    console.log('Distance==' + a);
                    value.distance = a;
                });
                //delete this.searchedlist;
                _this.searchedlist = res.searchedlist;
                console.log(_this.searchedlist);
                _this.loadMap();
            }
            else {
                _this.searchedlist = null;
                _this.loadMap();
            }
            console.log(_this.searchedlist);
        });
        modal.present();
    };
    //  dismiss() {
    //     this.viewCtrl.dismiss();
    //   }
    MaplistPage.prototype.totalnation2Page = function (select, index) {
        console.log(select);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__totalnation2_totalnation2__["a" /* Totalnation2Page */], { selectedRest: select, searchedvalue: this.navParams.get('searcheddata'), indexno: index + 1 });
    };
    MaplistPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 11,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            console.log(_this.map);
            _this.searchedlist.forEach(function (value, key) {
                console.log(value);
                console.log(key);
                console.log(value.loc.coordinates[1]);
                var lab = key + 1;
                var val = "" + lab;
                console.log(val);
                var a = _this.common.distance(_this.common.cords.latitude, _this.common.cords.longitude, value.loc.coordinates[1], value.loc.coordinates[0], 'K');
                console.log('Distance==' + a);
                value.distance = a;
                var myLatLng = { lat: value.loc.coordinates[1], lng: value.loc.coordinates[0] };
                var marker1 = new google.maps.Marker({
                    map: _this.map,
                    icon: 'assets/img/icon-4.png',
                    //label: val,
                    animation: google.maps.Animation.DROP,
                    position: latLng
                });
                var marker = new google.maps.Marker({
                    map: _this.map,
                    icon: 'assets/img/location.png',
                    label: val,
                    animation: google.maps.Animation.DROP,
                    position: myLatLng
                });
                google.maps.event.addListener(marker, "click", function (clickedres) {
                    console.log(clickedres.latLng.lat());
                    console.log(clickedres.latLng.lng());
                    console.log(value);
                    console.log('clicked on marker');
                });
                value.coupon.enddate = value.coupon.enddate.replace(/T/gi, " ");
                value.coupon.enddate = value.coupon.enddate.replace(/:00.000Z/gi, " ");
                value.coupon.enddate = __WEBPACK_IMPORTED_MODULE_7_moment__(value.coupon.enddate).format('llll');
                value.coupon.startdate = value.coupon.startdate.replace(/T/gi, " ");
                value.coupon.startdate = value.coupon.startdate.replace(/:00.000Z/gi, " ");
                value.start_date = value.start_date.replace(/T/gi, " ");
                value.start_date = value.start_date.replace(/:00.000Z/gi, " ");
                value.end_date = value.end_date.replace(/T/gi, " ");
                value.end_date = value.end_date.replace(/:00.000Z/gi, " ");
            });
            console.log(_this.searchedlist);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], MaplistPage.prototype, "mapElement", void 0);
    MaplistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-maplist',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/maplist/maplist.html"*/'<!--\n  Generated template for the MaplistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n    <ion-navbar color="white">\n        <ion-title> <span class="maintitle"> Reserve now </span> <span class="subtitle">{{headerdate}}</span></ion-title>\n        <ion-buttons end (click)="notification()">\n                     <button ion-button icon-only>\n                <ion-icon name="notifications-outline"><span class="noti_counter">0</span></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end (click)="PopoverModal()">\n                     <button ion-button icon-only>\n                <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#f9f9f9;">\n    <div class="mapouter" #map id="map"></div>\n\n    <div class="sortbtn">\n        <button ion-button full (click)="SortdistancepresentModal()"><h1 class="product_title">SORT<span><ion-icon><img src="assets/img/sort_icon.png"></ion-icon></span></h1></button>\n    </div>\n    <div class="list_item">\n        <ion-list no-lines *ngIf="searchedlist?.length>0">\n                  <ion-item *ngFor="let result of searchedlist; let i = index;" (click)="totalnation2Page(result,i)">\n                <div class="thumb"  item-start>\n                    <img [src]="result.image">\n                    <div class="imgblack">\n                        <img src="assets/img/img_b.png">\n                    </div>\n                    <div class="circle">{{i+1}}</div>\n                </div>\n\n                <h2>{{result.category}}</h2>\n                <h4 class="categories_sub">{{result.category_name}}</h4>\n                <p class="type" *ngIf="result.dishes.length>0">Type : \n                    <button ion-button small class="btn_new" *ngFor="let cusinetype of result.dishes;let i = index" [ngClass]="i%2===0 ? \'Yellow\' : \'blue\'">{{cusinetype.menu_type}}</button> \n                </p>\n                <p>End Validity : {{search?.time}}</p>\n<!--                <p>Address : {{result.address}}</p>-->\n                <p>Distance : {{result.distance}} KM</p>\n                \n                <div class="pricer" *ngIf="result.coupon">\n                    <!--    <button ion-button outline color="black" class="btn_new1">-{{result.coupon[0].percentage != "" ? \'%\' : "€"}}% PRICE RESERVATION</button>-->\n                    <button ion-button outline color="black" class="btn_new1" *ngIf="result.coupon.percentage">-{{result.coupon.percentage}}% DISCOUNT ON PAYMENT\n                    </button>\n                    <button ion-button outline color="black" class="btn_new1" *ngIf="result.coupon.price">-€{{result.coupon.price}} PRICE RESERVATION\n                    </button>\n                    <button ion-button outline color="black" class="btn_new1" *ngIf=\'result.coupon.res_type == "free"\'>FREE RESERVATION</button>\n                </div>\n            </ion-item>\n        </ion-list>\n        <ion-list *ngIf="searchedlist?.length == 0">\n            <p style="text-align: center;">Result not found</p>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <div class="addbtn">\n            <button ion-button full (click)="FilterpresentModal()">Add Filter</button>\n        </div>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/maplist/maplist.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__providers_common__["a" /* Common */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_common__["a" /* Common */]) === "function" && _k || Object])
    ], MaplistPage);
    return MaplistPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=maplist.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(29);
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
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilterPage = (function () {
    function FilterPage(navCtrl, navParams, viewCtrl, modalCtrl, formBuilder, appsetting, common, loadingCtrl, http, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.appsetting = appsetting;
        this.common = common;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.geolocation = geolocation;
        //alert('filter');
        console.log(JSON.parse(localStorage.getItem('searcheddata')));
        this.seachformdata = JSON.parse(localStorage.getItem('searcheddata'));
    }
    FilterPage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        console.log(localStorage.getItem('filterdata'));
        if (localStorage.getItem('filterdata') != null) {
            this.filterdata = JSON.parse(localStorage.getItem('filterdata'));
            console.log(this.filterdata);
            this.reservation = this.filterdata.reservationType;
            this.menutype = this.filterdata.menuType;
            this.menuprice = this.filterdata.menuPrice;
            this.locationtype = this.filterdata.locationType;
            this.FilterForm = this.formBuilder.group({
                reservationType: [this.filterdata.reservationType],
                menuType: [this.filterdata.menuType],
                menuPrice: [this.filterdata.menuPrice],
                locationType: [this.filterdata.locationType]
            });
        }
        else {
            console.log('else');
            this.FilterForm = this.formBuilder.group({
                reservationType: [''],
                menuType: [''],
                menuPrice: [''],
                locationType: ['']
            });
        }
    };
    FilterPage.prototype.reservationSelect = function (eventdata) {
        console.log(eventdata);
        if (eventdata != undefined) {
            this.reservation = eventdata;
        }
    };
    FilterPage.prototype.onChange = function (tag) {
        console.log('reservation');
        console.log(tag);
        this.reservation = '';
    };
    FilterPage.prototype.SelectedMenuType = function (event) {
        console.log(event);
        if (event != undefined) {
            this.menudata = event;
            console.log(this.menudata);
        }
    };
    FilterPage.prototype.SelectedMenuTypeDelete = function (event, index) {
        console.log(event);
        console.log(index);
        this.menudata.pop(index);
        console.log(this.menutype.length);
        if (this.menudata.length === 0) {
            this.menutype = '';
        }
    };
    FilterPage.prototype.SelectedMenuPrice = function (event) {
        console.log(event);
        if (event != undefined) {
            this.menuprice = event;
        }
    };
    FilterPage.prototype.MenuPriceDelete = function () {
        console.log('menu delete');
        this.menuprice = '';
    };
    FilterPage.prototype.LocationType = function (event) {
        console.log(event);
        if (event != undefined) {
            this.locationtype = event;
        }
    };
    FilterPage.prototype.locationtypeDelete = function () {
        this.locationtype = '';
    };
    FilterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad FilterPage');
        console.log();
        this.dateTime = new Date();
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lattitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
        });
    };
    FilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FilterPage.prototype.FilterAccept = function (filterForm) {
        var _this = this;
        console.log(filterForm.value);
        console.log(filterForm.value.menuPrice);
        if (filterForm.value.reservationType != undefined) {
            filterForm.value.reservationType = filterForm.value.reservationType;
        }
        else {
            filterForm.value.reservationType = '';
        }
        if (filterForm.value.menuType != undefined) {
            filterForm.value.menuType = filterForm.value.menuType;
        }
        else {
            filterForm.value.menuType = '';
        }
        if (filterForm.value.locationType != undefined) {
            filterForm.value.locationType = filterForm.value.locationType;
        }
        else {
            filterForm.value.locationType = '';
        }
        console.log(filterForm.value.menuPrice);
        if (filterForm.value.menuPrice) {
            if (localStorage.getItem('sortsearch')) {
                this.sortsearch = JSON.parse(localStorage.getItem('sortsearch'));
                console.log(this.sortsearch);
                var a = filterForm.value.menuPrice.split('-');
                console.log(a);
                var d = this.seachformdata.time.split(':');
                this.seachformdata.time = d.join('.');
                console.log('if part');
                this.postdata = {
                    res_type: filterForm.value.reservationType,
                    menu_type: filterForm.value.menuType,
                    location_type: filterForm.value.locationType,
                    min_menu_price: a[0],
                    max_menu_price: a[1],
                    latitude: this.lattitude,
                    longitude: this.longitude,
                    seats: this.seachformdata.seats,
                    address: this.seachformdata.query,
                    category: this.seachformdata.restaurantName,
                    //                    date: this.sortsearch.subcat_date,//Endvalidity time which selected on sort.
                    distance: this.sortsearch.distance,
                    param: this.sortsearch.param,
                    subcat_date: this.seachformdata.date,
                    time: this.seachformdata.time //search form selected time
                };
            }
        }
        else {
            console.log('else part');
            var d = this.seachformdata.time.split(':');
            this.seachformdata.time = d.join('.');
            this.postdata = {
                res_type: filterForm.value.reservationType,
                menu_type: filterForm.value.menuType,
                location_type: filterForm.value.locationType,
                min_menu_price: '',
                max_menu_price: '',
                latitude: this.lattitude,
                longitude: this.longitude,
                seats: this.seachformdata.seats,
                address: this.seachformdata.query,
                category: this.seachformdata.restaurantName,
                //                date: '',//search form selected date
                time: this.seachformdata.time,
                param: '',
                distance: '',
                subcat_date: this.seachformdata.date,
            };
        }
        console.log(this.postdata);
        var options = this.appsetting.header();
        var serialized = this.appsetting.serializeObj(this.postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.url + 'subcategory/filters', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.error === 0) {
                    localStorage.setItem('filterdata', JSON.stringify(filterForm.value));
                    _this.viewCtrl.dismiss({ searchedlist: response.subcatlist });
                }
                else {
                    _this.common.presentAlert('FILTER', 'Result not found');
                }
            });
        });
    };
    FilterPage.prototype.ResetFilter = function () {
        var _this = this;
        localStorage.removeItem('sortsearch');
        localStorage.removeItem('filterdata');
        this.search = JSON.parse(localStorage.getItem('searcheddata'));
        console.log(this.search);
        console.log(this.search.date + ' ' + this.search.time);
        var dateTime = this.search.date + ' ' + this.search.time;
        var d = new Date(dateTime);
        console.log(d);
        var t = this.search.time.split(':');
        console.log(t.join('.'));
        var time = t.join('.');
        var isAfter = __WEBPACK_IMPORTED_MODULE_6_moment__(d).isAfter(this.dateTime);
        console.log(isAfter);
        if (this.search.seats && this.search.date && this.search.time) {
            console.log('if');
            console.log(isAfter);
            var seat = this.search.seats.split(':');
            if (this.search.date == undefined) {
                this.search.date = '';
            }
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(function () {
                var headers = _this.appsetting.header();
                var postdata = {
                    address: _this.search.query,
                    category: _this.search.restaurantName,
                    time: time,
                    date: _this.search.date,
                    seats: seat[0]
                };
                var serialized = _this.appsetting.serializeObj(postdata);
                _this.http.post(_this.appsetting.url + 'subcatbysearchvalues', serialized, headers).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    if (response.error == 0) {
                        if (response.subcatlist.length > 0) {
                            _this.viewCtrl.dismiss({ searchedlist: response.subcatlist });
                        }
                        else {
                            _this.common.presentAlert('RESERVE NOW', 'No restaurant found');
                        }
                    }
                    else if (response.code == 2) {
                        _this.common.presentAlert('RESERVE NOW', 'Please use at least one field to fill the criteria that will be used to search.');
                    }
                });
            });
        }
        else {
            console.log('else');
            this.common.presentAlert('RESERVE NOW', 'Please select date,time and seats.');
        }
        this.viewCtrl.dismiss({ searchedlist: this.navParams.get('searcheddata') });
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-filter',template:/*ion-inline-start:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/filter/filter.html"*/'<!--\n  Generated template for the FilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<form [formGroup]="FilterForm">\n<ion-header>\n  <ion-navbar color="white">\n    <ion-buttons start left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title> Filter</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="background: #f9f9f9;">\n  <div class="filter_list">\n     <ion-list no-lines>\n    <ion-item>\n      <ion-label>RESERVATION TYPE</ion-label>\n      <ion-select formControlName="reservationType" [(ngModel)]="reservation" (ngModelChange)="reservationSelect($event)" >\n        <ion-option value="discount">DISCOUNT</ion-option>\n        <ion-option value="free">FREE</ion-option>\n        <ion-option value="price">PRICE</ion-option>\n      </ion-select>\n  </ion-item> \n<!--         <rl-tag-input *ngIf="selectedCat.length>0" [(ngModel)]="selectedCat" [ngModelOptions]="{standalone: true}" (click)="onChange(selectedCat)"></rl-tag-input>-->\n  <div class="tag" *ngIf="reservation">{{reservation}} <span class="tag_delete" (click)="onChange()">x</span></div>\n  <ion-item>\n      <ion-label>Menu Type</ion-label>\n      <ion-select multiple="true" formControlName="menuType" [(ngModel)]="menutype" (ngModelChange)="SelectedMenuType($event)" >\n        <ion-option>ITALIAN</ion-option>\n        <ion-option>SUSHI</ion-option>\n        <ion-option>SALAD</ion-option>\n        <ion-option>THAI</ion-option>\n        <ion-option>SEA FOOD</ion-option>\n        <ion-option>LIQUOR</ion-option>\n      </ion-select>\n  </ion-item>\n  <div *ngIf="menudata?.length>0">\n  <div class="tag" *ngFor="let type of menudata;let i = index">{{type}}<span class="tag_delete" (click)="SelectedMenuTypeDelete(i)">x</span></div>\n<!--  <div class="tag">SUSHI<span class="tag_delete">x</span></div>-->\n  </div>\n  <ion-item>\n      <ion-label>Menu Price</ion-label>\n      <ion-select formControlName="menuPrice" [(ngModel)]="menuprice" (ngModelChange)="SelectedMenuPrice($event)" >\n        <ion-option>0-20</ion-option>\n        <ion-option>20-40</ion-option>\n      </ion-select>\n  </ion-item>\n  \n  \n<!--  <rl-tag-input *ngIf="MenuPrice.length>0" [(ngModel)]="MenuPrice" [ngModelOptions]="{standalone: true}" (click)="MenuPriceDelete(MenuPrice)"></rl-tag-input>-->\n  <div class="tag" *ngIf="menuprice">{{menuprice}} <span class="tag_delete" (click)="MenuPriceDelete()">x</span></div>\n  <ion-item>\n      <ion-label>Location Type</ion-label>\n      <ion-select formControlName="locationType" [(ngModel)]="locationtype" (ngModelChange)="LocationType($event)" >\n        <ion-option>SEA VIEW</ion-option>\n        <ion-option>SCENIC VIEW</ion-option>\n      </ion-select>\n  </ion-item>\n     </ion-list>\n     <div class="tag" *ngIf="locationtype">{{locationtype}}<span class="tag_delete" (click)="locationtypeDelete()">x</span></div>\n  </div>\n    \n</ion-content>\n\n<ion-footer no-lines>\n  <ion-toolbar class="footer_button">\n    <button ion-button block color="dark" type="submit" (click)="FilterAccept(FilterForm)">ADD </button>\n    <button ion-button block color="yellow" type="button" (click)="ResetFilter()">RESET ALL</button>\n  </ion-toolbar>\n</ion-footer>\n    \n</form>'/*ion-inline-end:"/Volumes/D/RahulProjects/ionic2project/Optatu/Optatu android/Optatu/src/pages/filter/filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ })

},[379]);
//# sourceMappingURL=main.js.map
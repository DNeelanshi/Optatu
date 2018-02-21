import {Component, ElementRef, ViewChild, NgZone} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, ModalController, LoadingController} from 'ionic-angular';
import {NotificationPage} from '../notification/notification';
import {PopoverPage} from '../popover/popover';
import {Restaurant2Page} from '../restaurant2/restaurant2';
import {BarbequenationPage} from "../barbequenation/barbequenation";
import {MaplistfullPage} from "../maplistfull/maplistfull";
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Appsetting} from '../../providers/appsetting';
import {Common} from '../../providers/common';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as moment from 'moment';
import {MaplistPage} from '../maplist/maplist';
import {CalendarPage} from "../calendar/calendar";
import {CalendarComponentOptions, CalendarModalOptions, CalendarModal, CalendarResult} from 'ion2-calendar'
import {Geolocation} from '@ionic-native/geolocation';

/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()

@Component({
    selector: 'page-restaurants',
    templateUrl: 'restaurants.html',
})

export class RestaurantsPage {
    searched: any;
    seatlist: any;
    dateTime: Date;
    restaurants: any;
    minTime: string;
    headerdate: string;
    CategoryName: any;
    mindate: any;
    RestaurantForm: any = {
        query: '',
        restaurantName: '',
        date: '',
        time: '',
        seats: ''

    };
    @ViewChild('map') mapElement: ElementRef;
    autocompleteItems;
    public autocomplete: any;
    dateRange: {from: string; to: string;};
    type: 'moment'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
    optionsRange: CalendarComponentOptions = {
        pickMode: 'range'
    };
    service = new google.maps.places.AutocompleteService();
    public latitude;
    public longitude;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public popoverCtrl: PopoverController,
        public modalCtrl: ModalController,
        public formBuilder: FormBuilder,
        public appsetting: Appsetting,
        public http: Http,
        private zone: NgZone,
        public common: Common,
        private geolocation: Geolocation,
        public loadingCtrl: LoadingController
    ) {
        this.autocompleteItems = [];
        this.autocomplete = {
            query: this.navParams.get('address')
        };
        //alert('restaurant');

    }
    ngOnInit(): any {
        var d = new Date();
        this.mindate = moment(d).format('YYYY-MM-DD');

        console.log(this.mindate);
        console.log('ngOnInit');
        this.RestaurantForm = this.formBuilder.group({
            query: [this.navParams.get('address'), []],
            restaurantName: ['', []],
            date: ['', [Validators.required]],
            time: ['', [Validators.required]],
            seats: ['', [Validators.required]],
        });
    }
    updateSearch() {
        console.log('update');
        console.log(this.autocomplete.query);
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        let me = this;
        this.service.getPlacePredictions({input: this.autocomplete.query}, function (predictions, status) {
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
    }
    chooseItem(item) {
        console.log(item);
        this.autocomplete.query = item;
        this.autocompleteItems = [];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RestaurantsPage');
        console.log(this.common.cords);
        console.log(this.navParams.get('address'));
        console.log(this.navParams.get('categoryid'));
        console.log(this.navParams.get('categoryName'));
        var d = new Date();
        console.log(d);
        this.dateTime = new Date();
        this.minTime = moment(d).format('h:mm A');
        this.headerdate = moment(d).format('llll');
        this.CategoryName = this.navParams.get('categoryName');
        this.getDataByCategoryId();
        //        this.SeatList();

    }

    getDataByCategoryId() {
        var temp = this;
        //         this.geolocation.getCurrentPosition().then((resp) => {
        //            console.log(resp);
        var headers = this.appsetting.header();
        var postdata = {
            category_id: this.navParams.get('categoryid'),
            address: this.navParams.get('address')
        }
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'subcatbyid', serialized, headers).map(res => res.json()).subscribe(response => {
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
                })
                this.restaurants = response.subcatlist;
                console.log(this.restaurants);
            }
        })
        //        }).catch((error) => {
        //            console.log('Error getting location', error);
        //        });
    }

    Search(searchdata) {
        console.log(searchdata.value);

        console.log(searchdata.value.time);
        console.log(searchdata.value.date + ' ' + searchdata.value.time);
        var dateTime = searchdata.value.date + ' ' + searchdata.value.time;
        var d = new Date(dateTime);
        console.log(d);
        var t = searchdata.value.time.split(':');
        console.log(t.join('.'));
        var time = t.join('.');
        var isAfter = moment(d).isAfter(this.dateTime);
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
            } else {
                searchdata.value.seats = '';
            }

            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(() => {
                var headers = this.appsetting.header();
                var postdata = {
                    address: searchdata.value.query,
                    category: searchdata.value.restaurantName,
                    time: time,
                    date: searchdata.value.date,
                    seats: seat[0]
                }

                var serialized = this.appsetting.serializeObj(postdata);
                this.http.post(this.appsetting.url + 'subcatbysearchvalues', serialized, headers).map(res => res.json()).subscribe(response => {
                    console.log(response);
                    Loading.dismiss();
                    if (response.error == 0) {
                        if (response.subcatlist.length > 0) {
                            localStorage.setItem('searcheddata', JSON.stringify(searchdata.value));
                            localStorage.removeItem('filterdata');
                            localStorage.removeItem('sortsearch');
                            this.searched = response.subcatlist;
                            this.navCtrl.push(MaplistPage, {searchedlist: response.subcatlist, searcheddata: searchdata.value});
                        } else {
                            this.common.presentAlert('RESERVE NOW', 'No restaurant found')
                        }
                    } else if (response.code == 2) {
                        this.common.presentAlert('RESERVE NOW', 'Please use at least one field to fill the criteria that will be used to search.');
                    }
                })
            })
        } else {
            this.common.presentAlert('RESERVE NOW', 'Please select date,time and seats.');
        }

    }

    //    SeatList() {
    //        var headers = this.appsetting.header();
    //        this.http.get(this.appsetting.url + 'seatlist', headers).map(res => res.json()).subscribe(response => {
    //            console.log(response);
    //            if (response.error == 0) {
    //                this.seatlist = response.data;
    //            }
    //        })
    //    }

    notification() {
        this.navCtrl.push(NotificationPage);
    }


    PopoverModal() {
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present();
    }
    restaurant2() {
        this.navCtrl.push(Restaurant2Page);
    }

    barbequenation(event) {
        localStorage.setItem('selectedItem', JSON.stringify(event));
        this.navCtrl.push(BarbequenationPage);

    }
    MaplistfullModal(res) {
        let modal = this.modalCtrl.create(MaplistfullPage, {RestData: res});
        modal.present();
    }

    openCalendar(myEvent) {
        var opts = {
            cssClass: 'calendarcls'
        }
        const options: CalendarModalOptions = {
            disableWeeks: [0, 6]
        };

        let myCalendar = this.popoverCtrl.create(CalendarPage, {}, opts);
        myCalendar.present({
            ev: myEvent
        });


        myCalendar.onDidDismiss((date: CalendarResult, type: string) => {
            console.log(date);
            if (date != null) {
                this.mindate = moment(date).format('YYYY-MM-DD');
                this.autocomplete.date = this.mindate;
            } else {
                this.autocomplete.date = "";
            }
        });
    }


}

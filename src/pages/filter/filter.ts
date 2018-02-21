import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, LoadingController, ToastController, ModalController} from 'ionic-angular';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Appsetting} from '../../providers/appsetting';
import {Common} from '../../providers/common';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';
import {Geolocation} from '@ionic-native/geolocation';

/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-filter',
    templateUrl: 'filter.html',
})
export class FilterPage {
    seachformdata: any;
    sortsearch: any;
    longitude: number;
    lattitude: number;
    dateTime: Date;
    search: any;
    //MenuPrice: any = [];
    reservation: string;
    menuprice: string;
    filterdata: any;
    FilterForm: any;
    locationtype: any;
    menutype: any;
    menudata: any;
    postdata:any;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public modalCtrl: ModalController,
        public formBuilder: FormBuilder,
        public appsetting: Appsetting,
        public common: Common,
        public loadingCtrl: LoadingController,
        public http: Http,
        public geolocation: Geolocation,
    ) {
        //alert('filter');
        console.log(JSON.parse(localStorage.getItem('searcheddata')));
        this.seachformdata = JSON.parse(localStorage.getItem('searcheddata'))
    }
    ngOnInit(): any {
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
        } else {
            console.log('else');
            this.FilterForm = this.formBuilder.group({
                reservationType: [''],
                menuType: [''],
                menuPrice: [''],
                locationType: ['']
            });
        }
    }

    reservationSelect(eventdata) {
        console.log(eventdata);
        if (eventdata != undefined) {
            this.reservation = eventdata;
        }

    }
    public onChange(tag) {
        console.log('reservation');
        console.log(tag);
        this.reservation = '';

    }
    SelectedMenuType(event) {
        console.log(event);
        if (event != undefined) {
            this.menudata = event;
            console.log(this.menudata);

        }
    }

    SelectedMenuTypeDelete(event, index) {
        console.log(event);
        console.log(index);
        this.menudata.pop(index);
        console.log(this.menutype.length);
        if (this.menudata.length === 0) {
            this.menutype = '';
        }

    }

    SelectedMenuPrice(event) {
        console.log(event);
        if (event != undefined) {
            this.menuprice = event;
        }

    }

    public MenuPriceDelete() {
        console.log('menu delete')
        this.menuprice = '';

    }

    public LocationType(event) {
        console.log(event);
        if (event != undefined) {
            this.locationtype = event;
        }
    }

    locationtypeDelete() {
        this.locationtype = '';

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FilterPage');
        console.log();
        this.dateTime = new Date();
        this.geolocation.getCurrentPosition().then((resp) => {
            this.lattitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
        })

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    FilterAccept(filterForm) {
        console.log(filterForm.value);
        console.log(filterForm.value.menuPrice);


        if (filterForm.value.reservationType != undefined) {
            filterForm.value.reservationType = filterForm.value.reservationType;
        } else {
            filterForm.value.reservationType = '';
        }
        if (filterForm.value.menuType != undefined) {
            filterForm.value.menuType = filterForm.value.menuType;
        } else {
            filterForm.value.menuType = '';
        }
        if (filterForm.value.locationType != undefined) {
            filterForm.value.locationType = filterForm.value.locationType;
        } else {
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
                    latitude: this.lattitude,//search form latitude of address
                    longitude: this.longitude,//search form longitude of address
                    seats: this.seachformdata.seats,//search form selected seats
                    address: this.seachformdata.query,//search form address
                    category: this.seachformdata.restaurantName,//search form restaurant name
//                    date: this.sortsearch.subcat_date,//Endvalidity time which selected on sort.
                    distance: this.sortsearch.distance,//Selected distance if sort already applied
                    param: this.sortsearch.param,//Params which selected on sort like(distance,endvalidity)
                    subcat_date: this.seachformdata.date,//search form selected date
                    time: this.seachformdata.time//search form selected time

                }
            }
        } else {
        console.log('else part');
            var d = this.seachformdata.time.split(':');
            this.seachformdata.time = d.join('.');
            this.postdata = {
                res_type: filterForm.value.reservationType,
                menu_type: filterForm.value.menuType,
                location_type: filterForm.value.locationType,
                min_menu_price: '',
                max_menu_price: '',
                latitude: this.lattitude,//search form latitude of address
                longitude: this.longitude,//search form longitude of address
                seats: this.seachformdata.seats,//search form selected seats
                address: this.seachformdata.query,//search form address
                category: this.seachformdata.restaurantName,//search form restaurant name
//                date: '',//search form selected date
                time: this.seachformdata.time,//search form selected time
                param: '',
                distance: '',//Selected distance if sort already applied
                subcat_date: this.seachformdata.date,//search form selected date
            }
        }
        
        console.log(this.postdata);
        let options = this.appsetting.header();
        var serialized = this.appsetting.serializeObj(this.postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...'
        });
        Loading.present().then(() => {
            this.http.post(this.appsetting.url + 'subcategory/filters', serialized, options).map(res => res.json()).subscribe(response => {
                console.log(response);
                Loading.dismiss();
                if (response.error === 0) {
                    localStorage.setItem('filterdata', JSON.stringify(filterForm.value));
                    this.viewCtrl.dismiss({searchedlist: response.subcatlist});
                } else {
                    this.common.presentAlert('FILTER', 'Result not found');
                }
            })
        })
    }
    
    ResetFilter() {
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
        var isAfter = moment(d).isAfter(this.dateTime);
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
            Loading.present().then(() => {
                var headers = this.appsetting.header();
                var postdata = {
                    address: this.search.query,
                    category: this.search.restaurantName,
                    time: time,
                    date: this.search.date,
                    seats: seat[0]
                }
                var serialized = this.appsetting.serializeObj(postdata);
                this.http.post(this.appsetting.url + 'subcatbysearchvalues', serialized, headers).map(res => res.json()).subscribe(response => {
                    console.log(response);
                    Loading.dismiss();
                    if (response.error == 0) {
                        if (response.subcatlist.length > 0) {
                            this.viewCtrl.dismiss({searchedlist: response.subcatlist});
                        } else {
                            this.common.presentAlert('RESERVE NOW', 'No restaurant found')
                        }
                    } else if (response.code == 2) {
                        this.common.presentAlert('RESERVE NOW', 'Please use at least one field to fill the criteria that will be used to search.');
                    }
                })
            })
        } else {
        console.log('else');
            this.common.presentAlert('RESERVE NOW', 'Please select date,time and seats.');
        }
        this.viewCtrl.dismiss({searchedlist: this.navParams.get('searcheddata')});
    }

}

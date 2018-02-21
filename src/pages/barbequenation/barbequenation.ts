import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, ModalController, LoadingController} from 'ionic-angular';
import {NotificationPage} from '../notification/notification';
import {PopoverPage} from '../popover/popover';
import {Restaurant2Page} from '../restaurant2/restaurant2';
import {RestaurantviewPage} from "../restaurantview/restaurantview";
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CalendarPage} from "../calendar/calendar";
import {CalendarComponentOptions, CalendarModalOptions, CalendarModal, CalendarResult} from 'ion2-calendar'
import * as moment from 'moment';
import {MaplistfullPage} from '../maplistfull/maplistfull';
import {Filter1Page} from '../filter1/filter1';
import {Common} from '../../providers/common';
import {Http} from '@angular/http';
import {Appsetting} from '../../providers/appsetting';
/**
 * Generated class for the BarbequenationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-barbequenation',
    templateUrl: 'barbequenation.html',
})
export class BarbequenationPage {
    filterdata: any;
    headerdate: string;
    mindate: string;
    resdata: any;
    data: any = {};
    BarbForm: any = {
        date: '',
        time: '',
        seats: ''

    };
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public popoverCtrl: PopoverController,
        public formBuilder: FormBuilder,
        public modalCtrl: ModalController,
        public appsetting: Appsetting,
        public http: Http,
        public common: Common,
        public loadingCtrl: LoadingController
    ) {
    }
    ngOnInit(): any {
        var d = new Date();
        this.mindate = moment(d).format('YYYY-MM-DD');

        console.log(this.mindate);
        console.log('ngOnInit');
        this.BarbForm = this.formBuilder.group({
            date: ['', [Validators.required]],
            time: ['', [Validators.required]],
            seats: ['', [Validators.required]],
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BarbequenationPage');
        console.log(JSON.parse(localStorage.getItem('selectedItem')));
        this.resdata = JSON.parse(localStorage.getItem('selectedItem'));
        var d = new Date();
        console.log(d);
        this.headerdate = moment(d).format('llll');
        console.log(this.navParams.get('filterdata'));
    }

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

    restaurantview(event) {
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
        } else {
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
        } else {
            seat = '';
        }

        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...'
        });
        Loading.present().then(() => {
            var headers = this.appsetting.header();
            var postdata: any;
            if (this.filterdata != undefined) {
                postdata = {
                    id: this.resdata._id,
                    seats: seat[0],
                    time: time,
                    date: event.value.date,
                    location_type: this.filterdata.location_type,
                    min_menu_price: this.filterdata.min_menu_price,
                    max_menu_price: this.filterdata.max_menu_price,
                    menu_type: this.filterdata.menu_type,
                    res_type: this.filterdata.res_type
                }
            } else {
                postdata = {
                    id: this.resdata._id,
                    seats: seat[0],
                    time: time,
                    date: event.value.date,
                    location_type: '',
                    min_menu_price: '',
                    max_menu_price: '',
                    menu_type: '',
                    res_type: ''
                }
            }
            console.log(postdata);
            var serialized = this.appsetting.serializeObj(postdata);
            this.http.post(this.appsetting.url + 'subcatbynames', serialized, headers).map(res => res.json()).subscribe(response => {
                console.log(response);
                Loading.dismiss();
                if (response.error == 0) {
                    if (response.subcatlist.length > 0) {
                        this.navCtrl.push(RestaurantviewPage, {
                        paymentdata: JSON.parse(localStorage.getItem('selectedItem')),
                        selecteddata: postdata
                        });
                    } else {
                        this.common.presentAlert('RESERVE NOW', 'No restaurant found')
                    }
                } else if (response.code == 2) {
                    this.common.presentAlert('RESERVE NOW', 'Please use at least one field to fill the criteria that will be used to search.');
                }
            })
        })
       } else {
           this.common.presentAlert('RESERVE NOW', 'Make sure you selected date,time and table seats!')
       }
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
                this.data.date = this.mindate;
            } else {
                this.data.date = "";
            }
        });
    }
    MapView() {
        let modal = this.modalCtrl.create(MaplistfullPage, {RestData: JSON.parse(localStorage.getItem('selectedItem'))});
        modal.onDidDismiss(data => {
            console.log(data);
            if(data != undefined){
            this.filterdata = data.filterdata;
            }
        });
        modal.present();
    }
    FilterPage() {
        let filterModal = this.modalCtrl.create(Filter1Page);
        filterModal.onDidDismiss(data => {
            console.log(data);
            if(data != undefined){
            this.filterdata = data.filterdata;
            }
        });
        filterModal.present();
    }
}

import {Component, ElementRef, OnInit, OnDestroy} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, PopoverController} from 'ionic-angular';
import {NotificationPage} from '../notification/notification';
import {PopoverPage} from '../popover/popover';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
import {Common} from '../../providers/common';
import {timer} from 'rxjs/observable/timer';
import {take, map} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs/Rx';
import * as moment from 'moment';
import {ReservationdetailPage} from '../reservationdetail/reservationdetail';
/**
 * Generated class for the MyreservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-myreservation',
    templateUrl: 'myreservation.html',
})
export class MyreservationPage {
    headerdate: any;
    myreservation: any;
    userData: any;
    private future: any;
    private futureString: any;
    private diff: number;
    private $counter: Observable<number>;
    private subscription: Subscription;
    private message: any;
    interval:any;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public appsetting: Appsetting,
        public http: Http,
        public common: Common,
        public loadingCtrl: LoadingController,
        public popoverCtrl: PopoverController,
        public elm: ElementRef
    ) {
        //this.futureString = new Date();
       // alert('vikk');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MyreservationPage');
        this.userData = JSON.parse(localStorage.getItem('CurrentUser'));
        this.MyReservation();
        var d = new Date();
        console.log(d);
        this.headerdate = moment(d).format('llll');
    }

    dhms(t) {
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
    }


    countdown(data) {
        var temp = this;
        data.forEach(function(value,key){
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
        })
        
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    
    onCreate() {
        console.log('create here');
    }
    notification() {
        this.navCtrl.push(NotificationPage);
    }

    PopoverModal() {
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present();
    }

    MyReservation() {
        var temp = this;
        let options = this.appsetting.header();
        var postdata = {
            userid: this.userData._id
        }
        //alert(JSON.stringify(postdata))
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Loading...'
        });
        Loading.present().then(() => {
            this.http.post(this.appsetting.url + 'payment/myreservations', serialized, options).map(res => res.json()).subscribe(response => {
                console.log(response);
                Loading.dismiss();
                if (response.error == 0) {
                    this.myreservation = response.data;
                    
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


                } else {
                    this.common.presentAlert('My reservation', 'No result found');
                }
            })
        })
    }
reservationdetail(data){
    console.log(data);
    this.navCtrl.push(ReservationdetailPage,{selecteddata:data});
}
}

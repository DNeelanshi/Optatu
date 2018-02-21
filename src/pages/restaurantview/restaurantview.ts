import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, ModalController, AlertController} from 'ionic-angular';
import {NotificationPage} from '../notification/notification';
import {PopoverPage} from '../popover/popover';
import {Restaurant2Page} from '../restaurant2/restaurant2';
import {TryagainPage} from '../tryagain/tryagain';
import {PaymentPage} from '../payment/payment';
import * as moment from 'moment';
import {Common} from '../../providers/common';
import {SigninPage} from '../signin/signin';

/**
 * Generated class for the RestaurantviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-restaurantview',
    templateUrl: 'restaurantview.html',
})
export class RestaurantviewPage {
    currentUser: string;
    headerdate: any;
    currentuser: string;
    selected_data: any;
    resdetail: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public popoverCtrl: PopoverController,
        public common: Common,
        public alertCtrl: AlertController
    ) {
        console.log(this.common.cords);
    }

    ionViewDidLoad() {
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
        this.headerdate = moment(d).format('llll');
        console.log(this.navParams.get('paymentdata'));
        console.log(this.navParams.get('selecteddata'));
        this.resdetail = this.navParams.get('paymentdata');
        console.log(this.resdetail.coupon.startdate);
        this.resdetail.offer_start = moment(this.resdetail.coupon.startdate).format('llll');
        console.log(this.resdetail);
        if (localStorage.getItem('filterdata')) {
            console.log(JSON.parse(localStorage.getItem('filterdata')));
        }
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

    tryagain() {
        this.navCtrl.push(TryagainPage);
    }

    paymentPage(detail) {
        console.log(detail);
        console.log(JSON.parse(localStorage.getItem('searcheddata')));
        var search: any = JSON.parse(localStorage.getItem('searcheddata'));
        console.log(localStorage.getItem('CurrentUser'));
        this.currentUser = localStorage.getItem('CurrentUser');
        if (this.currentUser) {
            this.navCtrl.push(PaymentPage, {resDetail: detail});
        } else {
            this.presentConfirm();
            // this.common.presentAlert('Payment','Please login to comfirm this reservation!');
        }
    }

    presentConfirm() {
        let alert = this.alertCtrl.create({
            title: 'Payment',
            message: 'Please login to comfirm this reservation!',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Login',
                    handler: () => {
                        console.log('login clicked');
                        this.navCtrl.push(SigninPage);
                    }
                }
            ]
        });
        alert.present();
    }
}

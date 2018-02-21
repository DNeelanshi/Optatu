import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, ModalController,AlertController} from 'ionic-angular';
import {NotificationPage} from '../notification/notification';
import {PopoverPage} from '../popover/popover';

import * as moment from 'moment';
import {Common} from '../../providers/common';
import {SigninPage} from '../signin/signin';

/**
 * Generated class for the ReservationdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-reservationdetail',
    templateUrl: 'reservationdetail.html',
})
export class ReservationdetailPage {
    currentUser: string;
    headerdate: any;
    currentuser: string;
    selected_data: any;
    resdetail: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public popoverCtrl: PopoverController,
        public common:Common,
        public alertCtrl:AlertController
    ) {
    console.log(this.common.cords);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RestaurantviewPage');
        this.currentuser = JSON.parse(localStorage.getItem('CurrentUser'));
        console.log(this.currentuser);
        this.resdetail = this.navParams.get('selecteddata');
        var d = new Date();
        console.log(d);
        this.headerdate = moment(d).format('llll');
        
    }
    notification() {
        this.navCtrl.push(NotificationPage);
    }


   
   

}

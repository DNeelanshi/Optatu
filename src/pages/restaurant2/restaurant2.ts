import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { PopoverPage } from '../popover/popover';
import { MaplistPage } from "../maplist/maplist";
import { MyreservationPage } from "../myreservation/myreservation";
import { MaplistfullPage } from "../maplistfull/maplistfull";
import { BarbequenationPage } from "../barbequenation/barbequenation";
/**
 * Generated class for the Restaurant2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant2',
  templateUrl: 'restaurant2.html',
})
export class Restaurant2Page {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Restaurant2Page');
  }
  notification() {
    this.navCtrl.push(NotificationPage);
  }


  PopoverModal() {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present();
  }
 presentMapPage() {
    this.navCtrl.push(MaplistPage);
 }
 myreservationtype(){
    this.navCtrl.push(MyreservationPage);
  }
MaplistfullModal() {
    let modal = this.modalCtrl.create(MaplistfullPage);
    modal.present();
  }
barbequenationModal() {
    let modal = this.modalCtrl.create(BarbequenationPage);
    modal.present();
}
}
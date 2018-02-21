import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { PopoverPage } from '../popover/popover';
import { RestaurantsPage } from '../restaurants/restaurants';



/**
 * Generated class for the TryagainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tryagain',
  templateUrl: 'tryagain.html',
})
export class TryagainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl:PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TryagainPage');
  }

 notification(){
    this.navCtrl.push(NotificationPage);
  }


  PopoverModal() {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present();
  }

restaurants(){
    this.navCtrl.push(RestaurantsPage);
  }

}

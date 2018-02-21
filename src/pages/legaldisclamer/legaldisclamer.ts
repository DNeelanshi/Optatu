import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TermsPage} from "../terms/terms";
import { PrivacyPage} from "../privacy/privacy";
import { PopoverPage } from '../popover/popover';
import { Restaurant2Page } from '../restaurant2/restaurant2';
import { NotificationPage } from '../notification/notification';

/**
 * Generated class for the LegaldisclamerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-legaldisclamer',
  templateUrl: 'legaldisclamer.html',
})
export class LegaldisclamerPage {
  popoverCtrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LegaldisclamerPage');
  }
 terms(){
    this.navCtrl.push(TermsPage);
  }
   privacy(){
    this.navCtrl.push(PrivacyPage);
  }
  notification(){
    this.navCtrl.push(NotificationPage);
  }
PopoverModal() {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present();
  }


}

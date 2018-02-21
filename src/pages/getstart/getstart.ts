import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, ToastController, AlertController} from 'ionic-angular';
// import { HomePage } from '../home/home';
import {SigninPage} from '../signin/signin';
import {Network} from '@ionic-native/network';
/**
 * Generated class for the GetstartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-getstart',
    templateUrl: 'getstart.html',
})
export class GetstartPage {

    constructor(
        public platform: Platform,
        public navCtrl: NavController,
        public navParams: NavParams,
        public toastCtrl: ToastController,
        private network: Network,
        public alertCtrl: AlertController
    ) {
    }
    ngOnInit(): any {
        console.log('ngOnInit');
        this.tryagain();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad GetstartPage');
        this.platform.ready().then(() => {
            var lastTimeBackPress = 0;
            var timePeriodToExit = 2000;

            this.platform.registerBackButtonAction(() => {
                // get current active page
                let view = this.navCtrl.getActive();
                if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                    this.platform.exitApp(); //Exit from app
                } else {
                    // alert('Press back again to exit App?');
                    let toast = this.toastCtrl.create({
                        message: 'Press back again to exit from app?',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    lastTimeBackPress = new Date().getTime();
                }
            });
        });
    }


    // home(){
    //   this.navCtrl.push(HomePage);
    // }
    signin() {
        this.navCtrl.push(SigninPage);
    }

        tryagain() {
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            console.log('You are online');
        } else {
            console.log('you are offline');
            let alert = this.alertCtrl.create({
                message: '<img src="assets/img/network.png">',
                buttons: [{
                    text: 'Try again',
                    role: 'cancel',
                    handler: () => {
                        console.log('try again clicked');
                        this.tryagain();

                    }
                }]
            });
            alert.present();
        }
    }
}

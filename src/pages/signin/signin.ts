import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Events, ToastController, LoadingController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {ForgotPage} from "../forgot/forgot";
import {AlertController, Platform} from 'ionic-angular';
import {OptatumanagerPage} from "../optatumanager/optatumanager";
import {CreateaccuntPage} from "../createaccunt/createaccunt";
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Appsetting} from '../../providers/appsetting';
import {Common} from '../../providers/common';
import {Http} from '@angular/http';
import {UniqueDeviceID} from '@ionic-native/unique-device-id';
import {Network} from '@ionic-native/network';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-signin',
    templateUrl: 'signin.html',
})
export class SigninPage {

    SigninForm: FormGroup;
    public type = 'password';
    public showPass = false;
    public iconname = 'eye';
    constructor(
        public platform: Platform,
        public navCtrl: NavController,
        public navParams: NavParams,
        private alertCtrl: AlertController,
        public formBuilder: FormBuilder,
        public appsetting: Appsetting,
        public http: Http,
        private uniqueDeviceID: UniqueDeviceID,
        public events: Events,
        public common: Common,
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingController,
        private network: Network

    ) {
        // alert('signin ');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SigninPage');
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
    ngOnInit(): any {
        console.log('ngOnInit');
        this.SigninForm = this.formBuilder.group({
            email: ['', [Validators.required, this.emailValidator.bind(this)]],
            password: ['', [Validators.required]],
        });
       // this.tryagain();
    }

    emailValidator(control: FormControl): {[s: string]: boolean} {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return {invalidEmail: true};
        }
    }
    isValid(field: string) {
        let formField = this.SigninForm.get(field);
        return formField.valid || formField.pristine;
    }
    showPassword() {
        console.log('showpassword');
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
            this.iconname = 'eye-off';
        } else {
            this.type = 'password';
            this.iconname = 'eye';
        }
    }
    Signin(signindata) {
        console.log(signindata.value);
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            //      this.uniqueDeviceID.get().then((uuid: any) => {
            //  console.log(uuid)
            let options = this.appsetting.header();
            var postdata = {
                email: signindata.value.email,
                password: signindata.value.password,
                // deviceid:uuid,
                role: 'user'
            }
            var serialized = this.appsetting.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(() => {
                this.http.post(this.appsetting.url + 'users/login', serialized, options).map(res => res.json()).subscribe(response => {
                    console.log(response);
                    Loading.dismiss();
                    if (response.success == true) {
                        localStorage.setItem('CurrentUser', JSON.stringify(response.userinfo));
                        this.events.publish('Loggedin', 'loginpage');
                        this.appsetting.userprofile = response.userinfo;
                        this.navCtrl.push(HomePage);
                    } else {
                        this.common.presentAlert('Login', response.message);
                    }

                })
                       })
 // }).catch((error: any) => console.log(error));

        } else {
            let toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });

            toast.onDidDismiss(() => {
                console.log('Dismissed toast');
            });

            toast.present();
        }

    }

    home() {
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        this.events.publish('skip', 'skip');
        this.navCtrl.push(HomePage);
        } else {
            let toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });

            toast.onDidDismiss(() => {
                console.log('Dismissed toast');
            });

            toast.present();
        }
    }
    forgot() {
        this.navCtrl.push(ForgotPage);
    }


    presentConfirm() {
        let alert = this.alertCtrl.create({
            title: 'ABOUT OPTATU MANAGER',
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            cssClass:'popuptxt',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                    }
                }
            ]
        });
        alert.present();
    }


    optatumanager() {
        this.navCtrl.push(OptatumanagerPage);
    }


    createaccunt() {
        this.navCtrl.push(CreateaccuntPage);
    }

//    tryagain() {
//        let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
//            console.log('you are offline');
//            console.log(disconnectSubscription);
//            let alert = this.alertCtrl.create({
//                message: '<img src="assets/img/network.png">',
//                buttons: [{
//                    text: 'Try again',
//                    role: 'cancel',
//                    handler: () => {
//                        console.log('try again clicked');
//                        this.tryagain();
//
//
//                    }
//                }]
//            });
//            alert.present();
//        });
//        let connectSubscription = this.network.onConnect().subscribe(() => {
//            console.log('network connected!');
//            console.log(connectSubscription);
//            // stop disconnect watch
////            disconnectSubscription.unsubscribe();
////            connectSubscription.unsubscribe();
//            // We just got a connection but we need to wait briefly
//            // before we determine the connection type. Might need to wait.
//            // prior to doing any api requests as well.
//            //  setTimeout(() => {
//            //    if (this.network.type === 'wifi') {
//            //      console.log('we got a wifi connection, woohoo!');
//            //    }
//            //  }, 3000);
//        });
//    }

}

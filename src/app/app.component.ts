import {Component, ViewChild} from '@angular/core';
import {App, Nav, Platform, ModalController, Events, AlertController, ToastController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HomePage} from '../pages/home/home';
import {GetstartPage} from '../pages/getstart/getstart';
import {MyreservationPage} from "../pages/myreservation/myreservation";
import {RecentlyviewPage} from "../pages/recentlyview/recentlyview";
import {SettingPage} from "../pages/setting/setting";
import {LegaldisclamerPage} from "../pages/legaldisclamer/legaldisclamer";
import {HelpPage} from "../pages/help/help";
import {ShareappPage} from "../pages/shareapp/shareapp";
import {ChangepasswordPage} from "../pages/changepassword/changepassword";
import {Http} from '@angular/http';
import {Appsetting} from '../providers/appsetting';
import {SigninPage} from '../pages/signin/signin';
import {Network} from '@ionic-native/network';
import {SocialSharing} from '@ionic-native/social-sharing';
import {Keyboard} from '@ionic-native/Keyboard';
@Component({
    templateUrl: 'app.html'
})

export class MyApp {
    userimage: any;

    currentuser: any;
    published_event: any;
    @ViewChild(Nav) nav: Nav;

    rootPage: any;// = GetstartPage;
    activePage: any;
    text: any = {
        Hours: "H",
        Minutes: "M",
        Seconds: "S",
    };
    pages: Array<{title: string, component: any, icon: any}>;

    constructor(
        public app: App,
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        public modalCtrl: ModalController,
        public appsetting: Appsetting,
        public http: Http,
        public events: Events,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController,
        private network: Network,
        private socialSharing: SocialSharing,
        public keyboard:Keyboard
    ) {

        // alert('updated dfgdf');
        this.initializeApp();
        events.subscribe('Loggedin', (Loggedin) => {
            //alert("vikki");
            console.log(Loggedin);
            console.log('Loggedin');
            this.getUser();
            this.pages = [
                {title: 'Home', component: HomePage, icon: 'assets/img/home.png'},
                {title: 'My Reservation', component: MyreservationPage, icon: 'assets/img/myreservation.png'},
                {title: 'Recently Viewed', component: RecentlyviewPage, icon: 'assets/img/view.png'},
                {title: 'Settings', component: SettingPage, icon: 'assets/img/settings.png'},
                {title: 'Legal Disclamer', component: LegaldisclamerPage, icon: 'assets/img/legal.png'},
                {title: 'Help', component: HelpPage, icon: 'assets/img/help.png'},
                //                {title: 'Change Password', component: ChangepasswordPage, icon: 'assets/img/help.png'},
                //                {title: 'Share This App', component: ShareappPage, icon: 'assets/img/share.png'},
            ];
        })
        // used for an example of ngFor and navigation
        events.subscribe('skip', (skip) => {
            console.log('skip');
            this.currentuser = null;
            this.pages = [
                {title: 'Sign in or create account', component: SigninPage, icon: 'assets/img/person.png'},
                {title: 'Legal Disclamer', component: LegaldisclamerPage, icon: 'assets/img/legal.png'},
                //                {title: 'Share This App', component: ShareappPage, icon: 'assets/img/share.png'},


            ];
        })

    }


    initializeApp() {
        this.events.publish('Loggedin', 'loginpage');
        this.platform.ready().then(() => {

            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.statusBar.hide();
            console.log('rahul');
            console.log(window.navigator.onLine);
            if (window.navigator.onLine == true) {
                console.log('You are online');
            } else {
                this.tryagain();

            }
            if (localStorage.getItem('CurrentUser')) {
                this.rootPage = HomePage;
            } else {
                this.rootPage = GetstartPage;
            }
            if (this.platform.is('android')) {
               // alert('android');
                let appEl = <HTMLElement>(document.getElementsByTagName('ION-APP')[0]),
                    appElHeight = appEl.clientHeight;

                this.keyboard.disableScroll(true);

                window.addEventListener('native.keyboardshow', (e) => {
                    appEl.style.height = (appElHeight - (<any> e).keyboardHeight) + 'px';
                });

                window.addEventListener('native.keyboardhide', () => {
                    appEl.style.height = '100%';
                });
            }

        });

    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage = page;
    }
    public checkActivePage(page): boolean {
        return page === this.activePage;
    }

    getUser() {

        console.log(JSON.parse(localStorage.getItem('CurrentUser'))._id);
        let options = this.appsetting.header();
        var postdata = {
            id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
        }
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/userdetailbyid', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            if (response.error == 0) {
                this.userimage = response.data.image;
                //alert(this.userimage);
                console.log('userimage');
                console.log(this.userimage);
                this.currentuser = null;
                this.currentuser = response.data;
                console.log(this.currentuser);
            }



        })
    }

    logout() {
        let alert = this.alertCtrl.create({
            title: 'Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: () => {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        console.log('Yes clicked');
                        localStorage.removeItem('CurrentUser');
                        localStorage.removeItem('searcheddata');
                        localStorage.removeItem('filterdata');
                        this.nav.setRoot(GetstartPage);
                        // this.rootPage = GetstartPage;
                    }
                }
            ]
        });
        alert.present();
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
    shareapp() {
        // share with all social media and supporting email
        var message = "Are you not on Optatu yet? Get it now!";
        var subject = "Invitation to join Optatu";
        var url = 'https://www.google.co.in';
        this.socialSharing.share(message, subject, '', url).then(() => {
            // Sharing via social media is possible
            console.log('Can share');
        }).catch(() => {
            // Sharing via social media is not possible
            console.log('Can not share');
        });
    }
}

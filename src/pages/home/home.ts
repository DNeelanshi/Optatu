import {Component, ElementRef, ViewChild, NgZone} from '@angular/core';
import {NavController, ModalController, ViewController, PopoverController, Events, AlertController} from 'ionic-angular';
import {HotelsPage} from '../hotels/hotels';
import {NotificationPage} from '../notification/notification';
import {PopoverPage} from '../popover/popover';
import {RestaurantsPage} from '../restaurants/restaurants';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
import {Common} from '../../providers/common';
import * as moment from 'moment';
/*********Native plugins *************/
import {Geolocation} from '@ionic-native/geolocation';
import {NativeGeocoder, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';

/*******Google map autocomplete*****/
import 'rxjs/add/operator/map';
declare var google;
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    date: any;
    @ViewChild('map') mapElement: ElementRef;
    homedata: any;
    autocompleteItems;
    public autocomplete;
    service = new google.maps.places.AutocompleteService();
    public latitude: number;
    public longitude: number;
    constructor(
        public navCtrl: NavController,
        public modalCtrl: ModalController,
        public viewCtrl: ViewController,
        public popoverCtrl: PopoverController,
        public http: Http,
        public appsetting: Appsetting,
        public events: Events,
        public common: Common,
        private geolocation: Geolocation,
        private nativeGeocoder: NativeGeocoder,
        private zone: NgZone,
        public alertCtrl: AlertController
    ) {
        // alert('asdkfajsdfhj');
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };

    }
    ngOnInit(): any {
        console.log('ngOnInit');
        this.tryagain();
    }
    ionViewDidLoad() {
        console.log(new Date());
        var d = new Date();
        this.date = moment(d).format('llll');
        console.log(this.date);
        if (localStorage.getItem('CurrentUser')) {
            this.events.publish('Loggedin', 'loginpage');
        } else {
            this.events.publish('skip', 'skip');
        }
        console.log('ionViewDidLoad HomePage');
        let options = this.appsetting.header();
        this.http.get(this.appsetting.url + 'categorylist', options).map(res => res.json()).subscribe(response => {
            console.log(response);
            if (response.error == 0) {
                this.homedata = response.data.reverse();
                console.log(this.homedata);
            }

        })
        this.Getlocation();
    }
    Getlocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);

            this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
                .then((result: NativeGeocoderReverseResult) => {
                    console.log('reverse geocoding');
                    console.log(JSON.stringify(result));
                    //this.autocomplete.query = result.subLocality + ',' + result.locality + ',' + result.administrativeArea + ',' + result.postalCode + ',' + result.countryCode;
                }).catch((error: any) => {console.log(error)});
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }

    updateSearch() {
        console.log('update');
        console.log(this.autocomplete.query);
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        let me = this;
        this.service.getPlacePredictions({input: this.autocomplete.query}, function (predictions, status) {
            me.autocompleteItems = [];
            console.log('here');
            me.zone.run(function () {
                predictions.forEach(function (prediction) {
                    //console.log(prediction);
                    me.autocompleteItems.push(prediction.description);
                });
                console.log(me.autocompleteItems);
            });
        });
    }
    chooseItem(item) {
        console.log(item);
        this.autocomplete.query = item;
        this.autocompleteItems = [];
    }


    hotels() {
        this.navCtrl.push(HotelsPage);
    }

    notification() {
        this.navCtrl.push(NotificationPage);
    }


    PopoverModal() {
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present();
    }

    restaurants(catid, catname) {
        console.log(catid);
        //address: this.autocomplete.query
        this.navCtrl.push(RestaurantsPage, {address: this.autocomplete.query, categoryid: catid, categoryName: catname});
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

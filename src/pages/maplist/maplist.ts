import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams, Events, ModalController, ViewController, PopoverController, AlertController} from 'ionic-angular';
import {PopoverPage} from '../popover/popover';
import {NotificationPage} from '../notification/notification';
import {FilterPage} from "../filter/filter";
import {SortdistancePage} from "../sortdistance/sortdistance";
import {Totalnation2Page} from "../totalnation2/totalnation2";
import * as moment from 'moment';
/*******Plugin for google maps********/
import {Geolocation} from '@ionic-native/geolocation';
import {Common} from '../../providers/common';

/**
 * Generated class for the MaplistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@Component({
    selector: 'page-maplist',
    templateUrl: 'maplist.html',
})
export class MaplistPage {
    search: any;
    myMap: HTMLElement;
    headerdate: string;
    latlong: {lat: number; lng: number;}[];
    @ViewChild('map') mapElement: ElementRef;
    map: any;
    searchedlist: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public modalCtrl: ModalController,
        public viewCtrl: ViewController,
        public popoverCtrl: PopoverController,
        public alertCtrl: AlertController,
        public geolocation: Geolocation,
        public events: Events,
        public common: Common
    ) {
    }

    ionViewDidLoad() {
       // alert('maplist gg');
        var d = new Date();
        console.log(d);
        this.headerdate = moment(d).format('llll');
        console.log('ionViewDidLoad MaplistPage');
        console.log(this.navParams.get('searchedlist'));
        this.searchedlist = this.navParams.get('searchedlist');
        console.log(this.navParams.get('searcheddata'));
        this.search = this.navParams.get('searcheddata');
        var a = this.navParams.get('searcheddata').time.split(':');
        if (a[0] > 11) {
            console.log(this.navParams.get('searcheddata').time + ' PM');
            this.search.time = this.navParams.get('searcheddata').time + ' PM';
        } else {
            this.search.time = this.navParams.get('searcheddata').time + ' AM';
        }
       
        console.log(this.search);
        this.myMap = document.getElementById('map');
        this.loadMap();
    }

    PopoverModal() {
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present();
    }
    notification() {
        this.navCtrl.push(NotificationPage);
    }
    SortdistancepresentModal() {
        var temp = this;
        let modal = this.modalCtrl.create(SortdistancePage, {searchformdata: this.navParams.get('searcheddata')});
        modal.onDidDismiss(data => {
            console.log(data.searchedlist);
            if (data.searchedlist) {
                data.searchedlist.forEach(function (value, key) {
                    //                    console.log(value);
                    //                    console.log(key);
                    //                    console.log(value.loc.coordinates[1]);
                    var a = temp.common.distance(temp.common.cords.latitude, temp.common.cords.longitude, value.loc.coordinates[1], value.loc.coordinates[0], 'K');
                    console.log('Distance==' + a);
                    value.distance = a;
                })
                this.searchedlist = data.searchedlist;
                this.loadMap();
            } else {
                this.searchedlist = null;
                this.loadMap();
            }
        });
        modal.present();
    }

    FilterpresentModal() {
        var temp = this;
        let modal = this.modalCtrl.create(FilterPage, {searcheddata: this.searchedlist});
        modal.onDidDismiss(res => {
            console.log(res);
            if (res.searchedlist) {
                res.searchedlist.forEach(function (value, key) {
                    console.log(value);
                    var a = temp.common.distance(temp.common.cords.latitude, temp.common.cords.longitude, value.loc.coordinates[1], value.loc.coordinates[0], 'K');
                    console.log('Distance==' + a);
                    value.distance = a;
                })
                //delete this.searchedlist;
                this.searchedlist = res.searchedlist;
                console.log(this.searchedlist);
                this.loadMap()
            } else {
                this.searchedlist = null;
                this.loadMap();
            }
            console.log(this.searchedlist);
        });
        modal.present();
    }
    //  dismiss() {
    //     this.viewCtrl.dismiss();
    //   }


    totalnation2Page(select,index) {
        console.log(select);
        this.navCtrl.push(Totalnation2Page, {selectedRest: select, searchedvalue: this.navParams.get('searcheddata'),indexno:index+1});
    }

    loadMap() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

            let mapOptions = {
                center: latLng,
                zoom: 11,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            console.log(this.map);
            this.searchedlist.forEach((value, key) => {

                console.log(value);
                console.log(key);
                console.log(value.loc.coordinates[1]);
                var lab = key + 1;
                var val = "" + lab;
                console.log(val);
                var a = this.common.distance(this.common.cords.latitude, this.common.cords.longitude, value.loc.coordinates[1], value.loc.coordinates[0], 'K');
                console.log('Distance==' + a);
                value.distance = a;

                var myLatLng = {lat: value.loc.coordinates[1], lng: value.loc.coordinates[0]};
                let marker1 = new google.maps.Marker({
                    map: this.map,
                    icon: 'assets/img/icon-4.png',
                    //label: val,
                    animation: google.maps.Animation.DROP,
                    position: latLng
                });
                let marker = new google.maps.Marker({
                    map: this.map,
                    icon: 'assets/img/location.png',
                    label: val,
                    animation: google.maps.Animation.DROP,
                    position: myLatLng
                });
                google.maps.event.addListener(marker, "click", function (clickedres) {
                    console.log(clickedres.latLng.lat());
                    console.log(clickedres.latLng.lng())
                    console.log(value);
                    console.log('clicked on marker');


                })

                value.coupon.enddate = value.coupon.enddate.replace(/T/gi, " ");
                value.coupon.enddate = value.coupon.enddate.replace(/:00.000Z/gi, " ");
                value.coupon.enddate = moment(value.coupon.enddate).format('llll');

                value.coupon.startdate = value.coupon.startdate.replace(/T/gi, " ");
                value.coupon.startdate = value.coupon.startdate.replace(/:00.000Z/gi, " ");

                value.start_date = value.start_date.replace(/T/gi, " ");
                value.start_date = value.start_date.replace(/:00.000Z/gi, " ");

                value.end_date = value.end_date.replace(/T/gi, " ");
                value.end_date = value.end_date.replace(/:00.000Z/gi, " ");
            });


            console.log(this.searchedlist);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }

}




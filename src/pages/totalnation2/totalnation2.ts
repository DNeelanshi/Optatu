import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AddfilterPage} from "../addfilter/addfilter";
import * as moment from 'moment';
import {RestaurantviewPage} from '../restaurantview/restaurantview';
/**
 * Generated class for the Totalnation2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
    selector: 'page-totalnation2',
    templateUrl: 'totalnation2.html',
})

export class Totalnation2Page {
    index: any;
    stateparamdata: any;
    @ViewChild('map') mapElement: ElementRef;
    headerdate: string;
    map: any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        var d = new Date();
        console.log(d);
        this.headerdate = moment(d).format('llll');
        console.log('ionViewDidLoad Totalnation2Page');
        console.log(this.navParams.get('indexno'));
        this.index = this.navParams.get('indexno');
        console.log(this.index);
        console.log(this.navParams.get('searchedvalue'));
        console.log(this.navParams.get('selectedRest'));
        this.stateparamdata = this.navParams.get('selectedRest');
        console.log(this.stateparamdata);
        this.stateparamdata.time =  this.navParams.get('searchedvalue').time;
//        var a = this.navParams.get('searchedvalue').time.split(':');
//        if (a[0] > 11) {
//            console.log(this.navParams.get('searchedvalue').time + ' PM');
//            this.stateparamdata.time = this.navParams.get('searchedvalue').time + ' PM';
//        } else {
//            this.stateparamdata.time = this.navParams.get('searchedvalue').time + ' AM';
//        }
        console.log(this.stateparamdata);
        this.loadMap();
    }
    addfilter() {
        this.navCtrl.push(AddfilterPage);
    }
    loadMap() {
        let latLng = new google.maps.LatLng(this.stateparamdata.loc.coordinates[1], this.stateparamdata.loc.coordinates[0]);

        let mapOptions = {
            center: latLng,
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        console.log(this.map);
        var myLatLng = {lat: this.stateparamdata.loc.coordinates[1], lng: this.stateparamdata.loc.coordinates[0]};
        let marker = new google.maps.Marker({
            map: this.map,
            icon: 'assets/img/location.png',
            label: ''+this.navParams.get('indexno'),
            animation: google.maps.Animation.DROP,
            position: myLatLng
        });
        var infowindow = new google.maps.InfoWindow({
            content: this.stateparamdata.category
        });
        google.maps.event.addListener(marker, "click", function (clickedres) {
            console.log(clickedres.latLng.lat());
            console.log(clickedres.latLng.lng())
            console.log('clicked on marker');

            infowindow.open(this.map, marker);


        })


    }
    reserve() {
        console.log(this.navParams.get('searchedvalue'));
        this.navCtrl.push(RestaurantviewPage, {paymentdata: this.stateparamdata, selecteddata: this.navParams.get('searchedvalue')});
    }
}

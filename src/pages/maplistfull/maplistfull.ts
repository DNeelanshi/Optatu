import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import * as moment from 'moment';
/*************Used Plugins ****************/
import {Geolocation} from '@ionic-native/geolocation';
import {RestaurantviewPage} from '../restaurantview/restaurantview';
import {BarbequenationPage} from '../barbequenation/barbequenation';

/**
 * Generated class for the MaplistfullPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
    selector: 'page-maplistfull',
    templateUrl: 'maplistfull.html',
})
export class MaplistfullPage {
    headerdate: string;
    mapdata: any;
    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('directionsPanel') directionsPanel: ElementRef;
    map: any;
    constructor(
        public navCtrl: NavController,
        public viewCtrl: ViewController,
        public navParams: NavParams,
        public geolocation: Geolocation
    ) {
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad MaplistfullPage');
        console.log(this.navParams.get('RestData'));
        this.mapdata = this.navParams.get('RestData');
        console.log(parseFloat(this.mapdata.loc.coordinates[0]));
        var d = new Date();
        console.log(d);
        this.headerdate = moment(d).format('llll');
        this.loadMap();
    }
    closeModal(): void {
        this.viewCtrl.dismiss();
    }
    /***************** Function for loadmap and get the direction and show custom pointer ***********/
    loadMap() {
        var temp = this;
        // alert('navigation');
        this.geolocation.getCurrentPosition().then((resp) => {
            let lat = this.mapdata.loc.coordinates[1];// coordinates[1] used for latitude
            let long = this.mapdata.loc.coordinates[0];// coordinates[0] used for longitude
            console.log('current lat=' + resp.coords.latitude);
            console.log('current long=' + resp.coords.longitude);
            console.log(lat);
            console.log(long);

            let directionsService = new google.maps.DirectionsService;
            let directionsDisplay = new google.maps.DirectionsRenderer;
            // Origin lat long
            var originlatlng = new google.maps.LatLng({lat: resp.coords.latitude, lng: resp.coords.longitude});
            let mapOptions = {
                center: originlatlng,
                zoom: 3,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            }
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


            console.log(this.map);
            directionsDisplay.setMap(this.map);
            directionsDisplay.setOptions({suppressMarkers: true});
            let destLatLng = new google.maps.LatLng({lat: lat, lng: long});// Destination lat long
            console.log(destLatLng);

            directionsService.route({
                origin: originlatlng,
                destination: destLatLng,
                travelMode: google.maps.TravelMode['DRIVING'],
                unitSystem: google.maps.UnitSystem.METRIC
            }, (response, status) => {
                console.log(response);
                console.log(response.request.destination.location.lat());
                console.log(response.request.destination.location.lng());
                console.log(status);
                if (status == google.maps.DirectionsStatus.OK) {
                    var infowindow = new google.maps.InfoWindow({
                        content: ''+this.mapdata.category
                    });
                    var icon = {
                        url: 'assets/img/restaurant.png', // url
                        scaledSize: new google.maps.Size(30, 30), // scaled size
                    };
                    let originmarker = new google.maps.Marker({
                        map: this.map,
                        icon: 'assets/img/icon-4.png',
                        animation: google.maps.Animation.DROP,
                        position: originlatlng
                    });
                    let marker = new google.maps.Marker({
                        map: this.map,
                        icon: icon,
                        animation: google.maps.Animation.DROP,
                        position: destLatLng
                    });

                    google.maps.event.addListener(marker, "click", function (clickedres) {
                        console.log(clickedres.latLng.lat());
                        console.log(clickedres.latLng.lng())
                        console.log('clicked on marker');
                        infowindow.open(temp.map, marker);
                    })
                    new google.maps.DirectionsRenderer({
                        map: this.map,
                        directions: response,
                        suppressMarkers: true
                    });
                    directionsDisplay.setDirections(response);

                } else {
                    console.warn(status);
                }

            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });

    }
    makeReservation(resdata) {
        console.log(resdata);
//        resdata.start_date = resdata.start_date.replace(/T/gi, " ");
//        resdata.start_date = resdata.start_date.replace(/:00.000Z/gi, " ");
//
//        resdata.end_date = resdata.end_date.replace(/T/gi, " ");
//        resdata.end_date = resdata.end_date.replace(/:00.000Z/gi, " ");
//
//        resdata.coupon.enddate = resdata.coupon.enddate.replace(/T/gi, " ");
//        resdata.coupon.enddate = resdata.coupon.enddate.replace(/:00.000Z/gi, " ");
//        resdata.coupon.enddate = moment(resdata.coupon.enddate).format('llll');
//
//        resdata.coupon.startdate = resdata.coupon.startdate.replace(/T/gi, " ");
//        resdata.coupon.startdate = resdata.coupon.startdate.replace(/:00.000Z/gi, " ");
//        resdata.coupon.startdate = moment(resdata.coupon.startdate).format('llll');
        this.navCtrl.push(BarbequenationPage, {resdata: resdata});
        
    }

}

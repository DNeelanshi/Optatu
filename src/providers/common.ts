import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
/*********Native plugins *************/
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the Appsetting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Common {
    public cords:any;
  constructor(
      public http: Http,
      private alertCtrl: AlertController,
      private geolocation: Geolocation
      ) {
    console.log('Hello Common Provider');
    this.currentlocation();
  }

presentAlert(title,subtitle) {
  let alert = this.alertCtrl.create({
    title: title,
    subTitle: subtitle,
    //buttons: ['Ok']
  });
  setTimeout(function() {
      alert.dismiss();
    }, 3000);
  return alert.present();
}
currentlocation(){
     this.geolocation.getCurrentPosition().then((resp) => {
            console.log(resp);
            this.cords = resp.coords;
             }).catch((error) => {
            console.log('Error getting location', error);
        });
}
    distance(lat1, lon1, lat2, lon2, unit) {
        console.log(lat1);
        console.log(lon1);
        console.log(lat2);
        console.log(lon2);
        
        var radlat1 = Math.PI * lat1 / 180
        var radlat2 = Math.PI * lat2 / 180
        var theta = lon1 - lon2
        var radtheta = Math.PI * theta / 180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {dist = dist * 1.609344}
       // if (unit == "N") {dist = dist * 0.8684}
        console.log(dist);
        return Math.round(dist);
    }
}

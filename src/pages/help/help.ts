import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-help',
    templateUrl: 'help.html',
})
export class HelpPage {
    help: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public http: Http,
        public appsetting: Appsetting
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HelpPage');
        let options = this.appsetting.header();
        var postdata = {
            title: 'Help',
        }
        
        let serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'staticpage/staticpagebytitle', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            this.help = response.staticpage[0];


        })
    }

}

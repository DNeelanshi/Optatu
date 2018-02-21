import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-terms',
    templateUrl: 'terms.html',
})
export class TermsPage {
    terms: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public http: Http,
        public appsetting: Appsetting
    ) {
    
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TermsPage');
        let options = this.appsetting.header();
        var postdata = {
            title: 'Terms & conditions',
        }
        let serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'staticpage/staticpagebytitle', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            this.terms = response.staticpage[0];


        })
    }

}

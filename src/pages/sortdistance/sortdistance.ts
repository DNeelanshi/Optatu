import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
import {MaplistPage} from '../maplist/maplist';
import * as moment from 'moment';
/*************Used Plugins ****************/
import {Geolocation} from '@ionic-native/geolocation';

/**
 * Generated class for the SortdistancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sortdistance',
    templateUrl: 'sortdistance.html',
})
export class SortdistancePage {
    [x: string]: any;
    params: any;
    range: number;
    sortdistance: any = {
        distance: '',
        range: '',
        endvalidity: '',
        select: '',
        date: ''
    };
    filterdata: any;
    lattitude: any;
    longitude: any;
    currentdate: any;
    searchformvalues: any;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public formBuilder: FormBuilder,
        public appsetting: Appsetting,
        public geolocation: Geolocation,
        public http: Http
    ) {
        // alert('sort');
    }
    ngOnInit(): any {
        console.log('ngOnInit');
        this.sortdistance = this.formBuilder.group({
            distance: [true, [this.checkbox.bind(this)]],
            range: [''],
            endvalidity: [true, [this.checkbox.bind(this)]],
            date: ['']
        })
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SortdistancePage');
        var d = new Date();
        this.currentdate = moment(d).format('YYYY-MM-DD');
        console.log(this.currentdate);
        this.geolocation.getCurrentPosition().then((resp) => {
            this.lattitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
        })
        console.log(this.navParams.get('searchformdata'));
        this.searchformvalues = this.navParams.get('searchformdata');
        console.log(this.searchformvalues);
    }

    Close() {
        this.viewCtrl.dismiss();
    }
    checkbox(legal) {
        console.log(legal.value);
        if (legal.value == false) {
            return {legal: false}
        }

    }


    short(sort) {
        var postdata;
        console.log(sort.value);
        if (sort.value.distance == true) {
            this.params = 'distance'//sort.value.distance;
            sort.value.range = sort.value.range;
        }else{
            this.params = ''//sort.value.distance;
            sort.value.range = '';
        }
        if (sort.value.endvalidity == true) {
            this.params = 'endvalidity' //sort.value.endvalidity;
            sort.value.date = sort.value.date;
            this.searchformvalues.time = sort.value.date;
            console.log(sort.value.date);
            console.log(this.searchformvalues.time);
        }else{
            this.params = '' //sort.value.endvalidity;
            sort.value.date = '';
            //this.searchformvalues.time = '';
        } 
        console.log(this.searchformvalues);
        let options = this.appsetting.header();
        var t = this.searchformvalues.time.split(':');
        this.searchformvalues.time = t.join('.');
        if (localStorage.getItem('filterdata')) {
            this.filterdata = JSON.parse(localStorage.getItem('filterdata'));
            console.log(this.filterdata);
            postdata = {
                res_type: this.filterdata.reservationType,
                menu_type: this.filterdata.menuType,
                location_type: this.filterdata.locationType,
                min_menu_price: '',
                max_menu_price: '',
                latitude: this.lattitude,//search form latitude of address
                longitude: this.longitude,//search form longitude of address
                seats: this.searchformvalues.seats,//search form selected seats
                address: this.searchformvalues.query,//search form address
                category: this.searchformvalues.restaurantName,//search form restaurant name
//                date: sort.value.date,//sort form selected date
                time: this.searchformvalues.time,//search form selected time
                param: this.params,
                distance: sort.value.range,//sort form selected distance
                subcat_date: this.searchformvalues.date,//search form selected date
            }
        } else {
            postdata = {
                res_type: '',
                menu_type: '',
                location_type: '',
                min_menu_price: '',
                max_menu_price: '',
                latitude: this.lattitude,//search form latitude of address
                longitude: this.longitude,//search form longitude of address
                seats: this.searchformvalues.seats,//search form selected seats
                address: this.searchformvalues.query,//search form address
                category: this.searchformvalues.restaurantName,//search form restaurant name
//                date: sort.value.date,
                time: this.searchformvalues.time,//search form selected time
                param: this.params,
                distance: sort.value.range,
                subcat_date: this.searchformvalues.date,//search form selected date
            }
        }
        
        let serialized = this.appsetting.serializeObj(postdata);
        localStorage.setItem('sortsearch', JSON.stringify(postdata));
        this.http.post(this.appsetting.url + 'sortbydistance', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            this.viewCtrl.dismiss({searchedlist: response.data});
        })

    }
}

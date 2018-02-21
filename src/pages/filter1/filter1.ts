import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, LoadingController, ToastController, ModalController} from 'ionic-angular';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Appsetting} from '../../providers/appsetting';
import {Common} from '../../providers/common';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';
import {Geolocation} from '@ionic-native/geolocation';
import {BarbequenationPage} from '../barbequenation/barbequenation';

/**
 * Generated class for the Filter1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-filter1',
    templateUrl: 'filter1.html',
})
export class Filter1Page {
    seachformdata: any;
    sortsearch: any;
    longitude: number;
    lattitude: number;
    dateTime: Date;
    search: any;
    //MenuPrice: any = [];
    reservation: string;
    menuprice: string;
    filterdata: any;
    FilterForm: any;
    locationtype: any;
    menutype: any;
    menudata: any;
    postdata: any;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public modalCtrl: ModalController,
        public formBuilder: FormBuilder,
        public appsetting: Appsetting,
        public common: Common,
        public loadingCtrl: LoadingController,
        public http: Http,
        public geolocation: Geolocation,
    ) {

    }
    ngOnInit(): any {
        console.log('ngOnInit');
        console.log(localStorage.getItem('filterdata'));
        if (localStorage.getItem('filterdata') != null) {
            this.filterdata = JSON.parse(localStorage.getItem('filterdata'));
            console.log(this.filterdata);
            this.reservation = this.filterdata.reservationType;
            this.menutype = this.filterdata.menuType;
            this.menuprice = this.filterdata.menuPrice;
            this.locationtype = this.filterdata.locationType;
            this.FilterForm = this.formBuilder.group({
                reservationType: [this.filterdata.reservationType],
                menuType: [this.filterdata.menuType],
                menuPrice: [this.filterdata.menuPrice],
                locationType: [this.filterdata.locationType]
            });
        } else {
            console.log('else');
            this.FilterForm = this.formBuilder.group({
                reservationType: [''],
                menuType: [''],
                menuPrice: [''],
                locationType: ['']
            });
        }
    }

    reservationSelect(eventdata) {
        console.log(eventdata);
        if (eventdata != undefined) {
            this.reservation = eventdata;
        }
    }

    public onChange(tag) {
        console.log('reservation');
        console.log(tag);
        this.reservation = '';
    }

    SelectedMenuType(event) {
        console.log(event);
        if (event != undefined) {
            this.menudata = event;
            console.log(this.menudata);
        }
    }

    SelectedMenuTypeDelete(event, index) {
        console.log(event);
        console.log(index);
        this.menudata.pop(index);
        console.log(this.menutype.length);
        if (this.menudata.length === 0) {
            this.menutype = '';
        }
    }

    SelectedMenuPrice(event) {
        console.log(event);
        if (event != undefined) {
            this.menuprice = event;
        }
    }

    public MenuPriceDelete() {
        console.log('menu delete')
        this.menuprice = '';

    }

    public LocationType(event) {
        console.log(event);
        if (event != undefined) {
            this.locationtype = event;
        }
    }

    locationtypeDelete() {
        this.locationtype = '';
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Filter1Page');
        console.log();
        this.dateTime = new Date();
        this.geolocation.getCurrentPosition().then((resp) => {
            this.lattitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
        })
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    FilterAccept(filterForm) {
        console.log(filterForm.value);
        console.log(filterForm.value.menuPrice);
        if (filterForm.value.reservationType != undefined) {
            filterForm.value.reservationType = filterForm.value.reservationType;
        } else {
            filterForm.value.reservationType = '';
        }
        if (filterForm.value.menuType != undefined) {
            filterForm.value.menuType = filterForm.value.menuType;
        } else {
            filterForm.value.menuType = '';
        }
        if (filterForm.value.locationType != undefined) {
            filterForm.value.locationType = filterForm.value.locationType;
        } else {
            filterForm.value.locationType = '';
        }
        console.log(filterForm.value.menuPrice);
        var postdata: any;
        if (filterForm.value.menuPrice) {
            var a = filterForm.value.menuPrice.split('-');
            console.log(a);
            console.log('if part');
            postdata = {
                res_type: filterForm.value.reservationType,
                menu_type: filterForm.value.menuType,
                location_type: filterForm.value.locationType,
                min_menu_price: a[0],
                max_menu_price: a[1],
            }
        } else {
            postdata = {
                res_type: filterForm.value.reservationType,
                menu_type: filterForm.value.menuType,
                location_type: filterForm.value.locationType,
                min_menu_price: '',
                max_menu_price: '',
            }
        }
        this.viewCtrl.dismiss({filterdata:postdata});
        //this.navCtrl.push(BarbequenationPage,{filterdata:postdata});
    }

    ResetFilter() {
        this.navCtrl.push(BarbequenationPage,{filterdata:''});
    }

}

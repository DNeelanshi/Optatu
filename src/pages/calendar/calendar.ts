import {Component} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
//import { ProcessPage } from '../process/process';
import {ListPage} from '../list/list';
import {CalendarModule} from "ion2-calendar";
import {Http, Headers, RequestOptions} from '@angular/http';
import {LoadingController} from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {App} from 'ionic-angular';
import * as moment from 'moment';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
@Component({
    selector: 'page-calendar',
    templateUrl: 'calendar.html'
})
export class CalendarPage {
    mindate: any;
    CalendarForm: any;
    public Loading = this.loadingCtrl.create({
        content: 'Please wait...'

    });
    date: string;
    type: 'string';
    public calendardate: any;
    constructor(public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public app: App,
        private toastCtrl: ToastController,
        public formBuilder: FormBuilder,
        public viewCtrl: ViewController,
        public http: Http) {

    }

    ngOnInit(): any {
        var d = new Date();
        this.mindate = moment(d).format('YYYY-MM-DD');
        this.CalendarForm = this.formBuilder.group({
            date: [this.mindate, [Validators.required]],

        });
    }
    onChange($event, data) {
        console.log('ajksdhnfjkh');
        console.log(data.value.date);
        console.log(moment(data.value.date).format('YYYY-MM-DD'));
        this.viewCtrl.dismiss(data.value.date);
    }



    serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }

    backtoprocess() {
        this.navCtrl.push(ListPage);
    }
}

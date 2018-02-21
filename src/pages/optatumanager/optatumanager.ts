import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {Appsetting} from '../../providers/appsetting';
import {Common} from '../../providers/common';
import {Http} from '@angular/http';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {SigninPage} from '../signin/signin';

/**
 * Generated class for the OptatumanagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-optatumanager',
    templateUrl: 'optatumanager.html',
})
export class OptatumanagerPage {
    selectedCat: any;
    OptatuManagerForm: any;
    category = [];
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public appsetting: Appsetting,
        public http: Http,
        public formBuilder: FormBuilder,
        public toastCtrl: ToastController,
        public common: Common,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController
    ) {
        // alert('optatumanager ');
    }
    ngOnInit(): any {
        console.log('ngOnInit');
        this.OptatuManagerForm = this.formBuilder.group({
            category: ['', [Validators.required]],
            name: ['', [Validators.required]],
            surname: ['', [Validators.required]],
            activityName: ['', [Validators.required]],
            activityAddress: ['', [Validators.required]],
            postalCode: ['', [Validators.required]],
            province: ['', [Validators.required]],
            city: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            email: ['', [Validators.required, this.emailValidator.bind(this)]],
            password: ['', [Validators.required]],
            companyName: ['', [Validators.required]],
            vatNumber: ['', [Validators.required]],
            billingAddress: ['', [Validators.required]],
            billingProvince: ['', [Validators.required]],
            billingCity: ['', [Validators.required]],
            billingNation: ['', [Validators.required]],
            iban: ['', [Validators.required]],
            ibanName: ['', [Validators.required]],
            ibanSurname: ['', [Validators.required]],
            paypalemail: ['', [Validators.required, this.emailValidator.bind(this)]],
            legal: [true, [Validators.required, this.checkbox.bind(this)]],
            terms: [true, [Validators.required, this.checkbox.bind(this)]],
            privacy: [true, [Validators.required, this.checkbox.bind(this)]]
        });
    }
    emailValidator(control: FormControl): {[s: string]: boolean} {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return {invalidEmail: true};
        }
    }
    checkbox(legal) {
        console.log(legal.value);
        if (legal.value == false) {
            return {legal: false}
        }
    }

    OptatuManager(managerdata) {
        console.log(managerdata.value);
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            if(managerdata.value.password.indexOf(' ') != 0){
            let options = this.appsetting.header();
            var postdata = {
                category: managerdata.value.category,
                name: managerdata.value.name,
                surname: managerdata.value.surname,
                activityname: managerdata.value.activityName,
                location: managerdata.value.activityAddress,
                postalcode: managerdata.value.postalCode,
                province: managerdata.value.province,
                city: managerdata.value.city,
                telephone: managerdata.value.phone,
                email: managerdata.value.email,
                password: managerdata.value.password,
                companyname: managerdata.value.companyName,
                vat: managerdata.value.vatNumber,
                billingaddress: managerdata.value.billingAddress,
                billingprovince: managerdata.value.billingProvince,
                billingcity: managerdata.value.billingCity,
                billingnation: managerdata.value.billingNation,
                iban: managerdata.value.iban,
                ibanname: managerdata.value.ibanName,
                ibansurname: managerdata.value.ibanSurname,
                paypalemail: managerdata.value.paypalemail,
                role: 'vendor'
            }
            var serialized = this.appsetting.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(() => {
                this.http.post(this.appsetting.url + 'users/registervendor', serialized, options).map(res => res.json()).subscribe(response => {
                    console.log(response);
                    Loading.dismiss()
                    if (response.error == "0") {
                        let alert = this.alertCtrl.create({
                            title: 'Optatu manager',
                            subTitle: 'Congratulation you have been successfully registered.Please check your email to activate your account.',
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'submit',
                                    handler: () => {
                                        console.log('ok clicked');
                                        this.navCtrl.push(SigninPage)
                                    }
                                }]
                        });
                        alert.present();

                        //this.common.presentAlert('Optatu Manager', response.message);
                        

                    }

                })
            })
            }else{
                this.common.presentAlert('Optatu Manager', 'Space not allowed in password!');
            }
        } else {
            let toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }

    }
    ionViewDidLoad() {
        this.getCategory();
        console.log('ionViewDidLoad OptatumanagerPage');
    }
    home() {
        this.navCtrl.push(HomePage);
    }
    isValid(field: string) {
        let formField = this.OptatuManagerForm.get(field);
        return formField.valid || formField.pristine;
    }

    categorySelect(eventdata) {
        console.log(eventdata);
        this.selectedCat = eventdata.join(', ');
        console.log(this.selectedCat);
        //this.OptatuManagerForm = {'category' : this.selectedCat[0]};
    }
    getCategory() {
        let options = this.appsetting.header();
        this.http.get(this.appsetting.url + 'managercategorylist', options).map(res => res.json()).subscribe(response => {
            console.log(response);
            this.category = response.data;

        })
    }

}

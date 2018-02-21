import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';

import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Appsetting} from '../../providers/appsetting';
import {Http} from '@angular/http';
import {Common} from '../../providers/common';
import {HomePage} from '../home/home';
/********* plugin for payment ***********/
import {Stripe} from '@ionic-native/stripe';
import {PayPal, PayPalPayment, PayPalConfiguration} from '@ionic-native/paypal';
import {SMS} from '@ionic-native/sms';


/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-payment',
    templateUrl: 'payment.html',
})
export class PaymentPage {
    userData: any;
    resDetail: any;
    PaymentForm: FormGroup;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        public appsetting: Appsetting,
        public http: Http,
        public loadingCtrl: LoadingController,
        public common: Common,
        private payPal: PayPal,
        private stripe: Stripe,
        private sms: SMS
    ) {
    }
    ngOnInit(): any {
        console.log('ngOnInit');
        this.PaymentForm = this.formBuilder.group({
            cardnumber: ['', [Validators.required, Validators.minLength(16)]],
            cardname: ['', [Validators.required]],
            month: ['', [Validators.required]],
            year: ['', [Validators.required]],
            cvv: ['', [Validators.required, Validators.minLength(3)]],
        });
        // this.tryagain();
    }

    isValid(field: string) {
        let formField = this.PaymentForm.get(field);
        return formField.valid || formField.pristine;
    }

    ionViewDidLoad() {
        //alert('payment new');
        console.log('ionViewDidLoad PaymentPage');
        console.log(this.navParams.get('resDetail'));
        this.resDetail = this.navParams.get('resDetail');
        this.userData = JSON.parse(localStorage.getItem('CurrentUser'));
        this.stripe.setPublishableKey('pk_test_4hLziJ9z1MpONnlbn2l8FxnK');
    }

    Payment(formdata) {
        console.log(formdata.value);
        let card = {
            number: formdata.value.cardnumber,
            expMonth: formdata.value.month,
            expYear: formdata.value.year,
            cvc: formdata.value.cvv,
            name: formdata.value.cardname,
            currency: 'EUR'
        };
        console.log('postdata==' + JSON.stringify(card));
        this.stripe.createCardToken(card).then(token => {
            console.log('Payment done');
            //alert(JSON.stringify(token));
            let options = this.appsetting.header();
            var postdata = {
                price: 1.5,//this.resDetail.rate
                token: token.id
            }
            var serialized = this.appsetting.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(() => {
                this.http.post(this.appsetting.url + 'payment/stripe', serialized, options).map(res => res.json()).subscribe(response => {
                    console.log(response);
                    // Loading.dismiss();
                    if (response.error == 0) {
                        //                        this.common.presentAlert('Payment', 'Payment successfully done');
                        //                        console.log(this.sms.hasPermission());
                        var reservationdata = {
                            date_time: new Date(),
                            subcategoryid: this.resDetail._id,
                            category: this.resDetail.category,
                            category_name: this.resDetail.category_name,
                            price: 1.5,//this.resDetail.rate,
                            userid: this.userData._id,
                            paymentmethod: 'stripe',
                            image: this.resDetail.image
                        }
                       // alert(JSON.stringify(reservationdata));
                        var serialized = this.appsetting.serializeObj(reservationdata);
                        this.http.post(this.appsetting.url + 'payment/reservations', serialized, options).map(res => res.json()).subscribe(response => {
                            console.log(response);
                            Loading.dismiss();
                            if (response.error == 0) {
                                this.common.presentAlert('Payment', 'Payment successfully done');
                                this.navCtrl.push(HomePage);
                            } else {
                                this.common.presentAlert('Payment', response.message);
                            }
                        })

                    } else {
                        Loading.dismiss();
                        this.common.presentAlert('Payment', response.message);

                    }
                })
            })
        })
            .catch(error => console.error(error));
    }

    PaymentViaPaypal() {
        //alert('clicked');
        console.log('clicked');
        this.payPal.init({
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            PayPalEnvironmentSandbox: 'AcdJh17biSqtUTrV84faj3ICNHJrJU-pmwweL1mkUc0SH3Pp3F4qG8EO3l8MNLyfu7v3e4JijdPOLnlo'
        }).then((initsuccess) => {
            //alert(JSON.stringify(initsuccess));
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
                // Only needed if you get an "Internal Service Error" after PayPal login!
                //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
                //payPalShopName: 'Optatu',
            })).then(() => {
                //alert('here');
                let payment = new PayPalPayment('0.5', 'EUR', 'Description', 'sale');
                this.payPal.renderSinglePaymentUI(payment).then((res) => {
                    // Successfully paid
                    console.log(res);
                    //                    alert(JSON.stringify(res));
                    //                    alert('Payment done')
                    let options = this.appsetting.header();
                    var postdata = {
                        transactionid: res.response.id,
                        date_time: res.response.create_time,
                        subcategoryid: this.resDetail._id,
                        category: this.resDetail.category,
                        category_name: this.resDetail.category_name,
                        price: 0.5,//this.resDetail.rate,
                        userid: this.userData._id,
                        paymentmethod: 'paypal',
                        image: this.resDetail.image
                    }
                    //alert(JSON.stringify(postdata))
                    var serialized = this.appsetting.serializeObj(postdata);
                    var Loading = this.loadingCtrl.create({
                        spinner: 'bubbles',
                        content: 'Loading...'
                    });
                    Loading.present().then(() => {
                        this.http.post(this.appsetting.url + 'payment/reservations', serialized, options).map(res => res.json()).subscribe(response => {
                            console.log(response);
                            Loading.dismiss();
                            if (response.error == 0) {
                                this.common.presentAlert('Payment', 'Payment successfully done');
                                console.log(this.sms.hasPermission());

                                this.navCtrl.push(HomePage);
                            } else {
                                this.common.presentAlert('Payment', response.message);
                            }
                        })
                    })
                }, (error) => {
                    // Error or render dialog closed without being successful
                    alert(JSON.stringify(error));
                });
            }, () => {
                // Error in configuration
            });
        }, () => {
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    }

}

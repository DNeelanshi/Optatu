import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators, FormControl}  from '@angular/forms';
import {Http} from '@angular/http';
import {Appsetting} from '../../providers/appsetting';
import {Common} from '../../providers/common';
import {SigninPage} from '../signin/signin';

/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
    ForgotForm: FormGroup;
    
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public formBuilder:FormBuilder,
      public http:Http,
      public appsetting:Appsetting,
      public common:Common,
      public loadingCtrl:LoadingController,
      public toastCtrl:ToastController
      ) {
  }
 ngOnInit(): any {
       console.log('ngOnInit');
      this.ForgotForm = this.formBuilder.group({
      email: ['', [Validators.required, this.emailValidator.bind(this)]],
    });
  }
  emailValidator(control: FormControl): {[s: string]: boolean} {
    if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
      return {invalidEmail: true};
    }
  }
  ForgotPassword(forgotdata){
      console.log(forgotdata.value);
      console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
         let options = this.appsetting.header();
    var postdata = {
        email: forgotdata.value.email,
    }
    console.log(postdata);
    var serialized = this.appsetting.serializeObj(postdata);
    var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Loading...'
            });
            Loading.present().then(() => {
    this.http.post(this.appsetting.url + 'forgetpassword', serialized, options).map(res => res.json()).subscribe(response=>{
        console.log(response);
        Loading.dismiss();
        if(response.error == "0"){
            localStorage.removeItem('CurrentUser');
            this.common.presentAlert('Forgot',response.message);
            this.navCtrl.push(SigninPage);
        }else{
            this.common.presentAlert('Forgot',response.message);
        }
        
        
    })
            })
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
    console.log('ionViewDidLoad ForgotPage');
  }

  

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormsModule , FormGroup, FormBuilder, Validators, FormControl}  from '@angular/forms';
import {Http} from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import {GetstartPage} from '../getstart/getstart';
import { Common } from '../../providers/common';
/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
    changepassword: FormGroup;
  public type = 'password';
  public Ctype = 'password';
  public Ctype1 = 'password';
  public showPass = false;
  public showCpass = false;
  public showCpass1 = false;
  public iconname = 'eye';
  public iconname1 = 'eye';
  public iconname2 = 'eye';

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public appsetting:Appsetting,
      public http:Http,
      public formBuilder:FormBuilder,
      public common:Common
      ) {
      //alert('change password hh');
      console.log(JSON.parse(localStorage.getItem('CurrentUser')));
  }
  ngOnInit(): any {
       console.log('ngOnInit');
      this.changepassword = this.formBuilder.group({
      password: ['', [Validators.required,]],
      newpassword: ['', [Validators.required, Validators.minLength(6)]],
      cnewpassword: ['', [Validators.required, Validators.minLength(6)]],
    }, {validator: this.matchingPasswords('newpassword', 'cnewpassword')});
  }
    matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  return (group: FormGroup): {[key: string]: any} => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];

    if (password.value !== confirmPassword.value) {
      return {
        mismatchedPasswords: true
      };
    }
  }
}
    isValid(field: string) {
    let formField = this.changepassword.get(field);
    console.log(formField);
    return formField.valid || formField.pristine;
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }
 showPassword() {
     console.log('showpassword');
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'text';
      this.iconname = 'eye-off';
    } else {
      this.type = 'password';
      this.iconname = 'eye';
    }
  }
     showCPassword() {
     console.log('showCpassword');
    this.showCpass = !this.showCpass;
 
    if(this.showCpass){
      this.Ctype = 'text';
      this.iconname1 = 'eye-off';
    } else {
      this.Ctype = 'password';
      this.iconname1 = 'eye';
    }
  }
  
   showCPassword1() {
     console.log('showCpassword');
    this.showCpass1 = !this.showCpass1;
 
    if(this.showCpass1){
      this.Ctype1 = 'text';
      this.iconname2 = 'eye-off';
    } else {
      this.Ctype1 = 'password';
      this.iconname2 = 'eye';
    }
  }
  
  ChangePassword(changeform){
      console.log(changeform.value);
      console.log(JSON.parse(localStorage.getItem('CurrentUser')).email);
       let options = this.appsetting.header();
    var postdata = {
        email: JSON.parse(localStorage.getItem('CurrentUser')).email,
        password:changeform.value.password,
        newpassword:changeform.value.newpassword
    }
    console.log(postdata);
    var serialized = this.appsetting.serializeObj(postdata);
    this.http.post(this.appsetting.url + 'changePassword', serialized, options).map(res => res.json()).subscribe(response=>{
        console.log(response);
        if(response.error == "0"){
            localStorage.removeItem('CurrentUser');
            this.navCtrl.push(GetstartPage);
        }else{
            this.common.presentAlert('Change password',response.message);
        }
        
        
    }) 
  }
  
}

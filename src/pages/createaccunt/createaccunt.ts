import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Events, ToastController, LoadingController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Http} from '@angular/http';
import {Appsetting} from '../../providers/appsetting';
import {Common} from '../../providers/common';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {ActionSheetController} from 'ionic-angular';
import {UniqueDeviceID} from '@ionic-native/unique-device-id';
/**
 * Generated class for the CreateaccuntPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-createaccunt',
    templateUrl: 'createaccunt.html',
})
export class CreateaccuntPage {
    ImageToSend: any;
    SignupForm: FormGroup;
    base64Image: any = "assets/img/profile.png";
    public type = 'password';
    public Ctype = 'password';
    public showPass = false;
    public showCpass = false;
    public iconname = 'eye';
    public iconname1 = 'eye';
    public myColors: any = [];
    bar0: string = '#DDD';
    bar1: string = '#DDD';
    bar2: string = '#DDD';
    bar3: string = '#DDD';
    bar4: string = '#DDD';
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        private http: Http,
        public appsetting: Appsetting,
        private camera: Camera,
        public actionSheetCtrl: ActionSheetController,
        private uniqueDeviceID: UniqueDeviceID,
        public common: Common,
        public toastCtrl: ToastController,
        public events: Events,
        public loadingCtrl: LoadingController
    ) {
        //alert('Rahul ');
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CreateaccuntPage');
    }
    ngOnInit(): any {
        console.log('ngOnInit');
        this.SignupForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            surname: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            email: ['', [Validators.required, this.emailValidator.bind(this)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            cpassword: ['', [Validators.required, Validators.minLength(6)]],
            legal: [true, [Validators.required, this.checkbox.bind(this)]]
        }, {validator: this.matchingPasswords('password', 'cpassword')},
        );
    }
    emailValidator(control: FormControl): {[s: string]: boolean} {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return {invalidEmail: true};
        }
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
    showPassword() {
        console.log('showpassword');
        this.showPass = !this.showPass;

        if (this.showPass) {
            this.type = 'text';
            this.iconname = 'eye-off';
        } else {
            this.type = 'password';
            this.iconname = 'eye';
        }
    }
    checkbox(legal) {
        console.log(legal.value);
        if (legal.value == false) {
            return {legal: false}
        }

    }
    showCPassword() {
        console.log('showCpassword');
        this.showCpass = !this.showCpass;

        if (this.showCpass) {
            this.Ctype = 'text';
            this.iconname1 = 'eye-off';
        } else {
            this.Ctype = 'password';
            this.iconname1 = 'eye';
        }
    }

    isValid(field: string) {
        let formField = this.SignupForm.get(field);

        return formField.valid || formField.pristine;
    }

    CreateAccount(formdata) {
        console.log(formdata.value);
        console.log(formdata.value.password.indexOf(' '));
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
            if (formdata.value.password.indexOf(' ') != 0) {

                let options = this.appsetting.header();
                //      this.uniqueDeviceID.get().then((uuid: any) => {
                //  console.log(uuid);
                if (this.ImageToSend != undefined) {
                    this.ImageToSend = this.ImageToSend;
                } else {
                    this.ImageToSend = '';
                }
                var postdata = {
                    name: formdata.value.name,
                    surname: formdata.value.surname,
                    phone: formdata.value.phone,
                    email: formdata.value.email,
                    password: formdata.value.password,
                    image: this.ImageToSend,
                    //token:uuid,
                    role: 'user'
                }
                var serialized = this.appsetting.serializeObj(postdata);
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    content: 'Loading...'
                });
                Loading.present().then(() => {
                    this.http.post(this.appsetting.url + 'users/register', serialized, options).map(res => res.json()).subscribe(response => {
                        console.log(response);
                        Loading.dismiss();
                        if (response.error == "0") {
                            localStorage.setItem('CurrentUser', JSON.stringify(response.data.all));
                            this.events.publish('Loggedin', 'loginpage');
                            this.navCtrl.push(HomePage);
                        } else {
                            this.common.presentAlert('Signup', response.message);
                        }


                    })
                })
            } else {
                this.common.presentAlert('Signup', 'Space not allowed in password.');
            }
            //}).catch((error: any) => console.log(error));
        } else {
            let toast = this.toastCtrl.create({
                message: 'Check your internet connection',
                duration: 3000,
                position: 'bottom'
            });

            toast.onDidDismiss(() => {
                console.log('Dismissed toast');
            });

            toast.present();
        }
    }

    home() {
        this.navCtrl.push(HomePage);
    }
    pass_strength(pass) {
        var strongRegularExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*()<>{}:;+'~|,-_?/=])(?=.{8,})");
        var mediumRegularExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if (strongRegularExp.test(pass.value)) {
            console.log('strong');
            this.bar0 = '#00FF00';
            this.bar1 = '#00FF00';
            this.bar2 = '#00FF00';
            this.bar3 = '#00FF00';
            this.bar4 = '#00FF00';
        } else if (mediumRegularExp.test(pass.value)) {
            console.log('medium');
            this.bar0 = '#FFA500';
            this.bar1 = '#FFA500';
            this.bar2 = '#DDD';
            this.bar3 = '#DDD';
            this.bar4 = '#DDD';
        } else {
            console.log('low');
            this.bar0 = '#FF0000';
            this.bar1 = '#DDD';
            this.bar2 = '#DDD';
            this.bar3 = '#DDD';
            this.bar4 = '#DDD';
        }
    }
    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Choose image',
            buttons: [
                {
                    text: 'Camera',
                    role: 'submit',
                    handler: () => {
                        console.log('submit clicked');
                        this.chooseImage(1);
                    }
                },
                {
                    text: 'Gallery',
                    handler: () => {
                        console.log('Gallery clicked');
                        this.chooseImage(0);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });

        actionSheet.present();
    }
    public chooseImage(Type) {
        const options: CameraOptions = {
            quality: 100,
            sourceType: Type,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 800,
            targetHeight: 800,
            correctOrientation: true
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
            this.ImageToSend = imageData;
        }, (err) => {
            // Handle error
            console.log(err);
        });
    }

}

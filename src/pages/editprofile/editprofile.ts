import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController, Events, LoadingController} from 'ionic-angular';
import {Appsetting} from '../../providers/appsetting';
import {Common} from '../../providers/common';
import {Http} from '@angular/http';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {FormsModule, FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {HomePage} from '../home/home';
import {Geolocation} from '@ionic-native/geolocation';
import {NativeGeocoder, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-editprofile',
    templateUrl: 'editprofile.html',
})
export class EditprofilePage {

    profileimage: any;
    ImageToSend: any = "";
    base64Image: any;
    Editprofile: FormGroup;
    click:boolean = false;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        public appsetting: Appsetting,
        public common: Common,
        public http: Http,
        private camera: Camera,
        public actionSheetCtrl: ActionSheetController,
        public geolocation: Geolocation,
        private nativeGeocoder: NativeGeocoder,
        public events: Events,
        public loadingCtrl: LoadingController

    ) {
        // alert('edit profile hh');
    }
    ngOnInit(): any {
        console.log('ngOnInit');
        this.getUser();
        this.Editprofile = this.formBuilder.group({
            name: ['', [Validators.required]],
            surname: ['', [Validators.required]],
            email: ['', [Validators.required, this.emailValidator.bind(this)]],
            phone: ['', [Validators.required]],
        });

    }
    emailValidator(control: FormControl): {[s: string]: boolean} {
        if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
            return {invalidEmail: true};
        }
    }
    isValid(field: string) {
        let formField = this.Editprofile.get(field);
        return formField.valid || formField.pristine;
    }
    getUser() {
        //alert('fetched');
        console.log(JSON.parse(localStorage.getItem('CurrentUser'))._id);
        let options = this.appsetting.header();
        var postdata = {
            id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
        }
        var serialized = this.appsetting.serializeObj(postdata);
        this.http.post(this.appsetting.url + 'users/userdetailbyid', serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            if (response.error == 0) {
                this.base64Image =  null;
                this.base64Image = response.data.image;
                
                console.log('image');
                console.log(this.base64Image);
                this.events.publish('Loggedin', 'loginpage');
                this.Editprofile = this.formBuilder.group({
                    name: [response.data.name, [Validators.required]],
                    surname: [response.data.surname, [Validators.required]],
                    email: [response.data.email, [Validators.required, this.emailValidator.bind(this)]],
                    phone: [response.data.phone, [Validators.required]],
                });
            }
        })
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad EditprofilePage');
    }
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        this.getUser();
        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }

    editProfile(profiledata) {
        //alert(this.ImageToSend);
       // alert(this.click);
        console.log(profiledata.value);
        let options = this.appsetting.header();
        if(this.click == true){
            
        }else{
            this.ImageToSend = "";
        }
        var postdata = {
            id: JSON.parse(localStorage.getItem('CurrentUser'))._id,
            name: profiledata.value.name,
            surname: profiledata.value.surname,
            email: profiledata.value.email,
            phone: profiledata.value.phone,
            image: this.ImageToSend
        }
        console.log(postdata);
        var serialized = this.appsetting.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
        });
        Loading.present().then(() => {
            this.http.post(this.appsetting.url + 'users/edituser', serialized, options).map(res => res.json()).subscribe(response => {
                console.log(response);
                Loading.dismiss();
                if (response.error == 0) {
                    this.events.publish('Loggedin', 'loginpage');
                    this.common.presentAlert('Profile', response.message);
                    localStorage.setItem('CurrentUser', JSON.stringify(response.data));
                    this.navCtrl.push(HomePage);
                }
            })
        })
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
        this.ImageToSend = "";
        const options: CameraOptions = {
            quality: 10,
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
            this.click = true;
            
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
            this.ImageToSend = imageData;
        }, (err) => {
            // Handle error
            console.log(err);
        });
    }
}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Appsetting } from '../providers/appsetting';
import { Common } from '../providers/common';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GetstartPage } from '../pages/getstart/getstart';
import { HotelsPage } from '../pages/hotels/hotels';
import { HotelfilterPage } from '../pages/hotelfilter/hotelfilter';
import { NotificationPage } from '../pages/notification/notification';
import { PopoverPage } from '../pages/popover/popover';
import { LocationmapPage } from '../pages/locationmap/locationmap';
import { ReservationtypePage } from '../pages/reservationtype/reservationtype';
import { ReservationstatusPage } from '../pages/reservationstatus/reservationstatus';
import { SigninPage } from '../pages/signin/signin';
import { ForgotPage } from "../pages/forgot/forgot";
import { OptatumanagerPage } from "../pages/optatumanager/optatumanager";
import {RestaurantsPage } from "../pages/restaurants/restaurants";
import { CreateaccuntPage } from "../pages/createaccunt/createaccunt";
import { Restaurant2Page } from "../pages/restaurant2/restaurant2";
import { MaplistPage } from "../pages/maplist/maplist";
import { FilterPage} from "../pages/filter/filter";
import { Filter1Page} from "../pages/filter1/filter1";
import { BarbequenationPage} from "../pages/barbequenation/barbequenation";
import {RestaurantviewPage} from "../pages/restaurantview/restaurantview";
import { MaplistfullPage} from "../pages/maplistfull/maplistfull";
import { MyreservationPage} from "../pages/myreservation/myreservation";
import { RecentlyviewPage} from "../pages/recentlyview/recentlyview";
import { SettingPage} from "../pages/setting/setting";
import { LegaldisclamerPage} from "../pages/legaldisclamer/legaldisclamer";
import { HelpPage} from "../pages/help/help";
import { ShareappPage} from "../pages/shareapp/shareapp";
import { TryagainPage} from "../pages/tryagain/tryagain";
import { SortdistancePage} from "../pages/sortdistance/sortdistance";
import { EditprofilePage} from "../pages/editprofile/editprofile";
import { TermsPage} from "../pages/terms/terms";
import { PrivacyPage} from "../pages/privacy/privacy";
import { Totalnation2Page} from "../pages/totalnation2/totalnation2";
import { ChangepasswordPage} from "../pages/changepassword/changepassword";
import { AddfilterPage} from "../pages/addfilter/addfilter";
import { PaymentPage } from "../pages/payment/payment";
import { CalendarPage } from "../pages/calendar/calendar";
import {HttpModule} from '@angular/http';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { CalendarModule } from "ion2-calendar";
import {RlTagInputModule} from 'angular2-tag-input';
import { ReservationdetailPage} from "../pages/reservationdetail/reservationdetail";
//import { TagInputModule } from 'ng2-tag-input';
/********* Native plugins **********/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import {Network} from '@ionic-native/network';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Stripe } from '@ionic-native/stripe';
import { PayPal} from '@ionic-native/paypal';
import { SMS } from '@ionic-native/sms';
import {Keyboard} from '@ionic-native/Keyboard';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GetstartPage,
    HotelsPage,
    HotelfilterPage,
    PopoverPage,
    NotificationPage,
    LocationmapPage,
    ReservationtypePage,
    ReservationstatusPage,
    SigninPage,
    ForgotPage,
    OptatumanagerPage,
    RestaurantsPage,
    CreateaccuntPage,
    Restaurant2Page,
    MaplistPage,
    FilterPage,
    BarbequenationPage,
    RestaurantviewPage,
    MaplistfullPage,
    MyreservationPage,
    RecentlyviewPage,
    SettingPage,
    LegaldisclamerPage,
    HelpPage,
    ShareappPage,
    TryagainPage,
    SortdistancePage,
    EditprofilePage,
    TermsPage,
    PrivacyPage,
    Totalnation2Page,
    ChangepasswordPage,
    AddfilterPage,
    PaymentPage,
    CalendarPage,
    ReservationdetailPage,
    Filter1Page
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PasswordStrengthBarModule,
    CalendarModule,
    RlTagInputModule,
    //TagInputModule,
    IonicModule.forRoot(MyApp) , 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GetstartPage,
    HotelsPage,
    HotelfilterPage,
    PopoverPage,
    NotificationPage,
    LocationmapPage,
    ReservationtypePage,
    ReservationstatusPage,
    SigninPage,
    ForgotPage,
    OptatumanagerPage,
    RestaurantsPage,
    CreateaccuntPage,
    Restaurant2Page,
    MaplistPage,
    FilterPage,
    BarbequenationPage,
    RestaurantviewPage,
    MaplistfullPage,
    MyreservationPage,
    RecentlyviewPage,
    SettingPage,
    LegaldisclamerPage,
    HelpPage,
    ShareappPage,
    TryagainPage,
    SortdistancePage,
    EditprofilePage,
    TermsPage,
    PrivacyPage,
    Totalnation2Page,
    ChangepasswordPage,
    AddfilterPage,
    PaymentPage,
    CalendarPage,
    ReservationdetailPage,
    Filter1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Appsetting,
    Common,
    Camera,
    UniqueDeviceID,
    Geolocation,
    NativeGeocoder,
    Network,
    SocialSharing,
    Stripe,
    PayPal,
    SMS,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
  
})
export class AppModule {}

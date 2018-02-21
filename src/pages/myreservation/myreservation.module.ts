import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyreservationPage } from './myreservation';

@NgModule({
  declarations: [
    MyreservationPage,
  ],
  imports: [
    IonicPageModule.forChild(MyreservationPage),
  ],
})
export class MyreservationPageModule {}

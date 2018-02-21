import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantviewPage } from './restaurantview';

@NgModule({
  declarations: [
    RestaurantviewPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantviewPage),
  ],
})
export class RestaurantviewPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverTimePage } from './popoverTime';


@NgModule({
  declarations: [
    PopoverTimePage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverTimePage),
  ],
})
export class PopoverTimePageModule {}

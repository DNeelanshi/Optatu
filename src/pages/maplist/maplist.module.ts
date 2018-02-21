import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaplistPage } from './maplist';

@NgModule({
  declarations: [
    MaplistPage,
  ],
  imports: [
    IonicPageModule.forChild(MaplistPage),
  ],
})
export class MaplistPageModule {}

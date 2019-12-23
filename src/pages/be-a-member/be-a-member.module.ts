import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeAMemberPage } from './be-a-member';

@NgModule({
  declarations: [
    BeAMemberPage,
  ],
  imports: [
    IonicPageModule.forChild(BeAMemberPage),
  ],
})
export class BeAMemberPageModule {}

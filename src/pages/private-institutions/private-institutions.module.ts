import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateInstitutionsPage } from './private-institutions';

@NgModule({
  declarations: [
    PrivateInstitutionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateInstitutionsPage),
  ],
})
export class PrivateInstitutionsPageModule {}

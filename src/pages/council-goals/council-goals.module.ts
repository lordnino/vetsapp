import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouncilGoalsPage } from './council-goals';

@NgModule({
  declarations: [
    CouncilGoalsPage,
  ],
  imports: [
    IonicPageModule.forChild(CouncilGoalsPage),
  ],
})
export class CouncilGoalsPageModule {}

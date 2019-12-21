import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SchedulePage } from '../schedule/schedule';
import { List1Page } from '../list-1/list-1';
import { List2Page } from '../list-2/list-2';
import { GridPage } from '../grid/grid';
import { NotificationsPage } from '../notifications/notifications';
import { ProfilePage } from '../profile/profile';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { BranchPage } from '../branch/branch';


@Component({
  selector: 'layouts-page',
  templateUrl: 'layouts.html'
})
export class LayoutsPage {
  items: Array<{title: string, note?: string, component: any}>;

  constructor(
    public nav: NavController,
    public translate: TranslateService
  ) {
  }

  ionViewWillEnter(){
    Observable.forkJoin(
      this.translate.get('Area1'),
      this.translate.get('Area2'),
      this.translate.get('Area3'),
      this.translate.get('Area4'),
      this.translate.get('Area5'),
      this.translate.get('Area6')
    ).subscribe(data => {
      this.items = [
        { title: data[0], component: BranchPage },
        { title: data[1], component: List1Page },
        { title: data[2], component: List2Page },
        { title: data[3], component: GridPage },
        { title: data[4], component: NotificationsPage },
        { title: data[5], component: ProfilePage }
      ];
    });
  }

  itemTapped(event, item) {
    this.nav.push(item.component);
  }
}

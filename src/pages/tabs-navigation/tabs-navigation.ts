import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { NotificationsPage } from '../notifications/notifications';
import { shortdesPage } from '../shortdes/shortdes';
import { historyPage } from '../history/history';
import { GridPage } from '../grid/grid';

@Component({
  selector: 'tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;
  tab5Root: any;

  constructor() {
    this.tab1Root = ProfilePage;
    this.tab2Root = shortdesPage;
    //this.tab3Root = NotificationsPage;
    this.tab4Root = historyPage;
    this.tab5Root = GridPage;
  }
}

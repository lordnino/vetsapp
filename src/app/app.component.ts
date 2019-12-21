import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, App, ToastController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Observable } from 'rxjs/Observable';

import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { FormsPage } from '../pages/forms/forms';
import { List2Page } from '../pages/list-2/list-2';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { onlineServicesPage } from '../pages/onlineServices/onlineServices';
import { SettingsPage } from '../pages/settings/settings';
import { FunctionalitiesPage } from '../pages/functionalities/functionalities';
import { FirebaseLoginPage } from '../pages/firebase-integration/firebase-login/firebase-login';
import { WordpressMenuPage } from '../pages/wordpress-integration/wordpress-menu/wordpress-menu';


import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LayoutsPage } from '../pages/layouts/layouts';
import { ListingPage } from '../pages/listing/listing';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  // make WalkthroughPage the root (or first) page
  rootPage: any = WalkthroughPage;
  // rootPage: any = TabsNavigationPage;
  textDir: string = "rtl";

  pages: Array<{title: any, icon: string, component: any}>;
  pushPages: Array<{title: any, icon: string, component: any}>;

  constructor(
    platform: Platform,
    public menu: MenuController,
    public app: App,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public translate: TranslateService,
    public toastCtrl: ToastController
  ) {
    translate.setDefaultLang('ar');
    translate.use('ar');

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide();
      this.statusBar.styleDefault();
    });

    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
      {
        if(event.lang == 'ar')
        {
          platform.setDir('rtl', true);
        }
        else
        {
          platform.setDir('ltr', true);
        }
        Observable.forkJoin(
          this.translate.get('MAINHOME'),
          this.translate.get('HOME'),
          this.translate.get('FORMS'),
          this.translate.get('FUNCTIONALITIES'),
          this.translate.get('LAYOUTS'),
          this.translate.get('MENU_1'),
          this.translate.get('MENU_3'),
          this.translate.get('MENU_4'),
          this.translate.get('FIREBASE_INTEGRATION'),
          // this.translate.get('SETTINGS')
          ).subscribe(data => {
            this.pages = [
              { title: data[0], icon: '', component: ListingPage },
              
            ];
  
            this.pushPages = [
            { title: data[1], icon: '', component: TabsNavigationPage },
            { title: data[2], icon: '', component: onlineServicesPage },
            { title: data[3], icon: '', component: TabsNavigationPage },
            { title: data[4], icon: '', component: List2Page },
            { title: data[5], icon: '', component: LayoutsPage },
            { title: data[6], icon: '', component: TabsNavigationPage },
            { title: data[7], icon: '', component: TabsNavigationPage },
            { title: data[8], icon: '', component: TabsNavigationPage }
           //, { title: data[9], icon: '', component: SettingsPage }
            ];
          });
        });
       
  }


  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  pushPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // rootNav is now deprecated (since beta 11) (https://forum.ionicframework.com/t/cant-access-rootnav-after-upgrade-to-beta-11/59889)
    this.app.getRootNav().push(page.component);
  }
}

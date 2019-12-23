import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FeedPage } from '../feed/feed';
import 'rxjs/Rx';

import { ListingModel } from './listing.model';
import { ListingService } from './listing.service';

import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { List2Page } from '../list-2/list-2';
import { WordpressMenuPage } from '../wordpress-integration/wordpress-menu/wordpress-menu';
import { onlineServicesPage } from '../onlineServices/onlineServices';
import { LayoutsPage } from '../layouts/layouts';
import { FirebaseLoginPage } from '../firebase-integration/firebase-login/firebase-login';
import { BeAMemberPage } from '../be-a-member/be-a-member';
import { PrivateInstitutionsPage } from '../private-institutions/private-institutions';

@Component({
  selector: 'listing-page',
  templateUrl: 'listing.html',
})
export class ListingPage {
  listing: ListingModel = new ListingModel();

  constructor(
    public nav: NavController,
    public listingService: ListingService
  ) {}

  ionViewDidLoad() {
    this.listingService
      .getData()
      .then(data => {
        this.listing.banner_image = data.banner_image;
        this.listing.banner_title = data.banner_title;
        this.listing.populars = data.populars;
        this.listing.categories = data.categories;
      });
  }


  goToFeed(category: any) {
    console.log("Clicked goToFeed", category);
    switch (category.title) {
      case "About us": //عن النقابة
        this.nav.push(TabsNavigationPage);
        break;
      case "Services"://خدمات أون لاين
          this.nav.push(onlineServicesPage);
          break;
      case "Committees"://أخبار النقابة
          this.nav.push(WordpressMenuPage);
          break;
      case "Scientific Center"://المركز العلمي
          this.nav.push(List2Page);
          break;
      case "Syndicates"://النقابات الفرعية
          this.nav.push(LayoutsPage);
          break;
      case "Veterinary Authorities"://كيف تصبح عضو 
          //this.nav.push(WordpressMenuPage);
          this.nav.push(BeAMemberPage);
          break;
      case "Private Institutions"://الصناديق التكافلية 
          //this.nav.push(WordpressMenuPage);
          this.nav.push(PrivateInstitutionsPage);
          break;
      case "Contact us":// إتصل بنا
          this.nav.push(FirebaseLoginPage);
          break;
      
      default:
        break;
    }
  }

}

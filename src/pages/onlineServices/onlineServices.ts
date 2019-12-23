import { Component } from '@angular/core';
import { MenuController, SegmentButton, App, NavParams } from 'ionic-angular';
import { FollowersPage } from '../followers/followers';
import { SettingsPage } from '../settings/settings';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser } from '@ionic-native/in-app-browser';


import 'rxjs/Rx';

@Component({
  selector: 'onlineServices-page',
  templateUrl: 'onlineServices.html'
})
export class onlineServicesPage {
  display: string;
  // profile: ProfileModel = new ProfileModel();

  general: boolean = false;
  second: boolean = false;
  third: boolean = false;
  fourth: boolean = false;
  fifth: boolean = false;
  sixth: boolean = false;
  seventh: boolean = false;
  eigth: boolean = false;
  ninth: boolean = false;

  constructor(
    public menu: MenuController,
    public app: App,
    public navParams: NavParams,
    private iab: InAppBrowser,
    // public profileService: ProfileService,
    public socialSharing: SocialSharing
  ) {
    this.display = "list";
  }

  switchGeneView() {
    this.general = !this.general;
  }
  
  switchSecView() {
    this.second = !this.second;
  }
  
  switchThirdView() {
    this.third = !this.third;
  }
  
  switchFourthView() {
    this.fourth = !this.fourth;
  }
  
  switchFifthView() {
    this.fifth = !this.fifth;
  }
  
  switchSixthView() {
    this.sixth = !this.sixth;
  }
  
  switchSevenView() {
    this.seventh = !this.seventh;
  }
  
  switchEightView() {
    this.eigth = !this.eigth;
  }
  
  switchNinethView() {
    this.ninth = !this.ninth;
  }
  
  

  goToFollowersList() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // this.app.getRootNav().push(FollowersPage, {
    //   list: this.profile.followers
    // });
  }
  OpenUrl() {
    const browser = this.iab.create('https://payments.egy-vet-synd.org/vetonline/', '_blank');
    browser.show()
  }

  goToFollowingList() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // this.app.getRootNav().push(FollowersPage, {
    //   list: this.profile.following
    // });
  }

  goToSettings() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    this.app.getRootNav().push(SettingsPage);
  }

  onSegmentChanged(segmentButton: SegmentButton) {
    // console.log('Segment changed to', segmentButton.value);
  }

  onSegmentSelected(segmentButton: SegmentButton) {
    // console.log('Segment selected', segmentButton.value);
  }

  sharePost(post) {
    //this code is to use the social sharing plugin
    // message, subject, file, url
    this.socialSharing.share(post.description, post.title, post.image)
      .then(() => {
        console.log('Success!');
      })
      .catch(() => {
        console.log('Error');
      });
  }

}

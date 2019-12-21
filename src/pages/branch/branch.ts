import { Component } from '@angular/core';
import { MenuController, SegmentButton, App, NavParams } from 'ionic-angular';
import { FollowersPage } from '../followers/followers';
import { SettingsPage } from '../settings/settings';
import { BranchModel } from './branch.model';
import { BranchService } from './branch.service';
import { SocialSharing } from '@ionic-native/social-sharing';

import 'rxjs/Rx';

@Component({
  selector: 'branch-page',
  templateUrl: 'branch.html'
})
export class BranchPage {
  display: string;
  branch: BranchModel = new BranchModel();

  constructor(
    public menu: MenuController,
    public app: App,
    public navParams: NavParams,
    public branchService: BranchService,
    public socialSharing: SocialSharing
  ) {
    this.display = "list";
  }

  ionViewDidLoad() {
    this.branchService.getData()
      .then(data => {
        this.branch.user = data.user;
        this.branch.following = data.following;
        this.branch.followers = data.followers;
        this.branch.posts = data.posts;
      });
  }

  goToFollowersList() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    this.app.getRootNav().push(FollowersPage, {
      list: this.branch.followers
    });
  }

  goToFollowingList() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    this.app.getRootNav().push(FollowersPage, {
      list: this.branch.following
    });
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

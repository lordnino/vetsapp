import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BlogFeedModel } from './../wordpress-integration/blog-post.model';
import { WordpressService } from './../wordpress-integration/wordpress-integration.service';
import { BlogPostPage } from './../wordpress-integration/blog-post/blog-post';
import { WordpressLoginPage } from './../wordpress-integration/wordpress-login/wordpress-login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the GalleryNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-gallery-news',
  templateUrl: 'gallery-news.html',
})
export class GalleryNewsPage {

  feed: BlogFeedModel = new BlogFeedModel();
  loggedUser: boolean = false;
  categoryId: number = 100;
  categoryTitle: string;
  current_posts_page = 1;
  morePagesAvailable: boolean = true;

  news1: any;
  news2: any;
  news3: any;

  images: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public wordpressService: WordpressService,
    private iab: InAppBrowser,
    // public profileService
  ) {
    // this.tab1Root = ProfilePage;
    // this.tab2Root = shortdesPage;
  }

  ionViewWillEnter() {
    this.wordpressService.getUser()
      .then(
        data => this.loggedUser = true,
        error => this.loggedUser = false
      );


    //if we are browsing a category
    // this.categoryId = this.navParams.get('id');
    this.categoryTitle = this.navParams.get('title');

        this.wordpressService.getGallery().subscribe((res: any) => {
          console.log(res);
          console.log(JSON.parse(res._body));
          this.images = JSON.parse(res._body);
        })

  }

  openLink(post) {
    if (post.link) {
      const browser = this.iab.create(post.link, '_blank');
      browser.show()
    }
  }
}

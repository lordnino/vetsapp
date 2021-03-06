import { WordpressLoginPage } from './../wordpress-integration/wordpress-login/wordpress-login';
import { BlogPostPage } from './../wordpress-integration/blog-post/blog-post';
import { WordpressService } from './../wordpress-integration/wordpress-integration.service';
import { BlogFeedModel } from './../wordpress-integration/blog-post.model';
import { Component } from '@angular/core';
// import { BlogPostPage } from '../blog-post/blog-post';
// import { WordpressLoginPage } from '../wordpress-login/wordpress-login';
import 'rxjs/add/operator/map';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
// import { WordpressService } from '../wordpress-integration.service';
// import { BlogFeedModel } from '../blog-post.model';


@Component({
  selector: 'layouts-page',
  templateUrl: 'layouts.html'
})
export class LayoutsPage {
  feed: BlogFeedModel = new BlogFeedModel();
  loggedUser: boolean = false;
  categoryId: number = 113;
  categoryTitle: string;
  current_posts_page = 1;
  morePagesAvailable:boolean = true;

  news1: any;
  news2: any;
  news3: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public wordpressService: WordpressService
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
    this.categoryTitle = this.navParams.get('title');

    if(!(this.feed.posts.length > 0)){
      let loading = this.loadingCtrl.create();
      loading.present();

      this.wordpressService.getRecentPosts(this.categoryId)
      .subscribe(data => {

        this.feed.posts_count = Number(data.headers.get('x-wp-total'));
        this.feed.posts_pages = Number(data.headers.get('x-wp-totalpages'));

        for(let post of data.json()){
          post.excerpt.rendered = post.excerpt.rendered.split('<a')[0] + "</p>";
          this.feed.posts.push(post);
        }
        loading.dismiss();
      });
    }
  }

  readMore(post) {
		this.navCtrl.push(BlogPostPage, {
		  post: post
		});
  }

  loadMorePosts(infiniteScroll) {

    this.morePagesAvailable = this.feed.posts_pages > this.current_posts_page;
    if(this.morePagesAvailable)
    {
      this.current_posts_page +=1;

      this.wordpressService.getRecentPosts(this.categoryId, this.current_posts_page)
      .subscribe(data => {
        for(let post of data.json()){
          post.excerpt.rendered = post.excerpt.rendered.split('<a')[0] + "</p>";
          this.feed.posts.push(post);
        }
      }, err => {
        console.log(err);
      })
    }
  }


  logOut(){
    this.wordpressService.logOut()
    .then(
      res => this.navCtrl.push(WordpressLoginPage),
      err => console.log('Error in log out')
    )
  }

  goToLogin(){
    this.navCtrl.push(WordpressLoginPage);
  }
}

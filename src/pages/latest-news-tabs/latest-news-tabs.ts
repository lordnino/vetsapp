import { SubUnionsNewsPage } from './../sub-unions-news/sub-unions-news';
import { CommitteesPage } from './../committees/committees';
import { GalleryNewsPage } from './../gallery-news/gallery-news';
import { VideosNewsPage } from './../videos-news/videos-news';
import { EventsNewsPage } from './../events-news/events-news';
import { WordpressMenuPage } from './../wordpress-integration/wordpress-menu/wordpress-menu';
import { historyPage } from './../history/history';
import { PreviousCouncilsPage } from './../previous-councils/previous-councils';
import { GridPage } from './../grid/grid';
import { shortdesPage } from './../shortdes/shortdes';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CouncilGoalsPage } from '../council-goals/council-goals';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the LatestNewsTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-latest-news-tabs',
  templateUrl: 'latest-news-tabs.html',
})
export class LatestNewsTabsPage {

  tab1Root: any; // word press menu
  tab2Root: any; // events news done
  tab3Root: any; // videos news done
  tab4Root: any; // gallery news done
  tab5Root: any;
  tab6Root: any;
  prevoiusCouncils: any;
  councilGoals: any;

  constructor() {
    this.tab1Root = WordpressMenuPage;
    this.tab2Root = CommitteesPage;
    this.tab3Root = EventsNewsPage;
    this.tab4Root = VideosNewsPage;
    this.tab5Root = GalleryNewsPage;
    this.tab6Root = SubUnionsNewsPage;
  }
}


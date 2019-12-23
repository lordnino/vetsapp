import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { filter } from 'rxjs/operator/filter';

/**
 * Generated class for the PreviousCouncilsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-previous-councils',
  templateUrl: 'previous-councils.html',
})
export class PreviousCouncilsPage {

  start_year: any = 1942;
  years = [];

  filtered_councils: any;
  raw_councils: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.calcYears();
  }

  ngOnInit() {
    this.getPreviousCouncil();
  }

  calcYears() {
    for(let i = 1942; i < 2020; i++) {
      if (i == 1967 || i == 1968 || i == 1969 || i == 1970 || i == 1972 || i == 1973 || i == 1974 ||
          i == 1975 || i == 1976 || i == 1978 || i == 1980 || i == 1982 || i == 1984 || i == 1986 ||
          i == 1988 || i == 1990 || i == 1992 || i == 1994 || i == 1995 || i == 1996 || i == 1997 ||
          i == 1999 || i == 2000 || i == 2001 || i == 2002 || i == 2003 || i == 2004 || i == 2005 || 
          i == 2006 || i == 2011 || i == 2012 || i == 2013 || i == 2014 || i == 2015) {
        this.start_year++;
        continue;
      }
      this.years.push(i);
      this.start_year++;
    }
    this.years.reverse();
    console.log(this.years);
  }

  ionViewDidLoad(year) {
    console.log('ionViewDidLoad PreviousCouncilsPage');
  }

  getPreviousCouncil() {
    this.http.get('assets/example_data/councils.json').subscribe((res: any) => {
      this.raw_councils = Object.assign({}, res);
      this.filtered_councils = Object.assign({}, res);
      console.log(this.raw_councils);
    });
  }

  toogleCouncil(index) {
    this.filtered_councils.data[index].toggle = !this.filtered_councils.data[index].toggle;
  }

  yearChange(ev) {
    console.log(this.start_year);
    if (this.start_year == 'all') {
      this.filtered_councils = Object.assign({}, this.raw_councils);
      return;
    }
    this.onfilterCouncil(this.start_year);
  }

  onfilterCouncil(start_year) {
    for(let i = 0; i < this.raw_councils.data.length; i++) {
      let elm = this.raw_councils.data[i];
      if (start_year == elm.year) {
        this.filtered_councils = {
          data: [elm]
        }
        console.log(this.filtered_councils);
        return;
      }
    }
    this.filtered_councils = {
      data: null
    }
  }
}

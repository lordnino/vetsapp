import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BeAMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-be-a-member',
  templateUrl: 'be-a-member.html',
})
export class BeAMemberPage {

  general: boolean = false;
  second: boolean = false;
  third: boolean = false;
  fourth: boolean = false;
  fifth: boolean = false;
  sixth: boolean = false;
  seventh: boolean = false;
  eigth: boolean = false;
  ninth: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeAMemberPage');
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

}

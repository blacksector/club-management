import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  inbox: Array<{from: string, subject: string, time: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.inbox = [
      {from: "Omar Quazi", subject: "Hello World", time: 1435435435},
      {from: "Foo", subject: "Bar", time: 1435435435},
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

}

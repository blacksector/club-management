import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage {

  members: Array<{id: number, name: string, position: string, department: string, joined: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.members = [
      {id: 1, name: "Omar Quazi", position: "President", department: "Executive", joined: 1543523532325}
    ];

  }

  showMember(id) {
    console.log("Opening member page for id: " + id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersPage');
  }

}

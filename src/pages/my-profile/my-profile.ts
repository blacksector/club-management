import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  userFirstName: string = "Omar";
  userLastName: string = "Quazi";

  userPosition: string = "President";
  userLocation: string = "Toronto";
  userGenderIdentity: string = "Male";
  userBirthdate: string = "July 14, 1998";

  userPersonalEmail: string = "omar@quazi.co";
  userClubEmail: string = "omar@club.domain";
  userPhone: string = "+1 (416) 000 1111";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }

}

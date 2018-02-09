import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
//
// // Menu Pages
// import { InboxPage } from '../pages/inbox/inbox';
// import { MyProfilePage } from '../pages/my-profile/my-profile';
// import { MembersPage } from '../pages/members/members';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage:string = 'HomePage';

  isAdmin: boolean = false;

  clubName: string = "Basic HR";

  pages: Array<{name: string, component: any}>;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.initApp();
  }

  initApp() {
    // Set club name
    this.clubName = "Club Management";

    // Set available pages:
    this.pages = [
      { name: 'Dashboard', component: 'HomePage' },
      { name: 'Inbox', component: 'InboxPage' },
      { name: 'My Profile', component: 'MyProfilePage' },
      { name: 'Members', component: 'MembersPage' },
      { name: 'Calendar', component: 'CalendarPage' },
      { name: 'Events', component: 'EventsPage' }
    ];

    // Find out if the user is an admin and allow admin features:
    this.isAdmin = true;

  }

  openPage(component) {
    this.nav.setRoot(component);
  }


}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
//
// import { InboxPage } from '../pages/inbox/inbox';
// import { MyProfilePage } from '../pages/my-profile/my-profile';
// import { MembersPage } from '../pages/members/members';


@NgModule({
  declarations: [
    MyApp,
    // HomePage,
    // InboxPage,
    // MyProfilePage,
    // MembersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage,
    // InboxPage,
    // MyProfilePage,
    // MembersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

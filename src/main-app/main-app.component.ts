import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AuthProvider} from "../providers/auth/auth";
import {ProjectsPage} from "../pages/projects/projects";


@Component({
  templateUrl: 'main-app.html'
})
export class MyMainApp {
  rootPage: any = ProjectsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private authProvider: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ionViewCanEnter() {
    return this.authProvider.isLoggedIn();
  }

}

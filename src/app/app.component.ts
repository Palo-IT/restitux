import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';

import {LoginPage} from "../pages/login/login";
import {TranslateService} from "@ngx-translate/core";
import {AngularFirestore} from "angularfire2/firestore";
import {MessagingProvider} from "../providers/messaging/messaging";

import {ENV} from '@app/env';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform, private translateService: TranslateService, private firestore: AngularFirestore, private messaging: MessagingProvider) {
    platform.ready().then(() => {
      this.initTranslation();
      this.initPersistence();
      this.initMessaging();
    });
    console.log(`Environment Prod ${ENV.production}`);
    console.log(`Environment Domain ${ENV.firebase.authDomain}`);
  }


  initTranslation(): void {
    this.translateService.setDefaultLang('en');
    let locale: string = navigator.language.split('-')[0];
    console.log('i18n initialized with ' + locale);
    this.translateService.use(locale);
  }

  initPersistence(): void {
    this.firestore.firestore.enablePersistence().then(() => {
      console.log("offline persitence enabled")
    })
      .catch((err) => {
        console.log("failed to enable offline persistance")
      });
  }

  initMessaging(): void{
    console.log("init messaging service");
    this.messaging.initSubscription();
  }


}


import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';

import {ENV} from '@app/env';
import {AngularFireModule} from 'angularfire2';
import {AuthProvider} from '../providers/auth/auth';
import {LoginPage} from "../pages/login/login";
import {AngularFirestore, AngularFirestoreModule} from "angularfire2/firestore";
import {ProjectService} from "../providers/persistence/project.service";
import {AngularFireAuthModule} from "angularfire2/auth";
import {MainAppModule} from "../main-app/main-app.module";

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ObjectivesService} from "../providers/persistence/objectives.service";
import {ViewService} from "../providers/view/view.service";
import {QuestionService} from "../providers/persistence/question.service";
import {InterviewsService} from "../providers/persistence/interviews.service";
import {RecordService} from "../providers/recording/record.service";
import {TranscriptionsService} from "../providers/persistence/transcriptions.service";
import {AngularFireStorage} from "angularfire2/storage";
import {MessagingProvider} from "../providers/messaging/messaging";
import {FormBuilder, FormsModule} from "@angular/forms";
import {ParticipantService} from "../providers/persistence/participant.service";
import {DatePickerModule} from "ionic2-date-picker";
import {ImageService} from "../providers/persistence/image.service";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md' // 'md' | 'ios' | 'wp'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(ENV.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    DatePickerModule,
    MainAppModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    MessagingProvider,
    AngularFirestore,
    AngularFireStorage,
    ProjectService,
    ObjectivesService,
    ParticipantService,
    QuestionService,
    InterviewsService,
    ImageService,
    TranscriptionsService,
    ViewService,
    RecordService,
    FormBuilder,
    ViewService,
  ]
})
export class AppModule {
}


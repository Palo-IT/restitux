import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyMainApp} from './main-app.component';

import {ProjectNewPage} from '../pages/project-new/project-new';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ProjectsPage} from "../pages/projects/projects";
import {ProjectSinglePage} from "../pages/project-single/project-single";
import {ComponentsModule} from "../components/components.module";
import {HttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {QuestionCreatorPage} from "../pages/question-creator/question-creator";
import {DirectivesModule} from "../directives/directives.module";
import {AnalysisPage} from "../pages/analysis/analysis";
import {InterviewPage} from "../pages/interview/interview";
import {InterviewFlowPage} from "../pages/interview-flow/interview-flow";
import {InterviewTagPage} from "../pages/interview-tag/interview-tag";
import {ParticipantPanelPage} from "../pages/participant-panel/participant-panel";
import {InterviewRecordPage} from "../pages/interview-record/interview-record";
import {AnalysisTextPage} from "../pages/analysis-text/analysis-text";
import {MyApp} from "../app/app.component";
import {AmazingTimePickerModule} from "amazing-time-picker";
import {QuillModule} from 'ngx-quill';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    MyMainApp,
    ProjectNewPage,
    ProjectsPage,
    ProjectSinglePage,
    QuestionCreatorPage,
    InterviewPage,
    InterviewFlowPage,
    InterviewTagPage,
    InterviewRecordPage,
    ParticipantPanelPage,
    AnalysisPage,
    AnalysisTextPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md' // 'md' | 'ios' | 'wp'
    }),
    ComponentsModule,
    DirectivesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AmazingTimePickerModule,
    QuillModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyMainApp,
    ProjectNewPage,
    ProjectsPage,
    ProjectSinglePage,
    QuestionCreatorPage,
    InterviewPage,
    InterviewFlowPage,
    InterviewTagPage,
    InterviewRecordPage,
    ParticipantPanelPage,
    AnalysisPage,
    AnalysisTextPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class MainAppModule {
}

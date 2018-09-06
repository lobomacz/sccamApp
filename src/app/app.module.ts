import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MedicosPage } from '../pages/medicos/medicos';
import { AgendaPage } from '../pages/agenda/agenda';
import { ExpedientePage } from '../pages/expediente/expediente';
import { LoginPage } from '../pages/login/login';
import { PopoverPage }from '../pages/popover/popover';
import { Popover2Page } from '../pages/popover2/popover2';

import { SQLite } from '@ionic-native/sqlite';
import { IonicStorageModule } from '@ionic/storage';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SccamProvider } from '../providers/sccam/sccam';


export const firebaseConfig = {
    apiKey: "AIzaSyBMteCgqELwi9jsjsITTVozMHFZWhV2uF0",
    authDomain: "sccamapp.firebaseapp.com",
    databaseURL: "https://sccamapp.firebaseio.com",
    projectId: "sccamapp",
    storageBucket: "sccamapp.appspot.com",
    messagingSenderId: "58452415666"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MedicosPage,
    AgendaPage,
    ExpedientePage,
    LoginPage,
    PopoverPage,
    Popover2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule, HttpClientModule, 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MedicosPage,
    AgendaPage,
    ExpedientePage,
    LoginPage,
    PopoverPage,
    Popover2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SccamProvider
  ]
})
export class AppModule {}

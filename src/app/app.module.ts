import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CardsPage } from '../pages/cards/cards';
import { ChecklistPage } from '../pages/checklist/checklist';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        CardsPage,
        ChecklistPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        CardsPage,
        ChecklistPage
    ],
    providers: [
        StatusBar,
        SplashScreen,        
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }

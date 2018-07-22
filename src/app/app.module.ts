import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from "@ionic-native/keyboard";

import { MyApp } from './app.component';
import { CustomerService, SupportService } from "../shared/index";
import { SocketService, Sql, UtilService, RestAPISocket } from "../providers/index";
import { ComplainerService } from "../shared/index";
import { ChatPage } from "../pages/chat/chat";
import { ChatBubble } from "../components/chatBubble/chatBubble";
import { ElasticTextarea } from "../components/elasticTextarea/elasticTextarea";
import { KeyboardAttachDirective } from "../directives/keyboard-attach.directive";


@NgModule({
    declarations: [
        MyApp,
        ElasticTextarea,
        KeyboardAttachDirective,
        ChatBubble,
        ChatPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        BrowserModule,
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ChatBubble,
        ChatPage
    ],
    providers: [
        Sql,
        StatusBar,
        SplashScreen,
        Keyboard,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        CustomerService,
        SupportService,
        ComplainerService,
        SocketService,
        UtilService,
        RestAPISocket
    ]
})
export class AppModule { }

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from "@ionic-native/keyboard";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = 'LoginPage';

    pages: Array<any>;

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public keyboard: Keyboard,
        public loadingCtrl: LoadingController,
        public splashScreen: SplashScreen) {
        this.initializeApp();
        this.pages = [
            { ios: 'home', md: 'home', title: 'Home', component: 'HomeTabsPage' },
            { ios: 'chatboxes', md: 'chatboxes',title: 'Complainers', component: 'ListComplainersPage' },
            { ios: 'contact', md: 'contact',title: 'Personal Details', component: 'DetailsTabsPage' },
            { ios: 'contacts', md: 'contacts',title: 'Customers', component: 'ListCustomersPage' }            
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.keyboard.disableScroll(true);
        });
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }
}

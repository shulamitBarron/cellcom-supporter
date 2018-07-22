import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { SupportService } from "../../shared/index";

@IonicPage()
@Component({
    selector: 'page-home-tabs',
    templateUrl: 'home-tabs.html'
})
export class HomeTabsPage {
    constructor(private navCtrl: NavController,
        private supportService: SupportService) {
        const supporter = this.supportService.getSupporter();
        if (!supporter) {
            this.navCtrl.setRoot("LoginPage");
            this.navCtrl.popToRoot();
        }
    }
}

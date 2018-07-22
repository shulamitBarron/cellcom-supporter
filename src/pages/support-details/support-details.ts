import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Supporter } from "../../models/supporter";
import { SupportService } from "../../shared/supporter.service";

@IonicPage()
@Component({
    selector: 'page-support-details',
    templateUrl: 'support-details.html',
})
export class SupportDetailsPage {
    supporter: Supporter = <Supporter>{};

    constructor(public navCtrl: NavController,
        private supportService: SupportService) {
        const supporter = this.supportService.getSupporter();        
        if (!supporter) {
            this.navCtrl.parent.parent.setRoot("LoginPage");
            this.navCtrl.parent.parent.popToRoot();
        }
        else {
            this.supporter = supporter;
        }
    }
}

import { Component } from '@angular/core';
import { NavController, IonicPage, ToastController } from 'ionic-angular';

import { SupportService } from "../../shared/supporter.service";
import { Supporter } from "../../models/supporter";

@IonicPage()
@Component({
    selector: 'page-update-details',
    templateUrl: 'update-details.html',
})
export class UpdateDetailsPage {

    supporter: Supporter = <Supporter>{};

    constructor(public navCtrl: NavController,
        private toastController: ToastController,
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

    updateDetails() {
        this.supportService.updateDetails(this.supporter).subscribe(() => {
            let toast = this.toastController.create({
                message: 'Hi, ' + this.supporter.name + ' we updated your details',
                duration: 3000,
                position: 'bottom'
            });
            toast.present().then(() => {
                this.supporter = this.supportService.getSupporter();
                this.navCtrl.setRoot('HomeTabsPage');
            })
        }, () => {
            let toast = this.toastController.create({
                message: 'Sorry, There is an error',
                duration: 3000,
                position: 'bottom'
            });
            toast.present()
        });
    }
}

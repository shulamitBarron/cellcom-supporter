import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ToastController } from 'ionic-angular';

import { Supporter } from "../../models/index";
import { SupportService } from "../../shared/index";

@IonicPage()
@Component({
    selector: 'page-create-support',
    templateUrl: 'create-support.html',
})
export class CreateSupportPage {
    supporter: Supporter = <Supporter>{};

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private toastController: ToastController,
        private supportService: SupportService) {
    }

    saveDetails() {
        this.supportService.saveSupporter(this.supporter).subscribe(() => {
            let toast = this.toastController.create({
                message: 'Hi, ' + this.supporter.name + ' we saved your details',
                duration: 3000,
                position: 'bottom'
            });
            toast.present().then(() => this.navCtrl.setRoot('HomeTabsPage'));
        },
            () => {
                let toast = this.toastController.create({
                    message: 'Sorry, There is an error.',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            });
    }
}


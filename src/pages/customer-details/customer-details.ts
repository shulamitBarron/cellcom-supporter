import { Component } from '@angular/core';
import { NavParams, IonicPage, NavController } from 'ionic-angular';

import { Customer } from "../../models/index";
import { SupportService } from "../../shared/index";

@IonicPage()
@Component({
  selector: 'page-customer-details',
  templateUrl: 'customer-details.html',
})
export class CustomerDetailsPage {

    customer: Customer = <Customer>{};

    constructor(private navCtrl: NavController,
        public navParams: NavParams,
        private supportService: SupportService) {
        this.customer = this.navParams.data;
        const supporter = this.supportService.getSupporter();
        if (!supporter) {
            this.navCtrl.setRoot("LoginPage");
            this.navCtrl.popToRoot();
        }
  }
}

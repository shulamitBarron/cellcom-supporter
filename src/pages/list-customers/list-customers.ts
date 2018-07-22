import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { CustomerService } from "../../shared/customer.service";
import { Customer } from "../../models/customer";
import { SupportService } from "../../shared/index";

@IonicPage()
@Component({
    selector: 'page-list-customers',
    templateUrl: 'list-customers.html',
})
export class ListCustomersPage {
    customers: Array<Customer>;
    searchTerm: string = '';

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private customerService: CustomerService,
        private supportService: SupportService) {
        this.getcustomers();
        const supporter = this.supportService.getSupporter();
        if (!supporter) {
            this.navCtrl.setRoot("LoginPage");
            this.navCtrl.popToRoot();
        }
    }

    private getcustomers(): void {
        this.customerService.getListCustomers()
            .subscribe(customer => this.customers = customer);
    }

    customerDetails(customer) {
        this.navCtrl.push('CustomerDetailsPage', customer);
    }

    setFilteredCustomers(name) {
        return name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    }
}
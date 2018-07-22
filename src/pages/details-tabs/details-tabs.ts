import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-details-tabs',
    templateUrl: 'details-tabs.html',
})
export class DetailsTabsPage {
    editDetail = 'UpdateDetailsPage';
    showDetail = 'SupportDetailsPage';

    constructor() {
    }
}

import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';
import { DetailsTabsPage } from "./details-tabs";


@NgModule({
    declarations: [DetailsTabsPage],
    imports: [IonicPageModule.forChild(DetailsTabsPage)],
    entryComponents: [DetailsTabsPage]
})
export class DetailsTabsPageModue { }

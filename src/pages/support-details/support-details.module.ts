import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';
import { SupportDetailsPage } from "./support-details";


@NgModule({
    declarations: [SupportDetailsPage],
    imports: [IonicPageModule.forChild(SupportDetailsPage)],
    entryComponents: [SupportDetailsPage]
})
export class supportDetailsModue { }

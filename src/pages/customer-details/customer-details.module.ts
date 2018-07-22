﻿import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerDetailsPage } from "./customer-details";

@NgModule({
    declarations: [CustomerDetailsPage],
    imports: [IonicPageModule.forChild(CustomerDetailsPage)],
    entryComponents: [CustomerDetailsPage]
})
export class CustomerDetailsPageModule { }

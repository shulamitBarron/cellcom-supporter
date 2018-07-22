import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateDetailsPage } from "./update-details";


@NgModule({
    declarations: [UpdateDetailsPage],
    imports: [IonicPageModule.forChild(UpdateDetailsPage)],
    entryComponents: [UpdateDetailsPage]
})
export class UpdateDetailsPageModule { }

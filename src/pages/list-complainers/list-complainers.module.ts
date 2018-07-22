import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListComplainersPage } from "./list-complainers";

@NgModule({
    declarations: [ListComplainersPage],
    imports: [IonicPageModule.forChild(ListComplainersPage)],
    entryComponents: [ListComplainersPage]
})
export class ListComplainersPageModule { }

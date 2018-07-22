import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { ListCustomersPage } from "./list-customers";

@NgModule({
    declarations: [ListCustomersPage],
    imports: [IonicPageModule.forChild(ListCustomersPage), Ng2FilterPipeModule],
    entryComponents: [ListCustomersPage]
})
export class ListCustomersPageModule { }

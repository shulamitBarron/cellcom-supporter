import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTabsPage } from "./home-tabs";

@NgModule({
    declarations: [HomeTabsPage],
    imports: [IonicPageModule.forChild(HomeTabsPage)],
    entryComponents: [HomeTabsPage]
})
export class HomeTabsPageModule { }

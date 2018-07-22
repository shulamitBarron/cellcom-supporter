import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateSupportPage } from "./create-support";

@NgModule({
    declarations: [CreateSupportPage],
    imports: [IonicPageModule.forChild(CreateSupportPage)],
    entryComponents: [CreateSupportPage]
})
export class CreateSupportPageModule { }

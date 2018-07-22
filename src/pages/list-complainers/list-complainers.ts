import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { Complainer } from "../../models/index";
import { ComplainerService, SupportService } from "../../shared/index";
import { ChatPage } from "../chat/chat";
import { SocketService, RestAPISocket } from "../../providers/index";

@IonicPage()
@Component({
    selector: 'page-list-complainers',
    templateUrl: 'list-complainers.html',
})
export class ListComplainersPage {
    compliners: Array<Complainer> = new Array<Complainer>();
    constructor(public navCtrl: NavController,
        private complainerService: ComplainerService,
        private supportService: SupportService,
        private socketService: SocketService,
        private restAPISocket: RestAPISocket
    ) {
        const supporter = this.supportService.getSupporter();
        if (!supporter) {
            this.navCtrl.setRoot("LoginPage");
            this.navCtrl.popToRoot();
        }
    }

    ionViewDidLoad() {
        this.getComplainers();
        this.restAPISocket.init();
        this.restAPISocket.UpdateListComplainer.subscribe(
            () => this.getComplainers(),
            error => console.log(error));
    }

    private getComplainers(): void {
        this.complainerService.getListComplainers()
            .subscribe(compliner => this.compliners = compliner,
                () => this.compliners = []);
    }

    private getChat() {
        this.complainerService.getFirstComplainer().subscribe(res => {
            let data = res.json();
            this.socketService.init(data.roomId);
            this.navCtrl.push(ChatPage);
        })
    }

}

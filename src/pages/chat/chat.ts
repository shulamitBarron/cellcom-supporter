import { Component, ViewChild, EventEmitter, NgZone } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { UtilService, SocketService} from "../../providers/index";
import { Supporter, ChatMessage} from "../../models/index";


@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
  })
export class ChatPage {
    @ViewChild('txtChat') txtChat: any;
    @ViewChild('content') content: any;

    messages: any[] = [];
    chatBox: string = "";
    btnEmitter: EventEmitter<string> = new EventEmitter<string>();
    supporter: Supporter;

    constructor(public navCtrl: NavController,
        public _zone: NgZone,
        public toast:ToastController,
        public socketService: SocketService) {
        this.init();
    }
    
    ionViewWillLeave() {
        this.socketService.disconnect();
    }

    init() {
        this.socketService.messages.subscribe((chatMessage: ChatMessage) => {
            this._zone.run(() =>this.messages.push(chatMessage));
            this.scrollToBottom();
        });
        let self = this;
        this.socketService.theCustomerLeftTheChat.subscribe(() => {  
            debugger;         
            self.txtChat.ionTxtArea.disabled = true;
            const toast = this.toast.create({
                    message: 'The customer left the chat',
                    duration: 5000,
                    position:'bottom'
                });
            toast.present();
            this.navCtrl.setRoot('HomeTabsPage');
        });
        // this.socketService.dangerToastToUser.subscribe(() => {});
    }
    public startChat() {
        this.socketService.startChat();
    }

    public sendMessage() {
        this.btnEmitter.emit("sent clicked");
        this.txtChat.setFocus();
        const message = this.txtChat.content;
        this.send(message);
        this.txtChat.clearInput();
    }

    send(message) {
        this.socketService.newRequest(message);
        this.chatBox = '';
        this.scrollToBottom();
    }

    scrollToBottom() {
        this._zone.run(() => setTimeout(() => this.content.scrollToBottom(300)));
    }

}

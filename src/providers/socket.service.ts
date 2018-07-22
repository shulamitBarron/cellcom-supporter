import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import * as io from "socket.io-client";

import { SOCKET_HOST } from "../assets/constants";
import { UtilService } from "./util.service";
import { RestAPISocket } from "./restAPISocket.service"
import { Supporter } from "../models/supporter";
import { SupportService } from "../shared/supporter.service";
import { ComplainerService } from "../shared/complainer.service";
import { ChatMessage, MessageType } from "../models/index";

import Socket = SocketIOClient.Socket;

@Injectable()
export class SocketService {
    public messages: Observable<ChatMessage>;
    private socketObserver: any;
    private socket: Socket;
    private room: string;
    private supporter: Supporter;
    public from: string;
    theCustomerLeftTheChat: EventEmitter<any> = new EventEmitter();
    dangerToastToUser: EventEmitter<any> = new EventEmitter();

    constructor(private supportService: SupportService,
        private complainerService: ComplainerService,
        private restAPISocket: RestAPISocket
    ) {
        this.supporter = this.supportService.getSupporter();
        this.from = this.supporter.name.toString();
        this.messages = Observable.create(observer => {
            this.socketObserver = observer;
        });
        // this.init();
    }

    init(roomId) {
        this.room = roomId;
        this.socket = io(SOCKET_HOST);
        this.socket.on("connect", () => {
            this.socket.emit('load', roomId);
        });

        this.socket.on('tooManyUnPermissionWords', () => {
            this.theCustomerLeftTheChat.emit();
        })

        this.socket.on('UserUsedUnPermissionWord', () => this.dangerToastToUser.emit());

        this.socket.on('leave', () => {
            this.theCustomerLeftTheChat.emit();
        });

        this.socket.on('disconnect', () => { });

        this.socket.on('receive', response => {
            console.log('response ', response);
            let chatMessage: ChatMessage = response;
            if (typeof response === 'string') {
                chatMessage = {
                    type: MessageType.MSG_RES,
                    from: '',
                    room: this.socket.id,
                    message: response
                };
            }
            else {
                chatMessage.type = MessageType.MSG_RES;
            }
            chatMessage.epoch = UtilService.getEpoch();
            this.socketObserver.next(chatMessage);
        });

        this.socket.on('peopleinchat', (data) => {
            // call the server-side function 'login' and send user's parameters
            this.socket.emit('login', {
                user: this.from,
                avatar: this.supporter.email,
                id: this.room
            });
        });
    }

    disconnect() {
        this.socket.disconnect();
    }

    getComplainerData() {
        this.from = "supporter";
    }

    connect() {
        this.socket.connect();
        this.getComplainerData();
        this.complainerService.removeComplain(this.room);
        this.restAPISocket.remove();
    }

    leave() {
    }

    tooManyUnPermissionWords() {
        this.tooManyUnPermissionWords();
    }

    UserUsedUnPermissionWord() {
        this.UserUsedUnPermissionWord();
    }

    newRequest(message: string) {
        const chatMessage: ChatMessage = {
            type: MessageType.MSG_REQ,
            message: message,
            room: this.room,
            from: this.from,
            epoch: UtilService.getEpoch()
        };
        this.socket.emit('msg', chatMessage)
        this.socketObserver.next(chatMessage);

    }

    startChat() {
        this.connect();
    }
}

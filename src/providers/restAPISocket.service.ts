import { Injectable, EventEmitter } from "@angular/core";
import Socket = SocketIOClient.Socket;
import * as io from "socket.io-client";
import { CELLCOM_URL } from "../assets/constants";

@Injectable()
export class RestAPISocket {
    private socket: Socket;
    UpdateListComplainer: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.init()

    }

    init() {
        this.socket = io(CELLCOM_URL, { autoConnect: false, query: 'from=supporter' });
        this.socket.on("connect", () => {
            this.socket.on('complainerAdded', () => setTimeout(() => this.UpdateListComplainer.emit(), 0));
          
        })       
    }

    remove() {
        this.socket.emit("remove");
    }

    connect() {
        this.socket.connect();
    }

}
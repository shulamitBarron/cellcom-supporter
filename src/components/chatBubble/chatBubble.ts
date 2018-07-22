import { Component } from "@angular/core";

import { UtilService, SocketService } from "../../providers";
import { ChatMessage } from "../../models/index";

@Component({
  selector: 'chat-bubble',
  inputs: ['chatMessage'],
  templateUrl: 'chatBubble.html'
})
export class ChatBubble {
  public chatMessage: ChatMessage;

  constructor(private socketService: SocketService) { }

  isFromMe(){
    return this.chatMessage.from==this.socketService.from;
  }

  formatEpoch(epoch): string {
    return UtilService.getCalendarDay(epoch);
  }
}

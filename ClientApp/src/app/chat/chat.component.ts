import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrivateChatComponent } from '../private-chat/private-chat.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit,OnDestroy {
@Output() closeChatEmitter = new EventEmitter();
  constructor(public chatService:ChatService,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.chatService.createChatConnection();
  }

  backToHome(){
    this.closeChatEmitter.emit();
  }

  ngOnDestroy(): void {
    this.chatService.stopChatConnection();
  }
  sendMessage(content:string){
    this.chatService.sendMessage(content);
  }

  openPrivateChat(toUser : string){
    const modelRef = this.modalService.open(PrivateChatComponent);
    modelRef.componentInstance.toUser = toUser;
  }

}

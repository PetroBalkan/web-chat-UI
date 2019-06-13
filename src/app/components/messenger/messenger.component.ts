import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { WebSocketService } from '../../services/WebSocket.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-messenger',
    templateUrl: './messenger.component.html',
    styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {
    @ViewChild('messagesContainer') public messagesContainer: ElementRef;
    public isAllMessages = false;
    public messages = [];
    private _request$: Subscription;
    private _scrollHeight = 0;
    private readonly _take = 10;

    constructor(private _chatService: ChatService, private _ws: WebSocketService) {
        this._ws.connect()
            .subscribe(message => {
                const { data } = message;
                this.messages.push(...JSON.parse(data));
                setTimeout(() => this._scrollTo(0));
            });
    }

    public ngOnInit(): void {
        this._loadMessages();
    }

    public loadMoreMessages(): void {
        if (this.isAllMessages) {
            return;
        }
        if (this._request$) {
            this._request$.unsubscribe();
        }
        this._scrollHeight = this.messagesContainer.nativeElement.scrollHeight;
        this._loadMessages();
    }

    private _loadMessages(): void {
        this._chatService.getMessages({ skip: this.messages.length, take: this._take })
            .subscribe(messages => {
                if (messages.length < this._take) {
                    this.isAllMessages = true;
                }
                this.messages = [...messages, ...this.messages];
                setTimeout(() => this._scrollTo(this._scrollHeight));
            });
    }

    private _scrollTo(previousScrollHeight = 0): void {

        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight - previousScrollHeight;
        const { clientHeight, scrollHeight } = this.messagesContainer.nativeElement;
        if (clientHeight === scrollHeight) {
            this.loadMoreMessages();
        }
    }
}

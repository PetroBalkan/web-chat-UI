import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-message-form',
    templateUrl: './message-form.component.html',
    styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
    public messageText = '';
    private _userName: string;
    private _request$;

    constructor(
        private _chatService: ChatService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
    }

    ngOnInit() {
        this._userName = this._route.snapshot.queryParams.userName;
        if (!this._userName) {
            this._router.navigate(['sign-in']);
        }
    }

    public sendMessage(): void {
        if (!this.messageText.trim()) {
            return;
        }
        const message = { message: this.messageText, userName: this._userName };
        if (this._request$) {
            this._request$.unsubscribe();
        }
        this._request$ = this._chatService.addMessage(message)
            .subscribe(newMessage => {
                this._chatService.getConnection().next(newMessage);
                this.messageText = '';
            });
    }

}

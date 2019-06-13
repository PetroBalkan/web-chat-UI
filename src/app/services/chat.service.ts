import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WebSocketService } from './WebSocket.service';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    private readonly _serverURL = 'http://localhost:3000/messages/';

    constructor(private _http: HttpClient, private _wsService: WebSocketService) {
    }

    public addMessage(messageData: any): Observable<any> {
        return this._http.post(this._serverURL, messageData);
    }

    public getMessages(params): Observable<Array<any>> {
        return this._http.get<Array<any>>(this._serverURL, { params });
    }

    public getConnection() {
        return this._wsService.connect();
    }
}

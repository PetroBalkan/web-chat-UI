import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WebSocketService {
    private _subject: Subject<any>;
    private _url = 'ws://localhost:8000';

    constructor() {
    }

    public connect(): Subject<any> {
        if (!this._subject) {
            this._subject = this._create();
        }
        return this._subject;
    }

    private _create(): Subject<any> {
        const ws = new WebSocket(this._url);
        const observable = Observable.create(obs => {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        const observer = {
            next: (data: Object) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return Subject.create(observer, observable);
    }
}

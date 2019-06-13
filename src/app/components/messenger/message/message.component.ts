import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
    @Input() public message;

    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer2,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {
        const userName = this._route.snapshot.queryParams.userName;
        if (this.message.userName === userName) {
            this._renderer.addClass(this._elementRef.nativeElement, 'ownMessage');
        }
    }

}

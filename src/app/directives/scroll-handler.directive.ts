import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[appScrollHandler]'
})
export class ScrollHandlerDirective {

    @Output() public scrollToTop = new EventEmitter();
    @Output() public scrollToDown = new EventEmitter();

    constructor(private _elementRef: ElementRef) {
    }

    @HostListener('scroll', ['$event'])
    public onScroll(e: Event): void {
        if (this._isUserScrollingDown()) {
            this.scrollToDown.emit();
        }
        if (this._isUserScrollingTop()) {
            this.scrollToTop.emit();
        }
    }

    private _isUserScrollingDown(): boolean {
        const { clientHeight, scrollHeight, scrollTop } = this._elementRef.nativeElement;
        return scrollHeight === clientHeight + scrollTop;

    }

    private _isUserScrollingTop(): boolean {
        const { scrollTop } = this._elementRef.nativeElement;
        return scrollTop === 0;
    }

}

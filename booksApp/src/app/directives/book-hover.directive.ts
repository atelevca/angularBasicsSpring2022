import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appBookHover]'
})
export class BookHoverDirective {

    constructor() {
    }

    @HostBinding('style.opacity') opacity = 1;

    @HostListener('mouseenter') onMouseEnter() {
        this.opacity = 0.8;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.opacity = 1;
    }
}

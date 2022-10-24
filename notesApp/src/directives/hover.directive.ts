import { ElementRef, Directive, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[boxShadow]'
})

export class CardHoverDirective {
    constructor(private el: ElementRef,
        private renderer: Renderer2) {
        renderer.setStyle(el.nativeElement, 'cursor', 'pointer');
    }

    @HostListener('mouseover', ['$event.path'])
    public onHover() {
        this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px');
    }
    @HostListener('mouseleave', ['$event.path'])
    public onExitHover(){
        this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'none');
    }
}

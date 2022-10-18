import {Directive, ElementRef, Host, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mousedown') onMouseDown() {
    this.el.nativeElement.style.scale = "0.9"
  }

  @HostListener('mouseup') onMouseUp() {
    this.el.nativeElement.style.scale = '1'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.scale = '1'
  }

}

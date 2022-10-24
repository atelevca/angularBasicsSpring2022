import { Directive, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[hoverCard]',
})
export class HoverDirective {
  @Input() thickness: string = '1';
  @Input() color: string = 'black';

  @HostBinding('style.borderWidth')
  borderWidth: string = '';

  @HostBinding('style.borderStyle')
  borderStyle: string = '';

  @HostBinding('style.borderColor')
  borderColor: string = '';

  @HostBinding('style.cursor')
  cursor: string = '';

  ngOnInit() {
    this.borderWidth = '0';
    this.borderStyle = 'solid';
    this.borderColor = this.color;
    this.cursor = 'pointer';
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.borderWidth = this.thickness;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.borderWidth = '0';
  }
}

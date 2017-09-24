import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[bold]'
})

export class BoldHostBindingDirective {
  private color = 'blue';
  constructor() {}

  @HostBinding('style.color') get getColor() {
    return this.color;
  }

  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.color = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = 'blue';
  }
}

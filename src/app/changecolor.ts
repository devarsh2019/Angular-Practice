import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangecolor]',
  standalone: false,
})
export class Changecolor {
  constructor(private el: ElementRef) {
    this.el.nativeElement.innerText;
  }
  value = '';
  @HostListener('mouseenter') onHover() {
    if (this.el.nativeElement.innerText.length > 30) {
      this.value = this.el.nativeElement.innerText;
      this.el.nativeElement.innerText = this.el.nativeElement.innerText.slice(0, 29) + '...';
    }
  }
  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.innerText = this.value;
  }
}

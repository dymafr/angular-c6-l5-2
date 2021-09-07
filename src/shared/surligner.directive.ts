import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({ selector: '[monSurlignage]' })
export class SurlignerDirective {
  constructor() {}

  @HostBinding('style.backgroundColor') couleur?: string;
  @Input('monSurlignage') couleurConfig?: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.couleur = this.couleurConfig || 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.couleur = '';
  }
}

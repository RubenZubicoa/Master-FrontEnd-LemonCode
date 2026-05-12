import { Directive, ElementRef, HostBinding, HostListener, inject, Input, input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: 'img[appRotate]',
})
export class Rotate implements OnChanges {
  @Input() defaultRotate: number = 0;

  private elementRef: ElementRef = inject(ElementRef);
  private deg = 0;

  @HostListener('click')
  onClick() {
    this.rotateImage();
  }

  ngOnChanges(): void {
    if(this.defaultRotate) {
      this.rotateImage(this.defaultRotate);
    }
  }

  private rotateImage(value: number = 10){
    this.deg += value;
    this.elementRef.nativeElement.style.transform = `rotate(${this.deg}deg)`;
  }
}

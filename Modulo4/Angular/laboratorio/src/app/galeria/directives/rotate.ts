import { Directive, ElementRef, HostListener, inject, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'img[appRotate]',
})
export class Rotate implements OnInit {
  @Input() defaultRotate: number = 0;

  private elementRef: ElementRef = inject(ElementRef);
  private deg = 0;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const step = 10;
    this.rotateImage(event.shiftKey ? -step : step);
  }

  ngOnInit(): void {
    if(this.defaultRotate) {
      this.rotateImage(this.defaultRotate);
    }
  }

  private rotateImage(value: number = 10){
    this.deg += value;
    this.elementRef.nativeElement.style.transform = `rotate(${this.deg}deg)`;
  }
}

import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-buttons',
  imports: [MatButtonModule],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
})
export class Buttons {  
  public disabledPrevious = input<boolean>(false);
  public disabledNext = input<boolean>(false);
  public isPlaying = input<boolean>(false);
  public previous = output<void>();
  public next = output<void>();
  public increase = output<void>();
  public decrease = output<void>();
  public play = output<void>();
  public stop = output<void>();

  public onPreviousClick() {
    this.previous.emit();   
  }

  public onNextClick() {
    this.next.emit();
  }

  public onIncreaseClick() {
    this.increase.emit();
  }

  public onDecreaseClick() {
    this.decrease.emit();
  }

  public onPlayClick() {
    this.play.emit();
  }

  public onStopClick() {
    this.stop.emit();
  }
}

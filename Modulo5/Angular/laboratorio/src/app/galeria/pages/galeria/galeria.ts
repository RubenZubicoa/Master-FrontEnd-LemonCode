import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { ImagesList } from '../../components/images-list/images-list';
import { GaleriaData, IMAGE_LIST } from '../../models/galeria-data';
import { ImageSelected } from '../../components/image-selected/image-selected';
import { Buttons } from '../../components/buttons/buttons';

@Component({
  selector: 'app-galeria',
  imports: [ImagesList, ImageSelected, Buttons],
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Galeria {
  public readonly imageList = IMAGE_LIST;
  public selectedImage = signal<GaleriaData>(IMAGE_LIST[0]);
  public size = signal<number>(1);
  public play = signal<boolean>(false);

  public disabledPrevious = computed(() => this.selectedImage().id === this.imageList[0].id);
  public disabledNext = computed(() => this.selectedImage().id === this.imageList[this.imageList.length - 1].id);
  public isPlaying = computed(() => this.play());

  public interval: number | null = null;

  constructor() {
    effect(() => {
      if (this.play()) {
        this.interval = setInterval(() => {
          const currentIndex = this.getCurrentIndex();
          if (currentIndex < this.imageList.length - 1) {
            this.onNextClick();
          }else{
            this.selectedImage.set(this.imageList[0]);
          }
        }, 2000);
      } else {
        if (this.interval) {
          clearInterval(this.interval);
        }
      }
    })
  }

  public onImageClick(image: GaleriaData) {
    this.selectedImage.set(image);
  }

  public onPreviousClick() {
    const currentIndex = this.getCurrentIndex();
    if (currentIndex > 0) {
      this.selectedImage.set(this.imageList[currentIndex - 1]);
    }
  }

  public onNextClick() {
    const currentIndex = this.getCurrentIndex();
    if (currentIndex < this.imageList.length - 1) {
      this.selectedImage.set(this.imageList[currentIndex + 1]);
    }
  }

  public onIncreaseClick() {
    this.size.set(this.size() + 0.1);
  }

  public onDecreaseClick() {
    this.size.set(this.size() - 0.1);
  }

  public onPlayClick() {
    this.play.set(true);
  }

  public onStopClick() {
    this.play.set(false);
  }

  private getCurrentIndex() {
    return this.imageList.findIndex(image => image.id === this.selectedImage().id);
  }
}

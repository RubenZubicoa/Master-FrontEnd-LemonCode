import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
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

  public disabledPrevious = computed(() => this.selectedImage().id === this.imageList[0].id);
  public disabledNext = computed(() => this.selectedImage().id === this.imageList[this.imageList.length - 1].id);

  public onImageClick(image: GaleriaData) {
    this.selectedImage.set(image);
  }

  public onPreviousClick() {
    const currentIndex = this.imageList.findIndex(image => image.id === this.selectedImage().id);
    if (currentIndex > 0) {
      this.selectedImage.set(this.imageList[currentIndex - 1]);
    }
  }

  public onNextClick() {
    const currentIndex = this.imageList.findIndex(image => image.id === this.selectedImage().id);
    if (currentIndex < this.imageList.length - 1) {
      this.selectedImage.set(this.imageList[currentIndex + 1]);
    }
  }
}

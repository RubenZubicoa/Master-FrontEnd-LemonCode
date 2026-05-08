import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ImagesList } from '../../components/images-list/images-list';
import { GaleriaData, IMAGE_LIST } from '../../models/galeria-data';
import { ImageSelected } from '../../components/image-selected/image-selected';

@Component({
  selector: 'app-galeria',
  imports: [ImagesList, ImageSelected],
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Galeria {
  public readonly imageList = IMAGE_LIST;
  public selectedImage = signal<GaleriaData>(IMAGE_LIST[0]);

  public onImageClick(image: GaleriaData) {
    this.selectedImage.set(image);
  }
}

import { Component, input, output } from '@angular/core';
import { GaleriaData } from '../../models/galeria-data';

@Component({
  selector: 'app-images-list',
  imports: [],
  templateUrl: './images-list.html',
  styleUrl: './images-list.scss',
})
export class ImagesList {
  public imageList = input.required<GaleriaData[]>();
  public selectedImage = output<GaleriaData>();

  public onImageClick(image: GaleriaData) {
    this.selectedImage.emit(image);
  }
}

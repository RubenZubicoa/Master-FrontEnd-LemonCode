import { Component, input } from '@angular/core';
import { GaleriaData } from '../../models/galeria-data';

@Component({
  selector: 'app-images-list',
  imports: [],
  templateUrl: './images-list.html',
  styleUrl: './images-list.scss',
})
export class ImagesList {
  public imageList = input.required<GaleriaData[]>();
}

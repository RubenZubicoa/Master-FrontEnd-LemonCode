import { Component } from '@angular/core';
import { ImagesList } from '../../components/images-list/images-list';
import { IMAGE_LIST } from '../../models/galeria-data';

@Component({
  selector: 'app-galeria',
  imports: [ImagesList],
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
})
export class Galeria {
  public readonly imageList = IMAGE_LIST;
}

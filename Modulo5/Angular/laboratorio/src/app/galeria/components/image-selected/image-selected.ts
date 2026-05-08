import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GaleriaData } from '../../models/galeria-data';

@Component({
  selector: 'app-image-selected',
  imports: [],
  templateUrl: './image-selected.html',
  styleUrl: './image-selected.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageSelected {
  public selectedImage = input.required<GaleriaData>();
}

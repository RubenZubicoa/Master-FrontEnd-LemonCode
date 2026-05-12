import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GaleriaData } from '../../models/galeria-data';
import { Rotate } from '../../directives/rotate';

@Component({
  selector: 'app-image-selected',
  imports: [Rotate],
  templateUrl: './image-selected.html',
  styleUrl: './image-selected.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageSelected {
  public selectedImage = input.required<GaleriaData>();
  public size = input<number>(1); 
}

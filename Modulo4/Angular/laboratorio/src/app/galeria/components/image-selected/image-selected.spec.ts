import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSelected } from './image-selected';

describe('ImageSelected', () => {
  let component: ImageSelected;
  let fixture: ComponentFixture<ImageSelected>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSelected],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageSelected);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

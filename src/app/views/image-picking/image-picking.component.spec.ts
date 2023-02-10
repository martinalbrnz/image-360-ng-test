import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePickingComponent } from './image-picking.component';

describe('ImagePickingComponent', () => {
  let component: ImagePickingComponent;
  let fixture: ComponentFixture<ImagePickingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ImagePickingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHotspotComponent } from './new-hotspot.component';

describe('NewHotspotComponent', () => {
  let component: NewHotspotComponent;
  let fixture: ComponentFixture<NewHotspotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NewHotspotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHotspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

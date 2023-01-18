import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinViewComponent } from './spin-view.component';

describe('SpinViewComponent', () => {
  let component: SpinViewComponent;
  let fixture: ComponentFixture<SpinViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SpinViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

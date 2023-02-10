import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaFavoritaComponent } from './la-favorita.component';

describe('LaFavoritaComponent', () => {
  let component: LaFavoritaComponent;
  let fixture: ComponentFixture<LaFavoritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LaFavoritaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaFavoritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

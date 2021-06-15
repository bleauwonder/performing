import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpkPhotoCardComponent } from './epk-photo-card.component';

describe('EpkPhotoCardComponent', () => {
  let component: EpkPhotoCardComponent;
  let fixture: ComponentFixture<EpkPhotoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpkPhotoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpkPhotoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

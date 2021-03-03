import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioPhotoCardComponent } from './bio-photo-card.component';

describe('BioPhotoCardComponent', () => {
  let component: BioPhotoCardComponent;
  let fixture: ComponentFixture<BioPhotoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioPhotoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioPhotoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

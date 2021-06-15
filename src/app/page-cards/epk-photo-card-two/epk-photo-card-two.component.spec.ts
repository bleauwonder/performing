import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpkPhotoCardTwoComponent } from './epk-photo-card-two.component';

describe('EpkPhotoCardTwoComponent', () => {
  let component: EpkPhotoCardTwoComponent;
  let fixture: ComponentFixture<EpkPhotoCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpkPhotoCardTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpkPhotoCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioCardFourComponent } from './bio-card-four.component';

describe('BioCardFourComponent', () => {
  let component: BioCardFourComponent;
  let fixture: ComponentFixture<BioCardFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioCardFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioCardFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

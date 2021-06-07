import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioCardFiveComponent } from './bio-card-five.component';

describe('BioCardFiveComponent', () => {
  let component: BioCardFiveComponent;
  let fixture: ComponentFixture<BioCardFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioCardFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioCardFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

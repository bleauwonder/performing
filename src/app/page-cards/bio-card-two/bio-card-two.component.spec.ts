import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioCardTwoComponent } from './bio-card-two.component';

describe('BioCardTwoComponent', () => {
  let component: BioCardTwoComponent;
  let fixture: ComponentFixture<BioCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioCardTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

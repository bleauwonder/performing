import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioCardThreeComponent } from './bio-card-three.component';

describe('BioCardThreeComponent', () => {
  let component: BioCardThreeComponent;
  let fixture: ComponentFixture<BioCardThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioCardThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioCardThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

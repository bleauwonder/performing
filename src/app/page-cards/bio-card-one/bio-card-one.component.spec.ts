import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioCardOneComponent } from './bio-card-one.component';

describe('BioCardComponent', () => {
  let component: BioCardOneComponent;
  let fixture: ComponentFixture<BioCardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioCardOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

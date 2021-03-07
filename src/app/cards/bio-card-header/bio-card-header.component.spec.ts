import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioCardHeaderComponent } from './bio-card-header.component';

describe('BioCardHeaderComponent', () => {
  let component: BioCardHeaderComponent;
  let fixture: ComponentFixture<BioCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioCardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

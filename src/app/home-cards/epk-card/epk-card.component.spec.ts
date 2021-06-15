import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpkCardComponent } from './epk-card.component';

describe('EpkCardComponent', () => {
  let component: EpkCardComponent;
  let fixture: ComponentFixture<EpkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpkCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpkQuotesCardComponent } from './epk-quotes-card.component';

describe('EpkQuotesCardComponent', () => {
  let component: EpkQuotesCardComponent;
  let fixture: ComponentFixture<EpkQuotesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpkQuotesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpkQuotesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

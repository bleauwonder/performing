import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpkLogoDlCardComponent } from './epk-logo-dl-card.component';

describe('EpkLogoDlCardComponent', () => {
  let component: EpkLogoDlCardComponent;
  let fixture: ComponentFixture<EpkLogoDlCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpkLogoDlCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpkLogoDlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

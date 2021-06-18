import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpkDlCardComponent } from './epk-dl-card.component';

describe('EpkDlCardComponent', () => {
  let component: EpkDlCardComponent;
  let fixture: ComponentFixture<EpkDlCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpkDlCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpkDlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

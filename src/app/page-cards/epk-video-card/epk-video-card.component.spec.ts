import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpkVideoCardComponent } from './epk-video-card.component';

describe('EpkVideoCardComponent', () => {
  let component: EpkVideoCardComponent;
  let fixture: ComponentFixture<EpkVideoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpkVideoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpkVideoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

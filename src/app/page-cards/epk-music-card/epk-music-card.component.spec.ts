import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpkMusicCardComponent } from './epk-music-card.component';

describe('EpkMusicCardComponent', () => {
  let component: EpkMusicCardComponent;
  let fixture: ComponentFixture<EpkMusicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpkMusicCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpkMusicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

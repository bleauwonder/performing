import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardTwoComponent } from './video-card-two.component';

describe('VideoCardTwoComponent', () => {
  let component: VideoCardTwoComponent;
  let fixture: ComponentFixture<VideoCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCardTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

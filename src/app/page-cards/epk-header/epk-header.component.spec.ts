import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpkHeaderComponent } from './epk-header.component';

describe('EpkHeaderComponent', () => {
  let component: EpkHeaderComponent;
  let fixture: ComponentFixture<EpkHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpkHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

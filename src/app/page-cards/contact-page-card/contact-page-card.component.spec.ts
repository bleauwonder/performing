import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageCardComponent } from './contact-page-card.component';

describe('ContactPageCardComponent', () => {
  let component: ContactPageCardComponent;
  let fixture: ComponentFixture<ContactPageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

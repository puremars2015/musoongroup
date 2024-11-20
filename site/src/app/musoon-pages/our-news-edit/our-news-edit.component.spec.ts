import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNewsEditComponent } from './our-news-edit.component';

describe('OurNewsEditComponent', () => {
  let component: OurNewsEditComponent;
  let fixture: ComponentFixture<OurNewsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurNewsEditComponent]
    });
    fixture = TestBed.createComponent(OurNewsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

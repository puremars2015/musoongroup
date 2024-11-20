import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourFeedbackEditComponent } from './your-feedback-edit.component';

describe('MeetUsEditComponent', () => {
  let component: YourFeedbackEditComponent;
  let fixture: ComponentFixture<YourFeedbackEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourFeedbackEditComponent]
    });
    fixture = TestBed.createComponent(YourFeedbackEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

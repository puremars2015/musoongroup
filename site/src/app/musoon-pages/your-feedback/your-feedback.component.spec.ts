import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourFeedbackComponent } from './your-feedback.component';

describe('YourFeedbackComponent', () => {
  let component: YourFeedbackComponent;
  let fixture: ComponentFixture<YourFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourFeedbackComponent]
    });
    fixture = TestBed.createComponent(YourFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

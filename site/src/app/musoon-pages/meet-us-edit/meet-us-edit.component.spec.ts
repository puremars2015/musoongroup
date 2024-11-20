import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetUsEditComponent } from './meet-us-edit.component';

describe('MeetUsEditComponent', () => {
  let component: MeetUsEditComponent;
  let fixture: ComponentFixture<MeetUsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetUsEditComponent]
    });
    fixture = TestBed.createComponent(MeetUsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

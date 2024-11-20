import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamsEditComponent } from './our-teams-edit.component';

describe('MeetUsEditComponent', () => {
  let component: OurTeamsEditComponent;
  let fixture: ComponentFixture<OurTeamsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurTeamsEditComponent]
    });
    fixture = TestBed.createComponent(OurTeamsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

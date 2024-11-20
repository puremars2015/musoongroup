import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeHoursComponent } from './office-hours.component';

describe('OfficeHoursComponent', () => {
  let component: OfficeHoursComponent;
  let fixture: ComponentFixture<OfficeHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficeHoursComponent]
    });
    fixture = TestBed.createComponent(OfficeHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

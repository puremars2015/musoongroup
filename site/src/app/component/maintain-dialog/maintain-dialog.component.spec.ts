import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainDialogComponent } from './maintain-dialog.component';

describe('MaintainDialogComponent', () => {
  let component: MaintainDialogComponent;
  let fixture: ComponentFixture<MaintainDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintainDialogComponent]
    });
    fixture = TestBed.createComponent(MaintainDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

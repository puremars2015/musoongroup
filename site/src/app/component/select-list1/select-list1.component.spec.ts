import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectList1Component } from './select-list1.component';

describe('SelectList1Component', () => {
  let component: SelectList1Component;
  let fixture: ComponentFixture<SelectList1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectList1Component]
    });
    fixture = TestBed.createComponent(SelectList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

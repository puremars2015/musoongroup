import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datatable3Component } from './datatable3.component';

describe('Datatable3Component', () => {
  let component: Datatable3Component;
  let fixture: ComponentFixture<Datatable3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Datatable3Component]
    });
    fixture = TestBed.createComponent(Datatable3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

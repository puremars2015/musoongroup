import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datatable4Component } from './datatable4.component';

describe('Datatable4Component', () => {
  let component: Datatable4Component;
  let fixture: ComponentFixture<Datatable4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Datatable4Component]
    });
    fixture = TestBed.createComponent(Datatable4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

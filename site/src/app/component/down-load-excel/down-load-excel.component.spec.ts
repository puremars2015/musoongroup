import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownLoadExcelComponent } from './down-load-excel.component';

describe('DownLoadExcelComponent', () => {
  let component: DownLoadExcelComponent;
  let fixture: ComponentFixture<DownLoadExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownLoadExcelComponent]
    });
    fixture = TestBed.createComponent(DownLoadExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

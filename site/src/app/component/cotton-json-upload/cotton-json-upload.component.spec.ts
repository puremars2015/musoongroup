import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CottonJsonUploadComponent } from './cotton-json-upload.component';

describe('CottonJsonUploadComponent', () => {
  let component: CottonJsonUploadComponent;
  let fixture: ComponentFixture<CottonJsonUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CottonJsonUploadComponent]
    });
    fixture = TestBed.createComponent(CottonJsonUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

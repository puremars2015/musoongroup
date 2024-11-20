import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpButtonComponent } from './wp-button.component';

describe('WpButtonComponent', () => {
  let component: WpButtonComponent;
  let fixture: ComponentFixture<WpButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WpButtonComponent]
    });
    fixture = TestBed.createComponent(WpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

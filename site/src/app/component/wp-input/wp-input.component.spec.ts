import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpInputComponent } from './wp-input.component';

describe('WpInputComponent', () => {
  let component: WpInputComponent;
  let fixture: ComponentFixture<WpInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WpInputComponent]
    });
    fixture = TestBed.createComponent(WpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpInputRequiredComponent } from './wp-input-required.component';

describe('WpInputRequiredComponent', () => {
  let component: WpInputRequiredComponent;
  let fixture: ComponentFixture<WpInputRequiredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WpInputRequiredComponent]
    });
    fixture = TestBed.createComponent(WpInputRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

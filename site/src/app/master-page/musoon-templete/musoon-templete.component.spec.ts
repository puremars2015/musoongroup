import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusoonTempleteComponent } from './musoon-templete.component';

describe('MusoonTempleteComponent', () => {
  let component: MusoonTempleteComponent;
  let fixture: ComponentFixture<MusoonTempleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusoonTempleteComponent]
    });
    fixture = TestBed.createComponent(MusoonTempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

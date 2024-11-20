import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageCarouselEditComponent } from './front-page-carousel-edit.component';

describe('FrontPageCarouselEditComponent', () => {
  let component: FrontPageCarouselEditComponent;
  let fixture: ComponentFixture<FrontPageCarouselEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontPageCarouselEditComponent]
    });
    fixture = TestBed.createComponent(FrontPageCarouselEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

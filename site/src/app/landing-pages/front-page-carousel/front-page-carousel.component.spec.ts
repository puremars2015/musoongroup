import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageCarouselComponent } from './front-page-carousel.component';

describe('FrontPageCarouselComponent', () => {
  let component: FrontPageCarouselComponent;
  let fixture: ComponentFixture<FrontPageCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontPageCarouselComponent]
    });
    fixture = TestBed.createComponent(FrontPageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

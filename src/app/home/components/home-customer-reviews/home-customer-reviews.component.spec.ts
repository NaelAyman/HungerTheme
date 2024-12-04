import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCustomerReviewsComponent } from './home-customer-reviews.component';

describe('HomeCustomerReviewsComponent', () => {
  let component: HomeCustomerReviewsComponent;
  let fixture: ComponentFixture<HomeCustomerReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCustomerReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCustomerReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

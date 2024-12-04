import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductsListComponent } from './home-products-list.component';

describe('HomeProductsListComponent', () => {
  let component: HomeProductsListComponent;
  let fixture: ComponentFixture<HomeProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeProductsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

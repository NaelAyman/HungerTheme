import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerCatslistComponent } from './home-banner-catslist.component';

describe('HomeBannerCatslistComponent', () => {
  let component: HomeBannerCatslistComponent;
  let fixture: ComponentFixture<HomeBannerCatslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeBannerCatslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBannerCatslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

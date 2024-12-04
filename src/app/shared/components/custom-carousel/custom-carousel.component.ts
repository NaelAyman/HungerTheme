import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent implements AfterViewInit {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  
  isBrowser: boolean;
  currentSlide: number = 0;
  slideCount: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      const carouselContainer = this.carouselContainer.nativeElement;
      const slides = carouselContainer.querySelectorAll('.carousel-slide-item') as NodeListOf<HTMLElement>;
      const dots = carouselContainer.querySelectorAll('.dot') as NodeListOf<HTMLElement>;

      this.slideCount = slides.length;

      if (this.slideCount > 0) {
        this.showSlide(this.currentSlide, slides, dots);

        // Add event listeners for the dots
        dots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
            this.currentSlide = index;
            this.showSlide(this.currentSlide, slides, dots);
          });
        });
      }
    }
  }

  showSlide(index: number, slides: NodeListOf<HTMLElement>, dots: NodeListOf<HTMLElement>): void {
    const carouselSlide = this.carouselContainer.nativeElement.querySelector('.carousel-slide') as HTMLElement;
    const slideWidth = slides[0].clientWidth;

    // Adjust the carousel position by translating it to the appropriate slide
    carouselSlide.style.transform = `translateX(${-slideWidth * index}px)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }
}

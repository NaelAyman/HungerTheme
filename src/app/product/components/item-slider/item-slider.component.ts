import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-item-slider',
  templateUrl: './item-slider.component.html',
  styleUrl: './item-slider.component.scss'
})
export class ItemSliderComponent implements AfterViewInit {
  @ViewChild('thumbContainer') thumbContainer!: ElementRef;
  @ViewChild('mainImage') mainImage!: ElementRef<HTMLImageElement>;
  @ViewChild('prevArrow') prevArrow!: ElementRef;
  @ViewChild('nextArrow') nextArrow!: ElementRef;

  thumbnails!: NodeListOf<HTMLElement>;
  currentIndex: number = 0;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private renderer: Renderer2) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    // Ensure the DOM-related code only runs in the browser
    if (this.isBrowser) {
      const isCustomThumbsSliderExists = !!document.querySelector('.custom-thumbs-slider');

      if (isCustomThumbsSliderExists) {
        this.thumbnails = document.querySelectorAll('.custom-thumbs-slider .custom-thumb');

        // Set the first thumbnail as active on page load
        this.thumbnails[this.currentIndex].classList.add('active');
        this.mainImage.nativeElement.style.opacity = '1'; // Show the initial image

        // Add click event to thumbnails
        this.thumbnails.forEach((thumb, index) => {
          thumb.addEventListener('click', () => {
            this.updateMainImage(thumb.getAttribute('data-large') || '', index);
            this.focusThumbnail(index);
          });
        });

        // Thumbnail navigation with arrows
        this.prevArrow.nativeElement.addEventListener('click', () => {
          if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateMainImage(this.thumbnails[this.currentIndex].getAttribute('data-large') || '', this.currentIndex);
            this.focusThumbnail(this.currentIndex);
          }
        });

        this.nextArrow.nativeElement.addEventListener('click', () => {
          if (this.currentIndex < this.thumbnails.length - 1) {
            this.currentIndex++;
            this.updateMainImage(this.thumbnails[this.currentIndex].getAttribute('data-large') || '', this.currentIndex);
            this.focusThumbnail(this.currentIndex);
          }
        });
      }
    }
  }

  updateMainImage(newSrc: string, index: number): void {
    if (index === this.currentIndex) return;

    const mainImageEl = this.mainImage.nativeElement;
    // Fade-out the current image
    mainImageEl.style.opacity = '0'; // Start fading out
    setTimeout(() => {
      mainImageEl.src = newSrc; // Change the image source
      mainImageEl.style.opacity = '1'; // Fade in the new image
    }, 300); // Delay for fade-out

    // Update active thumbnail
    this.thumbnails[this.currentIndex].classList.remove('active');
    this.thumbnails[index].classList.add('active');
    this.currentIndex = index;
  }

  focusThumbnail(index: number): void {
    const thumbContainerEl = this.thumbContainer.nativeElement;
    const thumbWidth = this.thumbnails[0].offsetWidth + 10; // 10px for margin
    const visibleThumbsCount = Math.floor(thumbContainerEl.offsetWidth / thumbWidth);

    // Calculate scroll position to center the clicked thumbnail
    const scrollPosition = index - Math.floor(visibleThumbsCount / 2);
    thumbContainerEl.scrollLeft = Math.max(0, scrollPosition * thumbWidth);
  }
}

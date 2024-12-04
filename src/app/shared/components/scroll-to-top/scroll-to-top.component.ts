import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {
  isVisible: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 200; // Show button after scrolling 200px
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  }
}

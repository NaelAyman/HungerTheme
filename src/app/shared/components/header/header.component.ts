import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  currentLanguage: string | undefined;
  currentRoute: string = '';

  searchBar: boolean = false;
  sideNav: boolean = false;
  isScrolled = false;

  constructor(private router: Router, private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object, private translationService: TranslationService) {
    this.translationService.getCurrentLanguage().subscribe(language => {
      this.currentLanguage = language;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 50) { // إذا كان التمرير أكثر من 50px
      this.isScrolled = true; // أضف الـ class
    } else {
      this.isScrolled = false; // إزالة الـ class
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // This code will only run on the client side
      this.currentRoute = location?.pathname;
    }
  }

  switchLanguage(language: string) {
    this.translationService.changeLanguage(language);

    // // Get the current active route
    // const currentRoute = this.router.url.split('/')[1]; // This gets the first segment of the URL after the base path
    // const newPath = language === 'en' ? `/en/${currentRoute}` : `/${currentRoute}`; // Construct new path based on current route

    // this.router.navigateByUrl(newPath); // Navigate to the new path

    // Update the HTML tag's 'lang' and 'dir' attributes
    if (language === 'en') {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    } else {
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
    }
  }

  openSearchBar() {
    this.searchBar = !this.searchBar;
  }
  openSideNav() {
    this.sideNav = true;
  }
  closeSideNav() {
    this.sideNav = false;
  }

}

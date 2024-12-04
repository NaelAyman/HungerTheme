import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { TranslationService } from './shared/services/translation.service';
import { NavigationEnd, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentLanguage: string = '';

  constructor(
    private router: Router, 
    @Inject(PLATFORM_ID) private platformId: Object, 
    private TranslationService: TranslationService,
    private renderer: Renderer2 // Use Renderer2 for DOM manipulation
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.TranslationService.getCurrentLanguage().subscribe(lang => {
        this.currentLanguage = lang;
      });
    }
  }

}

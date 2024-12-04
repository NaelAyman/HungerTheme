import { Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate',
  pure: false // Allow it to update when translations change
})
export class TranslatePipe implements PipeTransform {
  private currentTranslation: any;
  private subscription: Subscription;

  constructor(private translationService: TranslationService) {
    // Subscribe to the translations observable
    this.subscription = this.translationService.translations$.subscribe(translations => {
      this.currentTranslation = translations; // Store the latest translations
    });
  }

  transform(value: string): string {
    // If translations are loaded, return the translation for the key
    return this.currentTranslation ? this.currentTranslation[value] || value : value; // Default to the key
  }

  // Clean up the subscription to prevent memory leaks
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<string>('ar');
  private translationsSubject = new BehaviorSubject<{ [key: string]: any }>({});
  
  // Expose the translations as an observable
  public translations$ = this.translationsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadTranslations('ar'); // Load default language
  }

  changeLanguage(language: string) {
    this.loadTranslations(language);
    this.currentLanguage.next(language);
  }

  private loadTranslations(language: string) {
    this.http.get(`/assets/i18n/${language}.json`).subscribe(translations => {
      this.translationsSubject.next(translations as any); // Update translations
    });
  }

  getTranslation(key: string): string {
    return this.translationsSubject.value[key] || key; // Return the key if translation not found
  }

  getCurrentLanguage() {
    return this.currentLanguage.asObservable();
  }

  translate(key: string): string {
    return this.getTranslation(key);
  }
}

import { Component } from '@angular/core';
import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 
  constructor(private TranslationService: TranslationService){}

  translate(key: string): string {
    return this.TranslationService.getTranslation(key);
  }

}

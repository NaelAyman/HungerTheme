import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ScrollToTopComponent,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    HttpClientModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ScrollToTopComponent,
    TranslatePipe
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ImportantLinksComponent } from './pages/important-links/important-links.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: 'who-we-are', component: WhoWeAreComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'important-links', component: ImportantLinksComponent }
];

@NgModule({
  declarations: [
    WhoWeAreComponent,
    ContactUsComponent,
    ImportantLinksComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class StaticPagesModule { }

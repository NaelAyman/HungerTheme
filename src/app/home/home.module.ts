import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from '../product/product.module'; // Import ProductModule
import { SharedModule } from '../shared/shared.module';


import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatTabsModule } from '@angular/material/tabs';


const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductModule, // to use ProductCardComponent in HomeModule
    SharedModule,
    
    CarouselModule,
    MatTabsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }

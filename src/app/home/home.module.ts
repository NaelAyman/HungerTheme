import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from '../product/product.module'; // Import ProductModule
import { SharedModule } from '../shared/shared.module';

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
    SharedModule
  ]
})
export class HomeModule { }

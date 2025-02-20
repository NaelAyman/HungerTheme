import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './pages/category/category.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCardFullComponent } from './components/product-card-full/product-card-full.component';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemSliderComponent } from './components/item-slider/item-slider.component';
import { SharedModule } from '../shared/shared.module';
import { CheckoutConfirmComponent } from './components/checkout/checkout-confirm/checkout-confirm.component';
import { CheckoutDetailsComponent } from './components/checkout/checkout-details/checkout-details.component';
import { AuthGuard } from '../auth/auth.guard';


import { CarouselModule } from 'ngx-owl-carousel-o';

const routes: Routes = [
  { path: 'category/:id', component: CategoryComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  declarations: [
    CategoryComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    ProductCardComponent,
    ProductCardFullComponent,
    ProductSliderComponent,
    ItemSliderComponent,
    CheckoutConfirmComponent,
    CheckoutDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    CarouselModule
  ],
  exports: [
    ProductCardComponent // Export ProductCardComponent for use in other modules
  ]
})
export class ProductModule { }

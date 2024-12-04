import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'brd-pages', loadChildren: () => import('./static-pages/static-pages.module').then(m => m.StaticPagesModule) },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '**', redirectTo: '' }
];

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'en', redirectTo: 'en/home', pathMatch: 'full' },
//   { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
//   { path: 'en', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
//   { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
//   { path: 'en/product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
//   { path: 'brd-pages', loadChildren: () => import('./static-pages/static-pages.module').then(m => m.StaticPagesModule) },
//   { path: 'en/brd-pages', loadChildren: () => import('./static-pages/static-pages.module').then(m => m.StaticPagesModule) },
//   { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
//   { path: 'en/account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
//   { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
//   { path: 'en/auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
//   { path: '**', redirectTo: 'home' }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

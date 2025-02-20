import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddressListComponent } from './pages/addresses/address-list/address-list.component';
import { AddAddressComponent } from './pages/addresses/add-address/add-address.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ComplaintListComponent } from './pages/complaints/complaint-list/complaint-list.component';
import { AddComplaintComponent } from './pages/complaints/add-complaint/add-complaint.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../auth/auth.guard';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'addresses', component: AddressListComponent },
  { path: 'addresses/add', component: AddAddressComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'order/:id', component: OrderDetailsComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'complaints', component: ComplaintListComponent },
  { path: 'complaints/add', component: AddComplaintComponent },
  { path: 'wishlist', component: WishlistComponent }
];

@NgModule({
  declarations: [
    ProfileComponent,
    AddressListComponent,
    AddAddressComponent,
    OrdersComponent,
    WalletComponent,
    ChangePasswordComponent,
    ComplaintListComponent,
    AddComplaintComponent,
    OrderDetailsComponent,
    SideMenuComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AccountModule { }

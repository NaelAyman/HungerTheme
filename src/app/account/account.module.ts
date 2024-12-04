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

const routes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'addresses', component: AddressListComponent, canActivate: [AuthGuard] },
  { path: 'addresses/add', component: AddAddressComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'order/:id', component: OrderDetailsComponent, canActivate: [AuthGuard] },
  { path: 'wallet', component: WalletComponent, canActivate: [AuthGuard] },
  { path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard] },
  { path: 'complaints', component: ComplaintListComponent, canActivate: [AuthGuard] },
  { path: 'complaints/add', component: AddComplaintComponent, canActivate: [AuthGuard] }
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
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AccountModule { }

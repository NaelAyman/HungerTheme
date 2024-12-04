import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  step: number = 1;
  showGetFromBranchContent: boolean = false;
  showChooseShipping: boolean = false;
  showPaymentCards: boolean = false;
  addressContentType: string = 'addAddress';
  selectLocation: boolean = false;
}

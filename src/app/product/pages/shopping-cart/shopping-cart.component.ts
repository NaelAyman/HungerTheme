import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  
  counterValue: number = 1;
  favouriteIcon: boolean = false;

  // Counter
  increment() {
    this.counterValue++;
  }
  decrement() {
    if (this.counterValue > 1) {
      this.counterValue--;
    } else {
      this.counterValue = 1;
    }
  }
  activeFavouriteIcon() {
    this.favouriteIcon = !this.favouriteIcon;
  }

}

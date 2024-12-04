import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-full',
  templateUrl: './product-card-full.component.html',
  styleUrl: './product-card-full.component.scss'
})
export class ProductCardFullComponent {
   @Input() pageType: string = '';
}

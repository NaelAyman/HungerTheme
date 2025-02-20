import { Component } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

isActive: boolean = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.currentMenuState.subscribe(state => {
      console.log("Menu state changed to:", state); // علشان نتأكد إنها بتتغير
      this.isActive = state;
    });
  }

  closeMenu() {
    if (!this.isActive) return;

    this.isActive = false;
    console.log("Closing menu..."); // نشوف هل بيتنفذ ولا لأ

    this.sharedService.toggleMenu(false);
  }
  

}

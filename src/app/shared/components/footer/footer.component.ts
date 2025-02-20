import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  currentYear: any = '';

  constructor(private  _SharedService: SharedService) {}
  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

  toggleState() {
    console.log("Toggling menu off...");
    
    this._SharedService.toggleMenu(true);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private menuStateSource = new BehaviorSubject<boolean>(false);
  currentMenuState = this.menuStateSource.asObservable();

  toggleMenu(state: boolean) {
    console.log("toggleMenu called with:", state); // دي علشان نتأكد إنها بتتنفذ
    this.menuStateSource.next(state);
  }
}

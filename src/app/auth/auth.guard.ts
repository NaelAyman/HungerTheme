import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  canActivate(): boolean {
    // Check if running in the browser
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');  // Safely access localStorage

      if (token) {
        return true; // Allow access if token exists
      }
    }

    // If no token, redirect to login page
    this.router.navigate(['/auth/login']);
    return false; // Deny access
  }
}

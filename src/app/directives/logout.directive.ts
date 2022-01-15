import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appLogout]',
})
export class LogoutDirective {
  @HostListener('click', ['$event'])
  async clickHandler(e: MouseEvent) {
    e.preventDefault();

    await this.authService.logout();

    this.router.navigate(['/login']);
  }
  constructor(private authService: AuthService, private router: Router) {}
}

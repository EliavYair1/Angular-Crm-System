import { Directive, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appSignWithGoogle]',
})
export class SignWithGoogleDirective {
  @HostListener('click', ['$event'])
  clickHandler(e: MouseEvent) {
    e.preventDefault;
    this.authService.loginWithGoogle();
  }
  constructor(private authService: AuthService) {}
}

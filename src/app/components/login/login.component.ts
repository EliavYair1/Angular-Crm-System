import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = {
    email: '',
    password: '',
  };
  error = '';

  async onSubmit({ valid }: NgForm) {
    if (valid) {
      this.error = '';

      try {
        await this.authService.loginWithEmail(
          this.form.email,
          this.form.password
        );
        this.router.navigate(['/dashboard']);
      } catch (err) {
        this.error = err.message;
      }
    }
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
}

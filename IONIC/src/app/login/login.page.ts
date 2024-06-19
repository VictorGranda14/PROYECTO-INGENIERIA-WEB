import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  Form,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: [
        '',
        [Validators.required, Validators.minLength(6), this.validarContraseña],
      ],
    });
  }

  login() {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(
      (res: any) => {
        console.log('Usuario logueado');
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error en el login', error);
      }
    );
  }
  validarContraseña(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    const conNumero = /\d/;
    if (password.length < 6 || !conNumero.test(password)) {
      return { invalid: true };
    }
    return null;
  }
  login_form_submit() {
    console.log(this.loginForm);
    this.login();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private fb: FormBuilder) {

  }
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6), this.validarContraseña]],

  });


  ngOnInit() {
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
    console.log(this.loginForm)
  }

}

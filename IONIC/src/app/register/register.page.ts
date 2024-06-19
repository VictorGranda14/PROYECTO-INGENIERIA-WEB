import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;
  mensajeError: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      rut: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      region: ['', Validators.required],
      comuna: ['', Validators.required],
      password: [
        '',
        [Validators.required, Validators.minLength(6), this.validarContraseña],
      ],
      passwordVerify: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    console.log(this.registerForm);
    const { rut, password, passwordVerify } = this.registerForm.value;
    console.log(rut, password, passwordVerify);
    if (this.validarRUT(rut)) {
      if (!(this.registerForm.controls['password'].status == 'INVALID')) {
        if (password === passwordVerify) {
          this.mensajeError = '';
          //this.registerForm.reset();
        } else {
          this.mensajeError = 'La contraseña no coincide';
          this.registerForm
            .get('passwordVerify')!
            .setErrors({ mismatch: true });
        }
      } else {
        this.mensajeError =
          'La contraseña debe tener al menos 6 caracteres y 1 número';
        this.registerForm.get('password')!.setErrors({ invalid: true });
      }
    } else {
      this.mensajeError = 'RUT inválido. Por favor, intenta nuevamente.';
      this.registerForm.get('rut')!.setErrors({ invalid: true });
    }
    this.register();
    //this.postData(this.registerForm.value);
  }
  register() {
    const { username, rut, email, region, comuna, password } =
      this.registerForm.value;
    this.authService
      .register(username, rut, email, region, comuna, password)
      .subscribe(
        () => {
          console.log('Usuario registrado');
          this.router.navigate(['/login']);
        },
        (error) => {
          if (error.status === 201) {
            console.log('Usuario registrado con éxito');
            this.router.navigate(['/login']);
          } else {
            console.error('Error en el registro', error);
          }
        }
      );
  }

  validarRUT(rut: string): boolean {
    if (rut.includes('-')) {
      const partes = rut.split('-');
      if (partes.length === 2) {
        const cuerpo = partes[0].replace(/\./g, '');
        const cod = partes[1];
        let suma = 0;
        let multiplo = 2;

        for (let i = cuerpo.length - 1; i >= 0; i--) {
          suma += multiplo * parseInt(cuerpo.charAt(i), 10);
          multiplo = multiplo < 7 ? multiplo + 1 : 2;
        }

        const codEsperado = 11 - (suma % 11);
        const codCalculado =
          codEsperado === 11 ? 0 : codEsperado === 10 ? 'K' : codEsperado;

        return cod.toUpperCase() === codCalculado.toString();
      }
    }
    return false;
  }

  validarContraseña(control: AbstractControl): ValidationErrors | null {
    console.log(control.value);
    const password = control.value;
    const conNumero = /\d/;
    if (password?.length < 6 || !conNumero.test(password)) {
      console.log('contraseña mala');
      return { invalid: true };
    }
    return null;
  }
  postData(data: any) {
    fetch('http://localhost:3000/registro_backend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
        // Maneja la respuesta de éxito
      })
      .catch((error) => {
        console.error('Error:', error);
        this.mensajeError =
          'Ocurrió un error al registrar. Por favor, inténtelo de nuevo.';
      });
  }
}

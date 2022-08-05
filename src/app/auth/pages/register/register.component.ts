import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { camposIguales, emailPattern, nombreApellidoPattern, noPuedeSerLeiner } from 'src/app/shared/validator/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [``]
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(emailPattern)]],
    username: ['', [Validators.required, noPuedeSerLeiner]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [camposIguales('password', 'password2')]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      nombre: 'Leiner Barrios'
    })
  }

  campoNoValido(campo: string) {
    return this.myForm.get(campo)?.invalid && this.myForm.get(campo)?.touched;
  }

  submitForm() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }

}

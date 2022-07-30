import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [``]
})
export class RegisterComponent implements OnInit {

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.nombreApellidoPattern)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoNoValido(campo: string) {
    return this.myForm.get(campo)?.invalid && this.myForm.get(campo)?.touched;
  }

  submitForm() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }

}

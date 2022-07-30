import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  // myForm: FormGroup = new FormGroup({
  //   nombre      : new FormControl('RTX 4080Ti'),
  //   precio      : new FormControl(1500),
  //   existencias : new FormControl(5),
  // });

  myForm: FormGroup = this.fb.group({
    nombre      : [, [Validators.required, Validators.minLength(3)]],
    precio      : [, [Validators.required, Validators.min(0)]],
    existencias : [, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
      this.myForm.reset({
        nombre: 'RTX 4080Ti',
      });
  }

  campoEsValido(campo: string) {
    return this.myForm.controls[campo].touched && this.myForm.controls[campo].errors;
  }

  guardar() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

}

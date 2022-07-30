import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ], Validators.required )
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.myForm.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  campoEsValido(campo: string) {
    return this.myForm.controls[campo].touched && this.myForm.controls[campo].errors;
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) { return; }
    this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );
    this.nuevoFavorito.reset();
  }

  borrar(i: number) {
    this.favoritosArr.removeAt(i);
  }

  guardar() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return
    }
    console.log(this.myForm.value);
  }

}

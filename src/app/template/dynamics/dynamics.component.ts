import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string
  favoritos: Favorito[]
}

interface Favorito {
  id: number
  nombre: string
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Leiner',
    favoritos: [
      { id: 1, nombre: 'Iron Man' },
      { id: 2, nombre: 'Capitán América' }
    ]
  }

  save() {
    console.log('Formulario posteado');
  }

  agregar() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

}

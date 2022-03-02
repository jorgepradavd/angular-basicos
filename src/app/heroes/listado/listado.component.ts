import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Cap. America'];
  heroeBorrado: string = '';

  borrarHeroe() {
  //  this.heroes.shift(); //borra el primer elemento del arreglo
  //  const heroeBorrado = this.heroes.shift();
  this.heroeBorrado = this.heroes.shift() || '';
  }

}


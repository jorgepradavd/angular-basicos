import { Component } from "@angular/core";



@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

  nombre: string ='Ironmen';
  edad: number = 45;

  get nombreCapitalizado():string {
    return this.nombre.toLocaleUpperCase();
  }

  obtenerNombre(): string {
  return `${ this.nombre  } - ${ this.edad }`;
  //return this.nombre + ' - ' + this.edad;
  }

  cambiarNombre():void {
    this.nombre = 'Spidermann';
  }
  cambiarEdad():void {
    this.edad = 80;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listEstudiantes: any[] = [
    {nombre: 'Nicolás Cáceres Latorre', estado: 'Titulado'},
    {nombre: 'Alonzo Quiroz' , estado: 'Egresado'},
    {nombre: 'Diego Mandril' , estado: 'Titulado'},
    {nombre: 'Natalia Ojeda' , estado: 'Abandono'},
  ];
  mostrar = true;

  toogle():void{
    this.mostrar = !this.mostrar;
  }
}

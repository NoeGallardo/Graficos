import { Component } from '@angular/core';

// Models
import { Configuracion } from './models/configuracion';
import { Ciudades } from "./models/ciudades";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GraficaTrafico';

  private configuracion: Configuracion;
  private ciudades: Ciudades;

  constructor() {
    this.configuracion = new Configuracion();
    this.ciudades = new Ciudades();
  }

  public getConfig(): Configuracion {
    return this.configuracion;
  }

  public setConfig(event: any): void {
    //console.log(event);
  }

  public getCiudades(): Ciudades {
    return this.ciudades;  
  }

  public setCiudades(event: any): void {
    console.log(event.nombres);
  }

}

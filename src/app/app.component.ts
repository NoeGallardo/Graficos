import { Component } from '@angular/core';

// Models
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GraficaTrafico';

  private configuracion: Configuracion;

  constructor() {
    this.configuracion = new Configuracion();
  }

  public getConfig(): Configuracion {
    return this.configuracion;
  }

  public setConfig(event: any): void {
    console.log(event);
  }

}

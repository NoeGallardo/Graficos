import { Component, Input, OnInit } from '@angular/core';
import { Configuracion } from 'src/app/models/configuracion';
import { Ciudades } from "src/app/models/ciudades";

// spinner
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-tabla-metrico',
  templateUrl: './tabla-metrico.component.html',
  styleUrls: ['./tabla-metrico.component.css']
})
export class TablaMetricoComponent implements OnInit {

  @Input() configuracion: Configuracion = new Configuracion();
  @Input() ciudades: Ciudades = new Ciudades();

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    function getRandomInt(max:number, min:number) {
      return Math.floor(Math.random() * (max-min) +min);
    }

    console.log(getRandomInt(500000, 10000000));

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

  public getList(): Array<string> {
    return this.configuracion.filtros;
  }

  public getCiudades(): Array<string>{
    return this.ciudades.nombres;
  }
}

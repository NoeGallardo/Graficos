import { Component, Input, OnInit } from '@angular/core';
import { Configuracion } from 'src/app/models/configuracion';

@Component({
  selector: 'app-tabla-metrico',
  templateUrl: './tabla-metrico.component.html',
  styleUrls: ['./tabla-metrico.component.css']
})
export class TablaMetricoComponent implements OnInit {

  @Input() configuracion: Configuracion = new Configuracion();

  constructor() { }

  ngOnInit(): void {
  }

  public getList(): Array<string> {
    return this.configuracion.filtros;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Configuracion } from 'src/app/models/configuracion';

// spinner
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-tabla-metrico',
  templateUrl: './tabla-metrico.component.html',
  styleUrls: ['./tabla-metrico.component.css']
})
export class TablaMetricoComponent implements OnInit {

  @Input() configuracion: Configuracion = new Configuracion();

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  public getList(): Array<string> {
    return this.configuracion.filtros;
  }

}

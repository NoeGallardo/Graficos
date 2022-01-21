import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Configuracion } from 'src/app/models/configuracion';
import { Ciudades } from 'src/app/models/ciudades';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  minDate = new Date(2021,1,1);
  maxDate = new Date(2023,1,1);

  dropdownList: any;
  selectedItems: any;
  dropdownSettings: any;

  myDatePicker:any;

  @Output() emitter = new EventEmitter<Configuracion>();
  @Input() configuracion: Configuracion = new Configuracion();

  @Output() emitter2 = new EventEmitter<Ciudades>();
  @Input() ciudades: Ciudades = new Ciudades();


  public emit(): void {
    this.emitter.emit(this.configuracion);
    this.emitter2.emit(this.ciudades);
  }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Guadalajara' },
      { item_id: 2, item_text: 'Tijuana' },
      { item_id: 3, item_text: 'Juarez' },
      { item_id: 4, item_text: 'San Luis' },
      { item_id: 5, item_text: 'Aguascalientes' },
      { item_id: 6, item_text: 'TIJUANA_808'},
      { item_id: 7, item_text: 'GUADALAJARA_899_MX'},
      { item_id: 8, item_text: 'MCI_REYNOSA_130'},
      { item_id: 9, item_text: 'AUTOMOTIVE_14_MX'},
      { item_id: 10, item_text: 'AGM_QUERETARO_7072'},
      { item_id: 11, item_text: 'AGM_QUERETARO_7071_MX'},
      { item_id: 12, item_text: 'AUTOMOTIVE_24_MX'},
      { item_id: 13, item_text: 'GDL_SOUTH_US'},
      { item_id: 14, item_text: 'TIJUANA_890'},
      { item_id: 15, item_text: 'JUAREZ_SOUTH_US'},
      { item_id: 16, item_text: 'JUAREZ_NORTH_US'},
      { item_id: 17, item_text: 'GDL_NORTH_US'},
      { item_id: 18, item_text: 'SAN_LUIS_BOSE_MX'},
      { item_id: 19, item_text: 'MCI_REYNOSA_MX'},
      { item_id: 20, item_text: 'MCI_REYNOSA_394'},
      { item_id: 21, item_text: 'AGUASCALIENTES_US'},
      { item_id: 22, item_text: 'GUADALAJARA_784_MX'},
      { item_id: 23, item_text: 'PCBA_PLASTICS_US'},
      { item_id: 24, item_text: 'GUADALAJARA_874_MX'}
    ];

    /*this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];*/

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    if (!this.configuracion.filtros.includes(item.item_id)) {
      this.configuracion.filtros.push(item.item_id);
    } else{}

    if(!this.ciudades.nombres.includes(item.item_text)){
      this.ciudades.nombres.push(item.item_text);
      //console.log(this.ciudades.nombres)
    }

    this.emit();
  }

  onItemDeSelect(item: any): void {
    const index = this.configuracion.filtros.indexOf(item.item_id);
    if (index > -1) {
      this.configuracion.filtros.splice(index, 1);
    }

    const index2 = this.ciudades.nombres.indexOf(item.item_text);
    if(index > -1){
      this.ciudades.nombres.splice(index,1);
      //console.log(this.ciudades.nombres)
    }
    this.emit();
  }

  onSelectAll(items: any) {
    console.log(items);
  }


  //Acciones del botom
  //Puede ser reemplazado por un Form
  buttonClick():void{
    console.log("Botom Presionado");
  }
}

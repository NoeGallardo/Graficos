import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Configuracion } from 'src/app/models/configuracion';
import { Ciudades } from 'src/app/models/ciudades';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
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
      { item_id: 5, item_text: 'Aguascalientes' }
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
}

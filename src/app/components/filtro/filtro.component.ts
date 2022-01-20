import { Component, OnInit} from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit{
  dropdownList:any;
  selectedItems:any;
  dropdownSettings:any;

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Guadalajara' },
      { item_id: 2, item_text: 'Tijuana' },
      { item_id: 3, item_text: 'Juarez' },
      { item_id: 4, item_text: 'San Luis' },
      { item_id: 5, item_text: 'Aguas Calientes' }
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
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}

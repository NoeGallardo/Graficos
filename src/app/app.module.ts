import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GprincipalComponent } from './components/gprincipal/gprincipal.component';
import { FiltroComponent } from './components/filtro/filtro.component';

@NgModule({
  declarations: [
    AppComponent,
    GprincipalComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgChartsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

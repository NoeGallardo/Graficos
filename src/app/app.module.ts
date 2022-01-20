import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Graficas
import { NgChartsModule } from 'ng2-charts';

// Import library module
import { NgxSpinnerModule } from "ngx-spinner";

//Material Angular
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// dropdown
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

// Components
import { AppComponent } from './app.component';
import { GprincipalComponent } from './components/gprincipal/gprincipal.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { TablaMetricoComponent } from './components/tabla-metrico/tabla-metrico.component';
import { ModalMetricosComponent } from './components/modal-metricos/modal-metricos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GprincipalComponent,
    FiltroComponent,
    TablaMetricoComponent,
    ModalMetricosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgChartsModule,
    NgxSpinnerModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

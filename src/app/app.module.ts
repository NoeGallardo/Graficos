import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Graficas
import { NgChartsModule } from 'ng2-charts';

// dropdown
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

// Components
import { AppComponent } from './app.component';
import { GprincipalComponent } from './components/gprincipal/gprincipal.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { TablaMetricoComponent } from './components/tabla-metrico/tabla-metrico.component';

@NgModule({
  declarations: [
    AppComponent,
    GprincipalComponent,
    FiltroComponent,
    TablaMetricoComponent
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

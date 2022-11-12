import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaPanelAdministracionTravelingMexicoComponent } from './vista-panel-administracion-traveling-mexico/vista-panel-administracion-traveling-mexico.component';
import { VistaPanelAdministracionAgenciasComponent } from './vista-panel-administracion-agencias/vista-panel-administracion-agencias.component';
import { VistaPanelAdministracionDestinosComponent } from './vista-panel-administracion-destinos/vista-panel-administracion-destinos.component';
import { VistaPanelAdministracionToursComponent } from './vista-panel-administracion-tours/vista-panel-administracion-tours.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    VistaPanelAdministracionTravelingMexicoComponent,
    VistaPanelAdministracionAgenciasComponent,
    VistaPanelAdministracionDestinosComponent,
    VistaPanelAdministracionToursComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    VistaPanelAdministracionTravelingMexicoComponent
  ]
})
export class ModuloTravelingMexicoModule { }

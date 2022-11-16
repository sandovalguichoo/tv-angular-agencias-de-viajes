import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaPanelAdministracionAgenciasComponent } from './vista-panel-administracion-agencias/vista-panel-administracion-agencias.component';
import { VistaPanelAdministracionDestinosComponent } from './vista-panel-administracion-destinos/vista-panel-administracion-destinos.component';
import { VistaPanelAdministracionToursComponent } from './vista-panel-administracion-tours/vista-panel-administracion-tours.component';
import { VistaGlobalDeAccesoPanelAdministracionComponent } from './vista-global-de-acceso-panel-administracion/vista-global-de-acceso-panel-administracion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VistaPanelAdministracionAgenciasComponent,
    VistaPanelAdministracionDestinosComponent,
    VistaPanelAdministracionToursComponent,
    VistaGlobalDeAccesoPanelAdministracionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    VistaGlobalDeAccesoPanelAdministracionComponent
  ]
})
export class MdPanelAdministracionAgenciasDestinosToursModule { }

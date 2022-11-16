import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { VistaGlobalDeAccesoPanelAdministracionComponent } from '../md-panel-administracion-agencias-destinos-tours/vista-global-de-acceso-panel-administracion/vista-global-de-acceso-panel-administracion.component';

const routes: Routes = [
  { path: 'panel-administracion', component: VistaGlobalDeAccesoPanelAdministracionComponent }
]

@NgModule({
  declarations: [
    MenuPrincipalComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    MenuPrincipalComponent,
    RouterModule
  ]
})
export class ModuloMenuModule { }

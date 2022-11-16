import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RouterModule, Routes } from '@angular/router';
import { VistaPanelAdministracionTravelingMexicoComponent } from '../modulo-traveling-mexico/vista-panel-administracion-traveling-mexico/vista-panel-administracion-traveling-mexico.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'traveling-mexico', component: VistaPanelAdministracionTravelingMexicoComponent },
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

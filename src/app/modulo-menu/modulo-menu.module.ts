import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RouterModule, Routes } from '@angular/router';
import { VistaPanelAdministracionTravelingMexicoComponent } from '../modulo-traveling-mexico/vista-panel-administracion-traveling-mexico/vista-panel-administracion-traveling-mexico.component';
import { BrowserModule } from '@angular/platform-browser';
import { VistaPanelAdministracionToursMexicoComponent } from '../modulo-tours-mexico/vista-panel-administracion-tours-mexico/vista-panel-administracion-tours-mexico.component';
import { VistaPaginaInicioComponent } from '../modulo-comparador-de-viajes/vista-pagina-inicio/vista-pagina-inicio.component';

const routes: Routes = [
  { path: 'traveling-mexico', component: VistaPanelAdministracionTravelingMexicoComponent },
  {path:'tours-mexico',component: VistaPanelAdministracionToursMexicoComponent},
  {path:'comparador-de-viajes', component: VistaPaginaInicioComponent}
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

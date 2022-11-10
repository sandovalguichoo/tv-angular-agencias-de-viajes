import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaPaginaInicioComponent } from './vista-pagina-inicio/vista-pagina-inicio.component';




@NgModule({
  declarations: [
    VistaPaginaInicioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VistaPaginaInicioComponent
  ]

})
export class ModuloComparadorDeViajesModule { }

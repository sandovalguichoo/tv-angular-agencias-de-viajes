import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuloMenuModule } from './modulo-menu/modulo-menu.module';
import { ModuloFooterModule } from './modulo-footer/modulo-footer.module';
import { HttpClientModule } from '@angular/common/http';
import { MdPanelAdministracionAgenciasDestinosToursModule } from './md-panel-administracion-agencias-destinos-tours/md-panel-administracion-agencias-destinos-tours.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ModuloMenuModule,
    ModuloFooterModule,
    MdPanelAdministracionAgenciasDestinosToursModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

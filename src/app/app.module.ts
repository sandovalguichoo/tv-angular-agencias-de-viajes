import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuloMenuModule } from './modulo-menu/modulo-menu.module';
import { ModuloFooterModule } from './modulo-footer/modulo-footer.module';
import { ModuloToursMexicoModule } from './modulo-tours-mexico/modulo-tours-mexico.module';
import { ModuloTravelingMexicoModule } from './modulo-traveling-mexico/modulo-traveling-mexico.module';
import { ModuloComparadorDeViajesModule } from './modulo-comparador-de-viajes/modulo-comparador-de-viajes.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModuloMenuModule,
    ModuloFooterModule,
    ModuloToursMexicoModule,
    ModuloTravelingMexicoModule,
    ModuloComparadorDeViajesModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

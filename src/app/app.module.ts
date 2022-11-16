import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuloMenuModule } from './modulo-menu/modulo-menu.module';
import { ModuloFooterModule } from './modulo-footer/modulo-footer.module';
import { ModuloTravelingMexicoModule } from './modulo-traveling-mexico/modulo-traveling-mexico.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModuloMenuModule,
    ModuloFooterModule,
    ModuloTravelingMexicoModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

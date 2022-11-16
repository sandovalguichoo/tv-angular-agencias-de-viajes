import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-global-de-acceso-panel-administracion',
  templateUrl: './vista-global-de-acceso-panel-administracion.component.html',
  styleUrls: ['./vista-global-de-acceso-panel-administracion.component.css']
})
export class VistaGlobalDeAccesoPanelAdministracionComponent implements OnInit {

    //-- Variables globales
    public vistaAgencia:Boolean=false;
    public vistaDestino:Boolean=false;
    public vistaTour:Boolean=false;
  
  
  
    //-- Metodos
  public activarVistaAgencia():void{
    this.vistaAgencia=true;
    this.vistaDestino=false;
    this.vistaTour=false;
  }
  
  public activarVistaDestino():void{
    this.vistaAgencia=false;
    this.vistaDestino=true;
    this.vistaTour=false;
  }
  
  
  public activarVistaTour():void{
    this.vistaAgencia=false;
    this.vistaDestino=false;
    this.vistaTour=true;
  }
  
  
    constructor() { }
  
    ngOnInit(): void {
      this.activarVistaAgencia();
    }
  
}

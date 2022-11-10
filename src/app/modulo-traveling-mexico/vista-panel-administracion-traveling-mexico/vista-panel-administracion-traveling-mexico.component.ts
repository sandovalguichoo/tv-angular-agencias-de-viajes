import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-panel-administracion-traveling-mexico',
  templateUrl: './vista-panel-administracion-traveling-mexico.component.html',
  styleUrls: ['./vista-panel-administracion-traveling-mexico.component.css']
})
export class VistaPanelAdministracionTravelingMexicoComponent implements OnInit {

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

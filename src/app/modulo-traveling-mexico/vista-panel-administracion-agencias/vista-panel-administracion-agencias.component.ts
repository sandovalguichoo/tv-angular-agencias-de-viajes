import { Component, OnInit } from '@angular/core';
import { ConsumoApiAgenciasService } from '../modelo-servicios-agencias/consumo-api-agencias.service';
import { EntityAgencia } from '../modelo-entitys-agencias/entity-agencia';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-vista-panel-administracion-agencias',
  templateUrl: './vista-panel-administracion-agencias.component.html',
  styleUrls: ['./vista-panel-administracion-agencias.component.css']
})
export class VistaPanelAdministracionAgenciasComponent implements OnInit {

/* =================== VARIABLES GLOBALES ====================== */


//-- Variables listar agencias
public listEntityAgencia: EntityAgencia[] | undefined;
public entityAgencia: EntityAgencia | undefined;

//-- Variables añadir/editar agencias
public tituloSeccionAnadorEditarAgencia: String="";
public tituloBtnGuardarEditarAgencia: String="";
public activarBtnGuardarEditarAgencia:boolean=false;




/* =========================== METODOS =========================== */

//-- Metodo listar agencias
public listarAgencias():void{
    this.servicioConsumoApiAgencias.listarAgencias().subscribe(respuesta => {
      this.listEntityAgencia = respuesta;
    },
    err=>{
      alert("¡Ocurrio un error!");
    }
  )
}



//-- Metodo eliminar agencia byId
public eliminarAgenciaById(entityAgencia: EntityAgencia){

    this.servicioConsumoApiAgencias.eliminarAgencia(entityAgencia.idAgencia).subscribe(respuesta=>{
    this.listarAgencias();
      alert("Eliminado con exito");
    },
    err=>{
      switch(err.status){
        case 500:
          alert("No puedes eliminar esta Agencia ya que se encuentra asociada a otros registros");
        break;

        default:
          alert("Error al eliminar "+entityAgencia.idAgencia+" "+err.status);
        break;
      }

     
    }
  )
}



//-- Metodo cargar ventana guardar
public cargarVentanaGuardarAgencia():void{
  this.activarBtnGuardarEditarAgencia=true;
  this.tituloSeccionAnadorEditarAgencia="Guardar Agencia";
  this.tituloBtnGuardarEditarAgencia="Guardar";
}

//-- Metodo cargar ventana editar
public cargarVentanaEditarAgencia():void{
  this.activarBtnGuardarEditarAgencia=true;
  this.tituloSeccionAnadorEditarAgencia="Editar Agencia";
  this.tituloBtnGuardarEditarAgencia="Editar";
}

//-- Activar desactivar boton ocultar seccion editar/eliminar
public ocultarSeccionGuardarEditarAgencia():void{
    this.activarBtnGuardarEditarAgencia=false;
}



/* ==================== CONSTRUCTORES Y DEMAS ===================== */


//-- Cargar variables
constructor(
  private servicioConsumoApiAgencias: ConsumoApiAgenciasService
) { }


ngOnInit(): void {
  this.listarAgencias();
}


}

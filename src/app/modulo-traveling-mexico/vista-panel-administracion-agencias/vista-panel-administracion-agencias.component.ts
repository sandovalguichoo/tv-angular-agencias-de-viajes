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
public entityAgencia: EntityAgencia =new EntityAgencia();

//-- Variables añadir/editar agencias
public tituloSeccionAnadorEditarAgencia: String="";
public tituloBtnGuardarEditarAgencia: String="";
public activarBtnGuardarEditarAgencia:boolean=false;
public mensajePersonalizadoGlobal:String="";
public mensajePersonalizadoFormulario:String="";




/* =========================== METODOS =========================== */


/*-- Validar formulario guardar/editas */
public formGrupFormGuardarEditar=new FormGroup({
  form_idAgencia: new FormControl("",),
  form_nombreAgencia: new FormControl("", [Validators.required, Validators.max(250)]),
  form_direccionAgencia: new FormControl("",[Validators.required, Validators.max(500)]),
  from_urlFotoAgencia: new FormControl("",[Validators.required, Validators.max(500)]),
  form_fechaCreacionAgencia: new FormControl("",)
});



//-- Metodo listar agencias
public listarAgencias():void{
    this.servicioConsumoApiAgencias.listarAgencias().subscribe(respuesta => {
      this.listEntityAgencia = respuesta;
    },
    err=>{

      switch(err.estatus){
        case 500:
          this.mensajePersonalizadoGlobal="Lo sentimos no se han podido cargar los datos";
        break;

        default:
          this.mensajePersonalizadoGlobal="Error desconocido, intentalo más tarde. Error "+err.status;
        break;

      }
      this.mensajePersonalizadoGlobal
      alert("¡Ocurrio un error!");
    }
  )
}


//-- Metodo guardar
public guardarAgencia():void{

  if (this.formGrupFormGuardarEditar.valid) {
    this.servicioConsumoApiAgencias.guardarAgencia(this.entityAgencia).subscribe(respuesta =>{
        this.entityAgencia=respuesta;
        this.listarAgencias();
        this.ocultarSeccionGuardarEditarAgencia();
        this.mensajePersonalizadoGlobal="✔️ ¡Agencia guardada con exito!";
    },
      err=>{
        this.mensajePersonalizadoFormulario="❌ ¡Error "+err.status+", intentalo más tarde!";
      }
    )
    
  }else{
    console.log(this.formGrupFormGuardarEditar);
    this.mensajePersonalizadoFormulario="❌ ¡Rellena todos los campos!";
  }
}


//-- Metodo eliminar agencia byId
public eliminarAgenciaById(entityAgencia: EntityAgencia):void{

        //Elimina la agencia
        this.servicioConsumoApiAgencias.eliminarAgencia(entityAgencia.idAgencia).subscribe(respuesta=>{
          this.mensajePersonalizadoGlobal="¡Agencia "+entityAgencia.nombreAgencia+" eliminada!";
          this.listarAgencias();
          },
          err=>{
            switch(err.status){
              case 500:
                this.mensajePersonalizadoGlobal="No puedes eliminar esta Agencia ya que se encuentra asociada a otros registros";
              break;

              case 404:
                this.mensajePersonalizadoGlobal="No puedes eliminar esta Agencia ya que no existe";
                this.listarAgencias();
              break;
      
              default:
                this.mensajePersonalizadoGlobal="Errors desconocido: "+err.status+"Intentalo más tarde";
              break;
            }
          }
        )
}





//-- Metodo limpiar formulario guardar/editar Agencia
private limpiarFormularioGuardarEditarAgencia():void{
  this.formGrupFormGuardarEditar.reset();
}

//-- Metodo cargar ventana guardar
public cargarVentanaGuardarAgencia():void{
  this.activarBtnGuardarEditarAgencia=true;
  this.tituloSeccionAnadorEditarAgencia="Guardar Agencia:";
  this.tituloBtnGuardarEditarAgencia="Guardar";
  this.mensajePersonalizadoFormulario="";
  
}

//-- Metodo cargar ventana editar
public cargarVentanaEditarAgencia(entityAgencia: EntityAgencia):void{
  this.activarBtnGuardarEditarAgencia=true;
  this.tituloSeccionAnadorEditarAgencia="Editar Agencia:";
  this.tituloBtnGuardarEditarAgencia="Editar";
  this.mensajePersonalizadoFormulario="";

  this.servicioConsumoApiAgencias.buscarAgenciaById(entityAgencia.idAgencia).subscribe(respuesta=>{
    this.entityAgencia=respuesta;
  },
      err=>{
        this.mensajePersonalizadoFormulario="Error "+err.status+" al cargar Agencia a editar";
      }
  )

}

//-- Activar desactivar boton ocultar seccion editar/eliminar
public ocultarSeccionGuardarEditarAgencia():void{
    this.limpiarFormularioGuardarEditarAgencia();
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

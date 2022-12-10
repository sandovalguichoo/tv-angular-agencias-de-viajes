import { Component, OnInit } from '@angular/core';
import { ConsumoApiAgenciasService } from '../modelo-servicios-agencias/consumo-api-agencias.service';
import { EntityAgencia } from '../modelo-entitys-agencias/entity-agencia';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
import { HttpErrorResponse, HttpResponse, HttpHeaders, HttpStatusCode, HttpRequest } from '@angular/common/http';

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

public mensajePersonalizadoFormulario:String="";
public mensajePersonalizadoGlobalSuccess:String="";
public mensajePersonalizadoGlobalError:String="";


/* =========================== METODOS =========================== */


/*-- Validar formulario guardar/editas */
public formGrupFormGuardarEditar=new FormGroup({
  form_idAgencia: new FormControl("",),
  form_nombreAgencia: new FormControl("", [Validators.required, Validators.max(250)]),
  form_direccionAgencia: new FormControl("",[Validators.required, Validators.max(500)]),
  from_urlFotoAgencia: new FormControl("",[Validators.required, Validators.max(500)]),
  form_fechaCreacionAgencia: new FormControl("",)
});

//-- Metodo limpiar formulario guardar/editar Agencia
private limpiarFormularioGuardarEditarAgencia():void{
  this.formGrupFormGuardarEditar.reset();
}


//-- Activar o desactivar seccion editar/eliminar
public ocultarSeccionGuardarEditarAgencia():void{
  this.activarBtnGuardarEditarAgencia=false;
  this.limpiarFormularioGuardarEditarAgencia();
}

//-- Metodo limpia las notificaciones globales
public limpiarNotificacionesGlobales(){
  this.mensajePersonalizadoGlobalError="";
  this.mensajePersonalizadoGlobalSuccess="";
}

//-- Metodo cargar ventana guardar
public cargarVentanaGuardarAgencia():void{
  this.activarBtnGuardarEditarAgencia=true;
  this.tituloSeccionAnadorEditarAgencia="Guardar Agencia:";
  this.tituloBtnGuardarEditarAgencia="Guardar";
  this.mensajePersonalizadoFormulario="";
  this.limpiarNotificacionesGlobales();
  this.limpiarFormularioGuardarEditarAgencia();
}




//-- Metodo cargar ventana editar
public cargarVentanaEditarAgencia(entityAgencia: EntityAgencia):void{
  this.activarBtnGuardarEditarAgencia=true;
  this.tituloSeccionAnadorEditarAgencia="Editar Agencia:";
  this.tituloBtnGuardarEditarAgencia="Editar";
  this.mensajePersonalizadoFormulario="";
  this.limpiarNotificacionesGlobales();
  this.limpiarFormularioGuardarEditarAgencia();

  this.servicioConsumoApiAgencias.buscarAgenciaById(entityAgencia.idAgencia).subscribe(
    
    HttpResponse => {
    this.entityAgencia=HttpResponse;   
    if(this.entityAgencia==null){
      this.mensajePersonalizadoGlobalError=" ❌ Lo sentimos, la Agencia que quieres editar no existe";
      this.ocultarSeccionGuardarEditarAgencia();
      this.listarAgencias();
    } 
  },
  HttpErrorResponse => {
        switch(HttpErrorResponse.status){
            default:
                this.mensajePersonalizadoGlobalError="❌ Error "+HttpErrorResponse.status+": "+ HttpErrorResponse.error.error; 
                this.ocultarSeccionGuardarEditarAgencia();
                this.listarAgencias();
              break;
        }

      }
  )

}



//-- Metodo listar agencias
public listarAgencias():void{
    this.servicioConsumoApiAgencias.listarAgencias().subscribe(
      
    HttpResponse => {
      this.listEntityAgencia = HttpResponse;
      if(this.listEntityAgencia==null){
        this.mensajePersonalizadoGlobalError="❌ ¡Lo sentimos, aún no hay agencias registradas. Añade una para poder verla aquí";
      }
    },
      HttpErrorResponse=>{
        switch(HttpErrorResponse.estatus){
           default:
               this.mensajePersonalizadoGlobalError="❌ Error "+HttpErrorResponse.status+": "+ HttpErrorResponse.error.error; 
             break;

        }
      }
  )

}



//-- Metodo guardar/Editar
public guardarAgencia():void{

  if (this.formGrupFormGuardarEditar.valid) {


    //-- Editar
    if(this.entityAgencia.idAgencia!=null){
      this.servicioConsumoApiAgencias.editarAgencia(this.entityAgencia).subscribe(
        HttpResponse => {
          this.entityAgencia=HttpResponse;
          this.listarAgencias();
          this.ocultarSeccionGuardarEditarAgencia()
          this.mensajePersonalizadoGlobalSuccess="✔️ ¡Agencia editada con exito!";
        },
        HttpErrorResponse=>{
          switch(HttpErrorResponse.status){
            default:
               this.mensajePersonalizadoFormulario="❌ Error "+HttpErrorResponse.status+": "+ HttpErrorResponse.error.error; 
              break;
          }
        }
      )
    }

        //-- Guardar
        if(this.entityAgencia.idAgencia==null){
          this.servicioConsumoApiAgencias.guardarAgencia(this.entityAgencia).subscribe(

            HttpResponse =>{
              this.entityAgencia=HttpResponse;
              this.listarAgencias();
              this.ocultarSeccionGuardarEditarAgencia();
              this.mensajePersonalizadoGlobalSuccess="✔️ ¡Agencia guardada con exito!";
          },

            HttpErrorResponse => {
              switch (HttpErrorResponse.status){
                default:
                  this.mensajePersonalizadoFormulario="❌ Error "+HttpErrorResponse.status+": "+ HttpErrorResponse.error.error; 
                  break;
              }
            }

          )
        }

  }else{
    this.mensajePersonalizadoFormulario="❌ ¡Rellena todos los campos!";
  }
}


//-- Metodo eliminar agencia byId
public eliminarAgenciaById(entityAgencia: EntityAgencia):void{

        //Elimina la agencia
        this.servicioConsumoApiAgencias.eliminarAgencia(entityAgencia.idAgencia).subscribe(
          HttpResponse =>{
          this.mensajePersonalizadoGlobalSuccess="✔️ ¡Agencia "+entityAgencia.nombreAgencia+" eliminada!";
          this.listarAgencias();
          },
          HttpErrorResponse=>{
            switch(HttpErrorResponse.status){      
              default:
                this.mensajePersonalizadoGlobalError="❌ Error "+HttpErrorResponse.status+": "+ HttpErrorResponse.error.error; 
                this.listarAgencias();
              break;
            }
          }
        )
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

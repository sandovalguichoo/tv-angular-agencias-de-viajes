import { Component, OnInit } from '@angular/core';
import { EntityDestino } from '../modelo-entitys-destinos/entity-destino';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConsumoApiDestinosService } from '../modelo-servicios-destinos/consumo-api-destinos.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ConsumoApiAgenciasService } from '../modelo-servicios-agencias/consumo-api-agencias.service';

@Component({
  selector: 'app-vista-panel-administracion-destinos',
  templateUrl: './vista-panel-administracion-destinos.component.html',
  styleUrls: ['./vista-panel-administracion-destinos.component.css']
})
export class VistaPanelAdministracionDestinosComponent implements OnInit {

  /* =================== VARIABLES GLOBALES ====================== */
  public listEntityDestino: EntityDestino[]|undefined;
  public entityDestino: EntityDestino=new EntityDestino;

  public tituloSeccionAnadorEditarDestino: String="";
  public tituloBtnGuardarEditarDestino: String="";
  public activarBtnGuardarEditarDestino:boolean=false;

  public mensajePersonalizadoFormulario:String="";
  public mensajePersonalizadoGlobalSuccess:String="";
  public mensajePersonalizadoGlobalError:String="";


  /* =========================== METODOS =========================== */
 
  //-- Validar formulario guardar/editar
  public formGroupFormGuardarEditar=new FormGroup({
    form_idDestino: new FormControl("",[]),
    form_nombreDestino: new FormControl("",[Validators.required]),
    form_urlFoto:new FormControl("",[Validators.required]),
    form_fechaRegistroDestino:new FormControl("",[])
  });


//-- Metodo limpiar formulario guardar/editar Agencia
private limpiarFormularioGuardarEditarAgencia():void{
  this.formGroupFormGuardarEditar.reset();
}


//-- Activar o desactivar seccion editar/eliminar
public ocultarSeccionGuardarEditarAgencia():void{
  this.activarBtnGuardarEditarDestino=false;
  this.limpiarFormularioGuardarEditarAgencia();
}

//-- Metodo limpia las notificaciones globales
public limpiarNotificacionesGlobales(){
  this.mensajePersonalizadoGlobalError="";
  this.mensajePersonalizadoGlobalSuccess="";
}

//-- Metodo cargar ventana guardar
public cargarVentanaGuardarAgencia():void{
  this.activarBtnGuardarEditarDestino=true;
  this.tituloSeccionAnadorEditarDestino="Guardar Destino:";
  this.tituloBtnGuardarEditarDestino="Guardar";
  this.mensajePersonalizadoFormulario="";
  this.limpiarNotificacionesGlobales();
  this.limpiarFormularioGuardarEditarAgencia();
}

public cargarVentanaEditarDestino(entityDestino:EntityDestino):void{
  this.activarBtnGuardarEditarDestino=true;
  this.tituloSeccionAnadorEditarDestino="Editar Destino:";
  this.tituloBtnGuardarEditarDestino="Editar";
  this.mensajePersonalizadoFormulario="";
  this.limpiarNotificacionesGlobales();
  this.limpiarFormularioGuardarEditarAgencia();

  
  this.servicioConsumoApiDestinos.buscarPorId(entityDestino.idDestino).subscribe(
    HttpResponse => {
    this.entityDestino=HttpResponse;  

    if(this.entityDestino==null){
      this.mensajePersonalizadoGlobalError=" ❌ Lo sentimos, el Destino que quieres editar no existe";
      this.ocultarSeccionGuardarEditarAgencia();
      this.listarDestinos();
    } 
  },
  HttpErrorResponse => {
        switch(HttpErrorResponse.status){
            default:
                this.mensajePersonalizadoGlobalError="❌ Error "+HttpErrorResponse.status+": "+ HttpErrorResponse.error.error; 
                this.ocultarSeccionGuardarEditarAgencia();
                this.listarDestinos();
              break;
        }

      }
  )
}



public listarDestinos():void{
  this.servicioConsumoApiDestinos.listarDestinos().subscribe(
    HttpResponse=>{
      this.listEntityDestino=HttpResponse;
    },
    HttpErrorResponse=>{
      switch(HttpErrorResponse.status){

        default:
          this.mensajePersonalizadoGlobalError="❌ Error "+HttpErrorResponse.status+": "+ HttpErrorResponse.error.error; 
        break;
      }
    }
  )
}

public guardarEditarDestino():void{

  if(this.formGroupFormGuardarEditar.valid){
    
    //-- Editamos
    if(this.entityDestino.idDestino!=null){
      this.servicioConsumoApiDestinos.editarPorId(this.entityDestino).subscribe(
        HttpResponse=>{
          this.mensajePersonalizadoGlobalSuccess="✔️ Destino editado con exito!";
          this.entityDestino=HttpResponse;
          this.ocultarSeccionGuardarEditarAgencia();
          this.listarDestinos();
        },
        HttpErrorResponse=>{
          switch(HttpErrorResponse.status){
            default:
              this.mensajePersonalizadoFormulario="❌ ¡Error "+HttpErrorResponse.status+", intentalo más tarde!";
              this.listarDestinos();  
             break;
          }
        }
      )
        
      
    }


    //-- Guardamos
    if(this.entityDestino.idDestino == null){
      this.servicioConsumoApiDestinos.guardar(this.entityDestino).subscribe(
        HttpResponse=>{
          this.mensajePersonalizadoGlobalSuccess="✔️ Destino Guardado con exito!";
          this.ocultarSeccionGuardarEditarAgencia();
          this.listarDestinos();
          
        },
        HttpErrorResponse=>{
          this.mensajePersonalizadoFormulario="❌ Error "+HttpErrorResponse.status+": "+ HttpErrorResponse.error.error; 
        }
      )
    }

  }else{
    this.mensajePersonalizadoFormulario="❌ ¡Rellena todos los campos!";
  }



};

public eliminarDestinoPorId(entityDestino:EntityDestino):void{

  this.servicioConsumoApiDestinos.eliminarPorId(entityDestino.idDestino).subscribe(
    HttpResponse=>{
      this.mensajePersonalizadoGlobalSuccess="✔️ Destino eliminado con exito!";
      this.listarDestinos();
    },
    HttpErrorResponse=>{
      switch(HttpErrorResponse.status){
        default:
          this.mensajePersonalizadoGlobalError="❌ Error "+HttpErrorResponse.status+": "+ HttpErrorResponse.error.error; 
          this.listarDestinos();
          break;
      }
    }
  )


}

  constructor(
    private servicioConsumoApiDestinos: ConsumoApiDestinosService,

  ) { }

  ngOnInit(): void {
    this.listarDestinos();
  }

}

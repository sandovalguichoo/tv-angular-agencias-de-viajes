import { Component, OnInit } from '@angular/core';
import { EntityTour } from '../modelo-entity-tours/entity-tour';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ConsumoApiDestinosService } from '../modelo-servicios-destinos/consumo-api-destinos.service';
import { ConsumoApiToursService } from '../modelo-servicios-tours/consumo-api-tours.service';
import { ConsumoApiAgenciasService } from '../modelo-servicios-agencias/consumo-api-agencias.service';
import { EntityAgencia } from '../modelo-entitys-agencias/entity-agencia';
import { EntityDestino } from '../modelo-entitys-destinos/entity-destino';

@Component({
  selector: 'app-vista-panel-administracion-tours',
  templateUrl: './vista-panel-administracion-tours.component.html',
  styleUrls: ['./vista-panel-administracion-tours.component.css']
})
export class VistaPanelAdministracionToursComponent implements OnInit {

  /* =================== VARIABLES GLOBALES ====================== */
  public listEntityAgencias: EntityAgencia[]|undefined;
  public listEntityDestinos: EntityDestino[]|undefined;
  public listEntityTour: EntityTour[]|undefined;
  public entityTour: EntityTour=new EntityTour;
  

  public tituloSeccionAnadorEditarTour: String="";
  public tituloBtnGuardarEditarTour: String="";
  public activarBtnGuardarEditarTour:boolean=false;

  public mensajePersonalizadoFormulario:String="";
  public mensajePersonalizadoGlobalSuccess:String="";
  public mensajePersonalizadoGlobalError:String="";

   
  /* =========================== METODOS =========================== */
 
  //-- Validar formulario guardar/editar
  public formGroupFormGuardarEditar=new FormGroup({
    form_idTour: new FormControl("",[]),
    form_idAgencia: new FormControl("",[]),
    form_idDestino: new FormControl("",[]),
    form_fSalida: new FormControl("",[]),
    form_hSalida: new FormControl("",[]),
    form_fRegreso: new FormControl("",[]),
    form_hRegreso: new FormControl("",[]),
    form_descripcionCorta: new FormControl("",[]),
    form_urlPagina: new FormControl("",[]),
    form_precio: new FormControl("",[]),
    form_fechaCreacion: new FormControl("",[]),
  });


//-- Metodo limpiar formulario guardar/editar Agencia
private limpiarFormularioGuardarEditarAgencia():void{
  this.formGroupFormGuardarEditar.reset();
}


//-- Activar o desactivar seccion editar/eliminar
public ocultarSeccionGuardarEditarAgencia():void{
  this.activarBtnGuardarEditarTour=false;
  this.limpiarFormularioGuardarEditarAgencia();
}

//-- Metodo limpia las notificaciones globales
public limpiarNotificacionesGlobales(){
  this.mensajePersonalizadoGlobalError="";
  this.mensajePersonalizadoGlobalSuccess="";
}


//-- Cargar datos Agencias
public cargarDatosAgencias():void{
  this.listEntityAgencias=undefined;
  this.servicioConsumoApiAgencias.listarAgencias().subscribe(
    HttpResponse=>{
      this.listEntityAgencias=HttpResponse;
    },
    HttpErrorResponse=>{
      switch(HttpErrorResponse.status){
        default:
            this.mensajePersonalizadoGlobalError="❌ Error "+HttpErrorResponse.status+": "+ HttpErrorResponse.error.error; 
            this.ocultarSeccionGuardarEditarAgencia();
            this.listarTours();
          break;
      }
    }
  )
}


//-- Cargar datos Destinos
public cargarDatosDestinos():void{
  this.listEntityDestinos=undefined;
  this.servicioConsumoApiDestinos.listarDestinos().subscribe(
    HttpResponse=>{
      this.listEntityDestinos=HttpResponse;
    },
    HttpErrorResponse=>{
      switch(HttpErrorResponse.status){
        default:
            this.mensajePersonalizadoGlobalError="❌ Error "+HttpErrorResponse.status+": "+ HttpErrorResponse.error.error; 
            this.ocultarSeccionGuardarEditarAgencia();
            this.listarTours();
          break;
      }
    }
  )
}



//-- Metodo cargar ventana guardar
public cargarVentanaGuardarAgencia():void{
  this.activarBtnGuardarEditarTour=true;
  this.tituloSeccionAnadorEditarTour="Guardar Tour:";
  this.tituloBtnGuardarEditarTour="Guardar";
  this.mensajePersonalizadoFormulario="";
  this.limpiarNotificacionesGlobales();
  this.limpiarFormularioGuardarEditarAgencia();
  this.cargarDatosAgencias();
  this.cargarDatosDestinos();
  
}





public cargarVentanaEditarTour(entityTour:EntityTour):void{
  this.activarBtnGuardarEditarTour=true;
  this.tituloSeccionAnadorEditarTour="Editar Tour:";
  this.tituloBtnGuardarEditarTour="Editar";
  this.mensajePersonalizadoFormulario="";
  this.limpiarNotificacionesGlobales();
  this.limpiarFormularioGuardarEditarAgencia();
  
  this.cargarDatosAgencias();
  this.cargarDatosDestinos(); 
  this.buscarPorId(entityTour);
}



public listarTours():void{
  this.servicioConsumoApiTour.listarTours().subscribe(
    HttpResponse=>{
      this.listEntityTour=HttpResponse;
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

public buscarPorId(entityTour:EntityTour):void{

  this.servicioConsumoApiTour.buscarTourPorId(entityTour.idTour).subscribe(
    HttpResponse => {

    this.entityTour=HttpResponse; 


    if(this.entityTour==null){
      this.mensajePersonalizadoGlobalError=" ❌ Lo sentimos, el Destino que quieres editar no existe";
      this.ocultarSeccionGuardarEditarAgencia();
      this.listarTours();
    } 
  },
  HttpErrorResponse => {
        switch(HttpErrorResponse.status){
            default:
                this.mensajePersonalizadoGlobalError="❌ Error "+HttpErrorResponse.status+": "+ HttpErrorResponse.error.error; 
                this.ocultarSeccionGuardarEditarAgencia();
                this.listarTours();
              break;
        }

      }
  )

}

public guardarEditarTours():void{

  if(this.formGroupFormGuardarEditar.valid){
    
    //-- Editamos
    if(this.entityTour.idTour!=null){
      this.servicioConsumoApiTour.editarTour(this.entityTour).subscribe(
        HttpResponse=>{
          this.mensajePersonalizadoFormulario="✔️ Tour editado con exito!";
          this.entityTour=HttpResponse;
          this.ocultarSeccionGuardarEditarAgencia();
          this.listarTours();
        },
        HttpErrorResponse=>{
          switch(HttpErrorResponse.status){
            default:
              this.mensajePersonalizadoFormulario="❌ Error "+HttpErrorResponse.status+": "+ HttpErrorResponse.error.error; 
              this.listarTours();  
             break;
          }
        }
      )
        
      
    }


    //-- Guardamos
    if(this.entityTour.idTour == null){
      this.servicioConsumoApiTour.guardarTour(this.entityTour).subscribe(
        HttpResponse=>{
          this.mensajePersonalizadoGlobalSuccess="✔️ Tour Guardado con exito!";
          this.ocultarSeccionGuardarEditarAgencia();
          this.listarTours();
          
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

  }else{
    this.mensajePersonalizadoFormulario="❌ ¡Rellena todos los campos!";
  }



};

public eliminarTourPorId(entityTour:EntityTour):void{

  this.servicioConsumoApiTour.eliminarTourPorId(entityTour.idTour).subscribe(
    HttpResponse=>{
      this.mensajePersonalizadoGlobalSuccess="✔️ Tour eliminado con exito!";
      this.listarTours();
    },
    HttpErrorResponse=>{
      switch(HttpErrorResponse.status){
        default:
          this.mensajePersonalizadoGlobalError="❌ Error "+HttpErrorResponse.status+": "+ HttpErrorResponse.error.error; 
          this.listarTours();
          break;
      }
    }
  )


}


  constructor(
    private servicioConsumoApiTour: ConsumoApiToursService,
    private servicioConsumoApiDestinos: ConsumoApiDestinosService,
    private servicioConsumoApiAgencias: ConsumoApiAgenciasService,
  ) { }

  ngOnInit(): void {
    this.listarTours();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { EntityTour } from '../modelo-entity-tours/entity-tour';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiToursService {


  //-- Variables globales
  private urlEndpoind="https://tv-traveling-api.herokuapp.com/tours/";
  //private urlEndpoind: String= "http://localhost:8090/api/traveling-api/tours/";
  //private urlEndpoind: String= "http://localhost:8080/tours/";



  //-- Metodo listar
  public listarTours():Observable<EntityTour[]>{
    return this.http.get(this.urlEndpoind+"list").pipe(
      map(respuesta=> respuesta as EntityTour[]),
      catchError(e=>{
        return throwError(e);
      }) 
    )
  }


  //-- Metodo buscar por id
  public buscarTourPorId(idTour:any):Observable<EntityTour>{
    return this.http.get(this.urlEndpoind+"show/"+idTour).pipe(
      map(respuesta=> respuesta as EntityTour),
      catchError(e=>{
       return throwError(e);
       })
    )   
  }


  //-- Metodo eliminar tour por id
  public eliminarTourPorId(idTour:any):Observable<EntityTour>{
    return this.http.delete(this.urlEndpoind+"delete/"+idTour).pipe(
      map(respuesta=> respuesta as EntityTour),
      catchError(e=>{
        return throwError(e);
      })
    )
  }


  //-- Metodo guardar tour
  public guardarTour(entityTour: EntityTour):Observable<EntityTour>{
    return this.http.post(this.urlEndpoind+"save/agencia/"+entityTour.entityAgencia?.idAgencia+"/destino/"+entityTour.entityDestino?.idDestino, entityTour).pipe(
      map(respuesta => respuesta as EntityTour),
      catchError(e=>{
        return throwError(e);
      })
    )
  }


  //-- Metodo editar tour
  public editarTour(entityTour:EntityTour):Observable<EntityTour>{
    return this.http.put(this.urlEndpoind+"update/tour/"+entityTour.idTour+"/agencia/"+entityTour.entityAgencia?.idAgencia+"/destino/"+entityTour.entityDestino?.idDestino,entityTour).pipe(
      map(respuesta=> respuesta as EntityTour),
      catchError(e=>{
        return throwError(e); 
      })
    )
  }




  constructor(
    private http:HttpClient
  ) { }
}

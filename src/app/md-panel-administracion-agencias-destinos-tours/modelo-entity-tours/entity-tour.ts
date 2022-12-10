import { EntityDestino } from '../modelo-entitys-destinos/entity-destino';
import { EntityAgencia } from '../modelo-entitys-agencias/entity-agencia';
import { Time } from '@angular/common';
export class EntityTour {
    
    public idTour:number|undefined;
    public entityDestino:EntityDestino=new EntityDestino;
    public entityAgencia:EntityAgencia= new EntityAgencia;
    public fSalida:Date|undefined;
    public hSalida:Time|undefined;
    public fRegreso:Date|undefined;
    public hRegreso:Time|undefined;
    public descripcionCorta:String|undefined;
    public urlPagina:String|undefined;
    public precio:number|undefined;
    public fCreacion:Date|undefined;
}

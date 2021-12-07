import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Offre } from '../model/offre';
@Injectable({
  providedIn: 'root'
})
export class OffreService {

  
  api: String=environment.api;
  root :string ='/offres';

  constructor(private http: HttpClient) { }

  getOffres(){
    return this.http.get(this.api + this.root,{headers:new HttpHeaders({'authorization':localStorage.getItem("token")})}).pipe(map((data:any)=>{      
     
      return  data.map(obj=>{       
       return Object.assign( {image : this.api+"/images/"+obj.parking.photo},obj,{headers:new HttpHeaders({'authorization':localStorage.getItem("token")})});
      })
    }));
  }
  addOffre(offre: Offre){
    const optionRequete = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'mon-entete-personnalise':'maValeur'
      })
    };
    
    return this.http.post(this.api+this.root,offre);
  }
  updateOffre(offre: Offre){
    const optionRequete = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'mon-entete-personnalise':'maValeur'
      })
    };
    
    return this.http.put(this.api+this.root,offre);

  }
  deleteOffre(id){

    const optionRequete = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'mon-entete-personnalise':'maValeur'
      })
    };
    return this.http.delete(this.api+this.root+"/"+id);
  }
}

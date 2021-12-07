import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Paiement } from '../model/paiement';

@Injectable({
    providedIn: 'root'
  })
  export class PaiementService{
    api: String=environment.api;
    root :string ='paiements';
  constructor(private http: HttpClient) { }
   addPaiement(paiement: Paiement){
       console.log("paie front")
       return this.http.post(this.api+"paiements",paiement,{headers: new HttpHeaders({'autorization':localStorage.getItem("token")})});
   }

   getPaiement(id){
    
    return this.http.get(this.api+"/paiements/"+id,{headers:new HttpHeaders({'authorization':localStorage.getItem("token")})});
  }
  }

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Reservation } from '../model/reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  api: String=environment.api;
  root :string ='/offres/';


  
  
  constructor(private http: HttpClient) { }
  getOffre(id:any){ 
    const optionRequete = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'mon-entete-personnalise':'maValeur'
      })
    };
    // console.log(this.http.get(this.api + this.root+id))
    return this.http.get(this.api + this.root+id,{headers:new HttpHeaders({'authorization':localStorage.getItem("token")})}).pipe(map((data:any)=>{    
      return Object.assign( {image : this.api+"/images/"+data.parking.photo},data,{headers:new HttpHeaders({'authorization':localStorage.getItem("token")})});     
   }));


  }
  addReservation(reservation){
    
    
     return this.http.post(this.api+"/reservations",reservation,{headers:new HttpHeaders({'authorization':localStorage.getItem("token")})});
      
  }
  getReservation(id){
    
    return this.http.get(this.api+"/reservations/"+id,{headers:new HttpHeaders({'authorization':localStorage.getItem("token")})});
  }
}

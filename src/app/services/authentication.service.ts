import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class AuthenticationService {
  
    
    api: String=environment.api;
    root :string ='/login';
    onLogin= new Subject();
    private jwtToken=null;

    constructor(private http: HttpClient) { }
    login(user){

        console.log(user);
        
        return this.http.post(this.api+this.root,user);
       }
       saveToken(jwt:Token, user){
        localStorage.setItem('user',user);
         console.log(jwt);
           this.jwtToken=jwt;
           localStorage.setItem('token',jwt.Authorization);  
              
       }
       logout(){
         localStorage.clear();
       }




  }

  export interface Token{
    Authorization : string
  }
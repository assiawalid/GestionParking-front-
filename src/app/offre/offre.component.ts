import { Component, OnInit } from '@angular/core';
import { OffreService } from '../services/offre.service';

import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  public offres;
  api= environment.api;

  constructor(private offreService: OffreService ) { }

  ngOnInit(): void {
    this.getAll();
    let img1 = this.api +"/images/sdfsdfsfs.png"
  }
  getAll(){
    this.offreService.getOffres().subscribe(data=>{
      this.offres=data;
      console.log("list offres")
      console.log(data);
      
    },err=>
      console.error(err),
    ()=> console.log("termine ")
    
    )

    
  }

}

import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Paiement } from '../model/paiement';
import { PaiementService } from '../services/paiement.service';
import { Facture } from '../model/facture';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  public paiement;
   facture: Facture=new Facture();
  constructor(private route: ActivatedRoute, private paiementServ: PaiementService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.getPaiement(this.route.snapshot.params.id).subscribe(data=>{
      this.paiement=data;
    });
   
  }
  getPaiement(id){
    console.log("ici comp")
    return this.paiementServ.getPaiement(id);
  }
 

}

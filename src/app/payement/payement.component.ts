import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../model/reservation';
import { PaiementService } from '../services/paiement.service';
import { Paiement } from '../model/paiement';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {
  public reservation; 
  public paiement: Paiement=new Paiement();

  constructor(private route: ActivatedRoute, private reservationService: ReservationService,private paiementService: PaiementService) { }

  ngOnInit(): void {
   console.log(this.route.snapshot.params.id);
   this.getReservation(this.route.snapshot.params.id).subscribe(data=>{
     this.reservation=data;
     console.log("pay",data)
   });
  
   
   console.log("****************"+this.reservation.total);
   

  }
  getReservation(id){
    console.log("ici comp")
    return this.reservationService.getReservation(id);
  }
  addPaiement(){
   

    this.paiement.user=this.reservation.offre.user;
    this.paiement.reservations.push(this.reservation);
    return this.paiementService.addPaiement(this.paiement).subscribe(data=>{        
      let p= data as Paiement;
      window.location.href="/facture/"+p.id;})


    }

}

import {  Component,  OnInit, Output, EventEmitter} from '@angular/core';
import {  ActivatedRoute} from '@angular/router';
import {  ReservationService} from '../services/reservation.service';
import {  FormBuilder,  FormGroup,  Validators} from '@angular/forms';
import { Reservation } from '../model/reservation';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  public reservation:Reservation=new Reservation();  
  form: FormGroup;
  totalSer:number=0

  @Output() 
  dateChange:EventEmitter<MatDatepickerInputEvent<any>>;

  constructor(private route: ActivatedRoute, private reservationService: ReservationService, private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required])
    })
  } 

  offre; services;

  ngOnInit(): void {
    this.getOffre(this.route.snapshot.params.id);
  }

  onCheckboxChange(e) {
    let serviceCourant = this.offre.services.filter(s => s.id == e.target.value)[0];
    if (e.target.checked) {
      this.totalSer=this.totalSer+serviceCourant.prix;
      this.reservation.total = this.reservation.total + serviceCourant.prix;
      this.reservation.services.push(serviceCourant);
    } else {
      this.totalSer=this.totalSer-serviceCourant.prix;
      this.reservation.total = this.reservation.total - serviceCourant.prix;
      this.reservation.services=this.reservation.services.filter(p=>p!=serviceCourant);
    }        
  }

  submitForm() {
    //this.reservation.offre.id=1;  
   // this.reservation.user.id=1;
   // console.log("c reservation")
     return this.reservationService.addReservation(this.reservation).subscribe(data=>{        
        let res = data as Reservation;
        console.log("**********",res);
      window.location.href="/payement/"+res.id;

   }
    ,err=>console.error(err));
  }

  onChangeDate(){
    let t=this.offre.tarif;
    if(this.reservation.dateDebut && this.reservation.dateFin){
      
    t=t*(this.reservation.dateFin.getDate() - this.reservation.dateDebut.getDate());
    
      this.reservation.total=this.reservation.total+   t;     }
  }

  getOffre(id) {
    this.reservationService.getOffre(id).subscribe(data => {
        this.offre = data;
        this.reservation.offre=data;
        this.reservation.total=this.offre.tarif;
      }, err => console.error(err)
    );
  }
}

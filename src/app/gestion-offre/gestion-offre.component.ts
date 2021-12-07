import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OffreService } from '../services/offre.service';
import { Offre } from '../model/offre';

@Component({
  selector: 'app-gestion-offre',
  templateUrl: './gestion-offre.component.html',
  styleUrls: ['./gestion-offre.component.css']
})
export class GestionOffreComponent implements OnInit {
     offres: Offre[];
     offreForm: FormGroup;
   operation : String='add';
   selectedOffre : Offre;
  constructor(private fb: FormBuilder, private route:ActivatedRoute,private offreService: OffreService) {
    this.createForm();
   }

  ngOnInit(): void {
    this.initOffre();
    this.loadOffre();
this.offres=this.route.snapshot.data.produits;
  }
  loadOffre(){
    this.offreService.getOffres().subscribe(data=>{
      this.offres=data;

 })
  }

  createForm(){
    this.offreForm=this.fb.group({

      id:['' ,Validators.required],
      libelle: '',
      description: '',
      dateDebut: '',
      dateFin: '',
      tarif: '',
      user: '',
      parking: ''
      
    });
  }
  initOffre(){
    this.selectedOffre= new Offre();
    this.createForm();
  }
  addOffre(){
    this.offreService.addOffre(new Offre(this.offreForm.value.id, this.offreForm.value.libelle, this.offreForm.value.description,this.offreForm.value.dateDebut,this.offreForm.value.dateFin,this.offreForm.value.tarif,this.offreForm.value.user,this.offreForm.value.parking)).subscribe(
      res=>{
        this.initOffre();
        this.loadOffre();
      },
      err=>{
        console.log(err);
      }
    );

  }
  deleteOffre(){
    this.offreService.deleteOffre(this.selectedOffre).subscribe(
      res=>{
        this.initOffre();
        this.loadOffre();
      },
      err=>{
        console.log(err);
      }
    );
  }
  updateOffre(){
    this.offreService.updateOffre(this.selectedOffre).subscribe(
      res=>{
        this.initOffre();
        this.loadOffre();
      },
      err=>{
        console.log(err);
      }
    );

  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Component } from '@angular/core';
import{OffreComponent} from './offre/offre.component';
import{ReservationComponent} from './reservation/reservation.component';
import { AppComponent } from './app.component';
import { PayementComponent } from './payement/payement.component';
import { GestionOffreComponent } from './gestion-offre/gestion-offre.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { FactureComponent } from './facture/facture.component';
import { ServiceComponent } from './service/service.component';
import { ProfilComponent } from './profil/profil.component';





const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  {path :"offre",  component: OffreComponent},
  {path :"home",  component: AppComponent},
  {path :"reservation",  component: ReservationComponent},
  {path :"reservation/:id",  component: ReservationComponent},
  {path :"payement",  component: PayementComponent},
  {path :"payement/:id",  component: PayementComponent},
  {path :"gestion-offre",  component: GestionOffreComponent},
  {path :"inscription",  component: InscriptionComponent},
  {path :"login",  component: LoginComponent},
  {path :"facture",  component: FactureComponent},
  {path :"service",  component: ServiceComponent},
  {path :"profil",  component: ProfilComponent}
  


];









@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

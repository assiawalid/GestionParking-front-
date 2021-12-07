import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider';
import { OffreComponent } from './offre/offre.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OffreService } from './services/offre.service';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FiltreComponent } from './filtre/filtre.component';
import { ReservationComponent } from './reservation/reservation.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PayementComponent } from './payement/payement.component';
import { GestionOffreComponent } from './gestion-offre/gestion-offre.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FactureComponent } from './facture/facture.component';
import { ServiceComponent } from './service/service.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    OffreComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    FiltreComponent,
    ReservationComponent,
    PayementComponent,
    GestionOffreComponent,
    LoginComponent,
    InscriptionComponent,
    FactureComponent,
    ServiceComponent,
    ProfilComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    CarouselModule,
     AppRoutingModule,
     MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule
    
     
   
  
    
  ],
  providers: [OffreService],
  bootstrap: [AppComponent]
})
export class AppModule { }

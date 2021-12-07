import { User } from './user';
import { Service } from './service';
import { Parking } from './parking';

export class Offre {


  
    constructor(
  
          public id?: number,
          public libelle?: String,
          public description?: String,
          public dateDebut?: Date,
          public dateFin?: Date,
          public tarif?: number,
          public user?: User,
          public parking?: Parking
          
  ) {
  
    }
  
  
  }
  
import { User } from './user';
import { Service } from './service';
import { Offre } from './offre';

export class Reservation{


constructor(
  
    public id?: number,
    public dateRes: Date=new Date(),
    public dateDebut?: Date,
    public dateFin?: Date,
    public total: number=0,
    public user?: User,
    public offre?: Offre,
    public services:Service[]=[]
    
    
) {

}
}
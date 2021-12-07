import { Reservation } from './reservation';
import { User } from './user';


export class Paiement{
    constructor(
        public id?: number,
        public reservations:Reservation[]=[],
        public user?:User
        
    ){

    }
}
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GestionParkingFront';
  showFilter = true;
  constructor(private r:Router){

  }
  ngOnInit(){

    this.r.events.pipe(
      filter(event => event instanceof NavigationEnd)  
    ).subscribe((event: NavigationEnd) => {
      this.showFilter = ['/home'].filter(item=>item === event.url).length != 0;
    });
  }

 
 
}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
     user;
  constructor(private authService: AuthenticationService, private router:Router) { }

  ngOnInit(): void {
     
  
   this.authService.onLogin.subscribe(
     data=> this.user=this.getUser()
   )
   this.authService.onLogin.next(true);
  }
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  logout(){
    this.authService.logout();
    this.authService.onLogin.next(true);
   // this.router.navigate(['/home']);
   this.router.navigateByUrl("/home");

  }

}

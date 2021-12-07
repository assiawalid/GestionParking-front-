import {  Component,  OnInit} from '@angular/core';
import { AuthenticationService,Token} from '../services/authentication.service';
import {  Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode: number = 0;
  constructor(private authService: AuthenticationService, private router: Router) {}
  user:any={};
  
  ngOnInit(): void {
    this.user={"username":"","password":""};
  }
  onLogin(user) {
    this.authService.login(user)
      .subscribe(resp => {
        
        //this.authService.saveToken(resp);
        this.router.navigateByUrl('/offres');
        

      }), err => {
        console.log(err);
        this.mode = 1;

      }
  }
    onLogin2() {
      console.log("user*********",this.user)
    this.authService.login(this.user)
      .subscribe((resp:Token) => {
        console.log(resp)                
        this.authService.saveToken(resp,JSON.stringify(this.user));
       this.router.navigateByUrl('/home');  
       this.authService.onLogin.next(true)  

      }), err => {
        console.log(err);
        this.mode = 1;

      }
  }

}

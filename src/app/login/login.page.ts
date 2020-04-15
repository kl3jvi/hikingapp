import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() { }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(!this.authService.isEmailVerified) {
          this.router.navigate(['tabs/tab1']);          
        } else {
         console.log('Email is not verified')
          return false;
        }
      }).catch((error) => {
        console.log(error.message)
      })
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(public authService: AuthenticationService, public router: Router,public toastController: ToastController,public loadingController: LoadingController) { }
show = "Please Wait";
show1 = "Welcome To Hiking App";
  signUp(email, password) {
    this.authService.RegisterUser(email.value, password.value)
      .then((res) => {
        this.presentLoading(this.show)
        
        setTimeout( () => {
          this.router.navigate(['tabs/tab1']);
     }, 1000);
     
     setTimeout( () => {
      this.presentToast(this.show1)
      }, 2000);

      }).catch((error) => {
        console.log(error.message)
      })
  }


  async presentLoading(a) {
    const loading = await this.loadingController.create({
      message: a,
      duration: 2000
    });
    await loading.present();
  }


  async presentToast(ae) {
    const toast = await this.toastController.create({
      message: ae,
      duration: 3000
    });
    toast.present();
  }
}

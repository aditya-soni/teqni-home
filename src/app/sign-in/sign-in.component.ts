import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RecaptchaModule } from 'ng-recaptcha';
import { ViewChild } from '@angular/core';

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public formModel: FormModel = {};
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
  }

  onSignIn(form:NgForm){
    const email= form.value.email;
    const password = form.value.password;
    this.authService.signInUser(email,password);
  }
  // resolved(captchaResponse: string) {
  //   console.log(`Resolved captcha with response ${captchaResponse}:`);
  // }
  

}

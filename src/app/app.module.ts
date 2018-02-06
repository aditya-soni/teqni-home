import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from './app.routing';
import { FormsModule } from "@angular/forms";
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RecaptchaModule } from "ng-recaptcha";
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    PasswordResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from "./auth-guard.service";
import { PasswordResetComponent } from './password-reset/password-reset.component';

const appRoutes: Routes = [
  {path:'', component:SignInComponent},
  {path: 'sign-up', component:SignUpComponent},
  {
    path:'home', component : HomeComponent , canActivate:[AuthGuard]
  },
  {
    path: 'reset', component:PasswordResetComponent
  },
  { path: '**', pathMatch: 'full', component: SignInComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash : true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private route:Router,
        private authService:AuthService
    ){}
    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
        let isUserLoggedIn = this.authService.isAuthenticated();
        if (!isUserLoggedIn) {
            this.route.navigate(['/'])
          }    
        return isUserLoggedIn;
    }
}
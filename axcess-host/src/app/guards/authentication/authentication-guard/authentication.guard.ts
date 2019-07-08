import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../authentication-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
debugger;
    let url: string = state.url;   
    let authTok:string = next.queryParams["auth"];

    if(authTok)
      this.authService.setAuthCookie(authTok);

    let hasPerm: boolean = this.authService.isActive();

    if (hasPerm || url === "/login")
      return true;
    else{
      window.location.href="http://localhost:4201/";
      return false;
    }
     
  }

}
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../authentication-service/auth.service';
import { ShellConfigService } from 'src/app/core/services/shell-config/shell-config.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private shellConfigService: ShellConfigService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
 
    let authTokQuryPrmName = this.shellConfigService.getAuthTokQuryPrmName();
    let url: string = state.url;
    let authTok: string = next.queryParams[authTokQuryPrmName];

    if (authTok)
      this.authService.login(authTok);

    let hasPerm: boolean = this.authService.isLoggedIn();

    if (hasPerm)
      return true;
    else {
      window.location.href = this.shellConfigService.getAuthServerURL();
      return false;
    }

  }

}
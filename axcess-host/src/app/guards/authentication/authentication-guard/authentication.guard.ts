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
    debugger;
    let authTokQuryPrmName = this.shellConfigService.getAuthTokQuryPrmName();
    let url: string = state.url;
    let authTok: string = next.queryParams[authTokQuryPrmName];
    let moduleName: string = next.params["id"];

    if (authTok) {
      this.authService.login(authTok);
      if (localStorage.getItem("lastModuleId")) {
        this.router.navigateByUrl("/" + localStorage.getItem("lastModuleId"));
        return false;
      }
    }

    let hasPerm: boolean = this.authService.isLoggedIn();

    if (hasPerm)
      return true;
    else {
      localStorage.setItem("lastModuleId", moduleName);
      window.location.href = this.shellConfigService.getAuthServerURL();
      return false;
    }

  }

}
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthorizationService } from '../service/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {

  constructor(private authService: AuthorizationService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    let url: string = state.url;
    let hasPerm: boolean = this.authService.hasPermission(url);

    if (hasPerm)
      return true;
    else {
      this.router.navigate(['/unauth']);
      return false;
    }

  }

}
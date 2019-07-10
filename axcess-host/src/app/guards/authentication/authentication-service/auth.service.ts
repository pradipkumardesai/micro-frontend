import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ShellConfigService } from 'src/app/core/services/shell-config/shell-config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_ID: string;

  constructor(private cookieService: CookieService, private shellConfigService: ShellConfigService) {
    this.AUTH_ID = this.shellConfigService.getAuthCookieName();
  }

  isLoggedIn(): boolean {
    let autId: string = this.cookieService.get(this.AUTH_ID)

    if (autId) {
      return true;
    } else
      return false;
  }

  login(authToken: string) {
    this.cookieService.set(this.AUTH_ID, authToken);
  }

  logout() {
    this.cookieService.delete(this.AUTH_ID);
    window.location.href = this.shellConfigService.getAuthServerURL();;
  }
}

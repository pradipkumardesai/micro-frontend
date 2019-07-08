import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }

  isActive(): boolean {
    let autId: string = this.cookieService.get("AuthID")
    if (autId)
      return true;
    else
      return false;
  }

  setAuthCookie(authToken: string) {
    this.cookieService.set("AuthID", authToken);
  }

  doLogout(){
    this.cookieService.delete("AuthID");
    window.location.href="http://localhost:4201/";
  }
}

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ShellConfigService } from 'src/app/core/services/shell-config/shell-config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_ID: string;
 

  constructor(private cookieService: CookieService, private shellConfigService: ShellConfigService,private http: HttpClient) {
    this.AUTH_ID = this.shellConfigService.getAuthCookieName();
  }

  isLoggedIn(): boolean {
    
    let autId: string = this.cookieService.get(this.AUTH_ID)
    if (autId) {
     
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': "Bearer "+autId
        })
      };
           
      this.http.get("https://z001test4commonservices.cchaxcess.com/CommonWebAPI/dashboardLinks/filteredlinksbygroup",httpOptions).subscribe(links=>{
        console.log(JSON.stringify(links));
      });
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ShellConfigService } from 'src/app/core/services/shell-config/shell-config.service';

@Injectable({
  providedIn: 'root'
})
export class AppLinkService {

  constructor(private http: HttpClient, private cookieService: CookieService, private shellConfigService: ShellConfigService) { }

  getLinks() {   
    return this.http.get("https://z001test4commonservices.cchaxcess.com/CommonWebAPI/dashboardLinks/filteredlinksbygroup");
  }
}

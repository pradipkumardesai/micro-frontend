import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppLinkService {

  constructor(private http: HttpClient) { }

  getLinks() {
    console.log("AppLinkService > getLinks");
    return this.http.get("https://z001test4commonservices.cchaxcess.com/CommonWebAPI/dashboardLinks/filteredlinksbygroup");
  }

}

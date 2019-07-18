import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'axcess-fam';
  shellData: any;
  mailingLists:any;

  @Input()
  content: string;

  ngOnInit(): void {
    this.shellData = JSON.parse(this.content)
    //alert(JSON.stringify(this.shellData.authToken));

    let headerDict = {
      'Content-Type': 'application/json',
      Authorization: this.shellData.authToken
    }

    let requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    this.http.get("https://z001test4commonservices.cchaxcess.com/CommonWebAPI/firmServices/getfirmmailinglist ", requestOptions).subscribe(data => {
      this.mailingLists = data;
      console.log(JSON.stringify(this.mailingLists));
    })
  }

  constructor(private http: HttpClient) { }

  getLinks() {
    return this.http.get("https://z001test4commonservices.cchaxcess.com/CommonWebAPI/dashboardLinks/filteredlinksbygroup");
  }

}

import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'axcess-fam';

  constructor(private cookieService: CookieService,private router: Router) {

  }

  doLogin() {
    window.location.href="http://localhost:4200/am?auth=abcd1234";
  }
}

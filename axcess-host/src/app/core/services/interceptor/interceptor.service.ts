import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ShellConfigService } from '../shell-config/shell-config.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  private AUTH_ID: string;
  private authId: string;

  intercept(request: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.authId
      }
    });
    return next.handle(request);
  }

  constructor(private cookieService: CookieService, private shellConfigService: ShellConfigService) {
    this.AUTH_ID = this.shellConfigService.getAuthCookieName();
    this.authId = this.cookieService.get(this.AUTH_ID)
  }
}

import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/guards/authentication/authentication-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ElementLoaderService {

  constructor(private authService: AuthService) { }

  load(url: string, dvName: string, elName: string): void {
    const content = document.getElementById(dvName);
    this.clearInnerHTML(content);
    const script = document.createElement('script');
    script.src = url;
    script.onload = this.onScriptLoaded;
    content.appendChild(script);
    const webAppElement = document.createElement(elName)


    webAppElement.setAttribute('state', 'init');
    webAppElement.setAttribute('content', JSON.stringify({ authToken: this.authService.getToken() }));
    webAppElement.addEventListener("onShellevent", this.onShelleEent.bind(this));

    content.appendChild(webAppElement);
  }

  onShelleEent(data: any, event) {
    console.log(JSON.stringify(data))
  }

  onScriptLoaded() {
    eval('delete window.webpackJsonp');
    console.log('loader false');
  }

  clearInnerHTML(e: HTMLElement) {
    e.innerHTML = "";
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementLoaderService {

  constructor() { }

  load(url:string,dvName:string,elName:string): void {//axcess-tax
  
    const content = document.getElementById(dvName);
    const script = document.createElement('script');
    script.src = url;
    script.onload = this.onScriptLoaded;

    content.appendChild(script);
    const webAppElement: HTMLElement = document.createElement(elName);
    content.appendChild(webAppElement);
    webAppElement.setAttribute('state', 'init');
  }

  onScriptLoaded()
  {
    eval('delete window.webpackJsonp');    
    console.log('loader false');
  } 
}

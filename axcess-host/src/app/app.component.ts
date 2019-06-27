import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  title = 'axcess-host';

  constructor(){
    
  }

  loadAdminMnager(){
    this.load("http://localhost/wk-admin-manager/axcess-fam-main.js",'content',"axcess-fam");
  }

  loadTax(){
    this.load("http://localhost/wk-tax/wk-tax.js",'content1',"axcess-tax");
  }

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

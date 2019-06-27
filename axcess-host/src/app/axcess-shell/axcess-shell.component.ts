import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-axcess-shell',
  templateUrl: './axcess-shell.component.html',
  styleUrls: ['./axcess-shell.component.scss']
})
export class AxcessShellComponent implements OnInit {
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((param)=>{
      console.log(JSON.stringify(param.id));
      switch (param.id) {
        case "tax":
          this.loadTax();
          break;
          case "am":
          this.loadAdminMnager();
            break;
        default:
          break;
      }
    });
    //let modId=this.activatedRoute.snapshot.params["id"];

    
  }
  title = 'axcess-host';

  constructor(private activatedRoute:ActivatedRoute){
    
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

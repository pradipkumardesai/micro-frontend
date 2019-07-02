import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterModule,Route } from "@angular/router";

import { AppComponent } from './app.component';
import { ClientManagerComponent } from './components/client-manager/client-manager.component';
import { StaffManagerComponent } from './components/staff-manager/staff-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientManagerComponent,
    StaffManagerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "staff", component: StaffManagerComponent },
      { path: "client", component: ClientManagerComponent }
    ])
  ],
  providers: [],
  bootstrap: [],
  entryComponents:[AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { 

  constructor(private injector: Injector) {
   
  }

  ngDoBootstrap() {
    console.log(`In the Angular7 ngDoBootstrap`);
    const appElement = createCustomElement(AppComponent, { injector: this.injector})
    if(!customElements.get('axcess-fam'))
    customElements.define('axcess-fam', appElement);   
  }

}

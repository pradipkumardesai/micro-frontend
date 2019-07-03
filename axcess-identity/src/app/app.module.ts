import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterModule, Route } from "@angular/router";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    console.log(`In axcess-identity ngDoBootstrap`);
    const appElement = createCustomElement(AppComponent, { injector: this.injector })
    if (!customElements.get('axcess-identity'))
      customElements.define('axcess-identity', appElement);
  }

}

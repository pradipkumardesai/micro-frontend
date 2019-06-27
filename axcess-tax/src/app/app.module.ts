import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponentTax } from './app.component';

@NgModule({
  declarations: [
    AppComponentTax
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AppComponentTax
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { 

  constructor(private injector: Injector) {
   
  }

  ngDoBootstrap() {
    console.log(`In Tax ngDoBootstrap`);
    const appElement = createCustomElement(AppComponentTax, { injector: this.injector})
    customElements.define('axcess-tax', appElement);   
  }

}

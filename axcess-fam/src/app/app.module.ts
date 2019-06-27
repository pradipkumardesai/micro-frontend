import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { 

  constructor(private injector: Injector) {
   
  }

  ngDoBootstrap() {
    console.log(`In the Angular7 ngDoBootstrap`);
    const appElement = createCustomElement(AppComponent, { injector: this.injector})
    customElements.define('axcess-fam', appElement);   
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AxcessShellComponent } from './axcess-shell/axcess-shell.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[
  { path:":id", component:AxcessShellComponent},
  {path:"**", redirectTo:"/am"}
];


@NgModule({
  declarations: [
    AppComponent,
    AxcessShellComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }


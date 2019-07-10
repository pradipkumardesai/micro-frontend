import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLinksComponent } from './components/app-links/app-links.component';

@NgModule({
  declarations: [AppLinksComponent],
  imports: [
    CommonModule
  ],
  exports:[AppLinksComponent]
})
export class AppLinksModule { }

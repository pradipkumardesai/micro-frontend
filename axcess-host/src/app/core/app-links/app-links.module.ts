import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLinksComponent } from './components/app-links/app-links.component';
import { LinkCardComponent } from './components/link-card/link-card.component';

@NgModule({
  declarations: [AppLinksComponent, LinkCardComponent],
  imports: [
    CommonModule
  ],
  exports: [AppLinksComponent, LinkCardComponent],
})
export class AppLinksModule { }

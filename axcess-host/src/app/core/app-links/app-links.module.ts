import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLinksComponent } from './components/app-links/app-links.component';
import { LinkCardComponent } from './components/link-card/link-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppLinksComponent, LinkCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AppLinksComponent, LinkCardComponent],
})
export class AppLinksModule { }

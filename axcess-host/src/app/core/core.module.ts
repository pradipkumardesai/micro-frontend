import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AxcessShellComponent } from './components/axcess-shell/axcess-shell.component';
import { ElementLoaderService } from './services/element-loader/element-loader.service';
import { AppLinksModule } from './app-links/app-links.module';

@NgModule({
  declarations: [AxcessShellComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppLinksModule
  ],
  providers: [ElementLoaderService],
  exports: [AxcessShellComponent]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AxcessShellComponent } from './components/axcess-shell/axcess-shell.component';
import { ElementLoaderService } from './services/element-loader/element-loader.service';

@NgModule({
  declarations: [AxcessShellComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[ElementLoaderService],
  exports:[AxcessShellComponent]
})
export class CoreModule { }

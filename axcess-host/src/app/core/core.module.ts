import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AxcessShellComponent } from './components/axcess-shell/axcess-shell.component';

@NgModule({
  declarations: [AxcessShellComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[AxcessShellComponent]
})
export class CoreModule { }

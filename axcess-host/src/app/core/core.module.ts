import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AxcessShellComponent } from './components/axcess-shell/axcess-shell.component';
import { ElementLoaderService } from './services/element-loader/element-loader.service';
import { AppLinksModule } from './app-links/app-links.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/core.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppLinksEffect } from './state/core.effects';


@NgModule({
  declarations: [AxcessShellComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('core',reducer),
    EffectsModule.forFeature([AppLinksEffect]),
    AppLinksModule
  ],
  providers: [ElementLoaderService],
  exports: [AxcessShellComponent]
})
export class CoreModule { }

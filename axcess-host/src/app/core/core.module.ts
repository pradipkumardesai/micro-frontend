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
import { AlertComponent } from './components/alert/alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicComponent } from './components/modal-basic/modal-basic.component';
import { ModalSlideComponent } from './components/modal-slide/modal-slide.component';


@NgModule({
  declarations: [AxcessShellComponent, AlertComponent, ModalBasicComponent, ModalSlideComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('core', reducer),
    EffectsModule.forFeature([AppLinksEffect]),
    NgbModule,
    AppLinksModule
  ],
  providers: [ElementLoaderService],
  exports: [AxcessShellComponent, AlertComponent, ModalBasicComponent, ModalSlideComponent]
})
export class CoreModule { }

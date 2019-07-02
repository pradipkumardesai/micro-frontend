import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UnauthorizedUserComponent } from './components/unauthorized-user/unauthorized-user.component';

@NgModule({
  declarations: [PageNotFoundComponent, UnauthorizedUserComponent],
  imports: [
    CommonModule
  ],
  exports:[PageNotFoundComponent, UnauthorizedUserComponent]
})
export class SharedModule { }

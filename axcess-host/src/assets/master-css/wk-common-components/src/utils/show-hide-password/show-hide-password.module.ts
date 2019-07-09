import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowHidePassword } from './show-hide-password.directive';


@NgModule({
  declarations: [
    ShowHidePassword
  ],
  imports: [
    CommonModule
  ],
  exports: [ShowHidePassword]
})
export class ShowAndHidePassword {}

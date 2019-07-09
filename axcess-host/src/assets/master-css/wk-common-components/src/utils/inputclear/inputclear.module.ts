import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputClearDirective } from './inputclear.directive';


@NgModule({
  declarations: [
    InputClearDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [InputClearDirective]
})
export class InputClear {}

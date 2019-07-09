import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormatterDirective } from './num2decimal.directive';


@NgModule({
    declarations: [
        CurrencyFormatterDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [CurrencyFormatterDirective]
})
export class Num2Decimal { }

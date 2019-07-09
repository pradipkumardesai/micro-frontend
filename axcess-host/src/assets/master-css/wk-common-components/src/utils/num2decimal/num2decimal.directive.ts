import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";
import { WKCurrencyPipe } from "../currency.pipe";

@Directive({ selector: "[currencyFormatter]" })
export class CurrencyFormatterDirective implements OnInit {

  private el: any;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: WKCurrencyPipe
  ) {
    this.el = this.elementRef.nativeElement;

  }

  ngOnInit() {
  }
  /* When the user focuses on the input , if the number is negative the paraathesis is removed and negative symbol is added */
  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    if (value) {
      let val = this.currencyPipe.parse(value); // opossite of transform

      if (val.indexOf('(') !== -1) {
        this.el.value = `-${val.replace('(', '').replace(')', '')}`;
      } else {
        this.el.value = val;
      }
    }
  }
  /* When the user focuses on the input , if the number is negative the negative sysmbol is removed and paraathesis are added */
  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    if (value) {
      let val = this.currencyPipe.transform(value);

      if (val.indexOf('-') !== -1) {
        this.el.value = `(${val.replace('-', '')})`;
      } else {
        this.el.value = val;
      }
    }
  }

}
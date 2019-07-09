import { Directive, ElementRef, HostListener, Input, AfterContentInit } from '@angular/core';

/* Creating a custom directive for show and hide password functionality */
@Directive({
    selector: '[showHidePassword]'
})
export class ShowHidePassword implements AfterContentInit {
    input: HTMLInputElement;
    icon: HTMLElement;

    @Input() showPassword: boolean;

    constructor(private el: ElementRef) {

    }

    ngAfterContentInit() {
        this.handleClick({
            target: {
                tagName: 'SPAN'
            }
        });
        this.input.addEventListener('keyup', this.hideInputIcons.bind(this));
        this.hideInputIcons({
            target: {
                value: this.input.value
            }
        });
    }

    @HostListener('click', ['$event'])
    handleClick(event) {
        // querying the input tag and i tag for setting type and class attributes
        this.input = this.el.nativeElement.querySelector('input');
        this.icon = this.el.nativeElement.querySelector('i');

        // checking for the span and i tags for directive click
        if (event.target.tagName === 'SPAN' || event.target.tagName === 'I') {
            // based on the value passed by the scope variable, attributes are set
            if (this.showPassword) {
                this.input.setAttribute('type', 'text');
                this.icon.classList.add('commonglyphs-ux-dependency');
                this.icon.classList.remove('commonglyphs-desktop');
            } else {
                this.input.setAttribute('type', 'password');
                this.icon.classList.remove('commonglyphs-ux-dependency');
                this.icon.classList.add('commonglyphs-desktop');
            }

            this.showPassword = !this.showPassword;
        }
    }

    hideInputIcons(e) {
        var val = e.target.value;
        if (!val) {
            this.icon.classList.add('d-none');
        } else {
            this.icon.classList.remove('d-none');
        }
    }
}
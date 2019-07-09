import { Directive, Output, ElementRef, HostListener, ChangeDetectorRef, EventEmitter } from '@angular/core';

@Directive({
    selector: '[inputClear]'
})
export class InputClearDirective {
    // declaring variable for reference to dom variable
    el: HTMLInputElement;
    // binding the parent function, to be called when clearicon is clicked
    @Output()
    clearInput: EventEmitter<any> = new EventEmitter<any>();

    constructor(private elRef: ElementRef, private cdf: ChangeDetectorRef) {
        this.el = this.elRef.nativeElement;
        // adding clearable class when directive is linked
        this.el.classList.add('clearable');
        // check the input element if the value has 'x' class in it
        setInterval(() => {
            if (this.el.value && !this.el.classList.contains('x')) {
                this.tog(true, 'x');
            }
        }, 200);
    }
    // clearing the input value and hiding 'x' class
    reset() {
        this.el.classList.remove('x');
        this.el.value = '';
        this.clearInput.emit();
    }
    // attaching dom input event and showing clear icon when user starts typing
    @HostListener('input', ['$event'])
    inputHandler(event) {
        this.tog(this.el.value, 'x');
    }
    // calling reset function when user click the clear icon
    @HostListener('click', ['$event'])
    clickHandler(event) {
        if ((event.target.offsetWidth - 24) < (event.clientX - event.target.getBoundingClientRect().left)
            && this.el.value) {
            this.reset();
        }
    }

    // showing the cursor pointer when user hovers over clear icon
    @HostListener('mousemove', ['$event'])
    mousemoveHandler(event: any) {
        this.tog((event.target.offsetWidth - 24) < (event.clientX - event.target.getBoundingClientRect().left)
            && this.el.value, 'onX');
    }
    // toggle function to add and remove class for clear icon
    tog(cond, cls) {
        cond ? this.el.classList.add(cls) : this.el.classList.remove(cls);
    }

}
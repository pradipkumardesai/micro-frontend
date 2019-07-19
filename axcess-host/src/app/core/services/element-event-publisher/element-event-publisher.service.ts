import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementEventPublisherService {

  constructor() { }

  element: HTMLElement;

  setElementRef(element: HTMLElement) {
    this.element = element;
  }

  sendEvent() { 
    this.element.setAttribute('eventfromshell','Hello from shell');
  }
}

import { Injectable } from '@angular/core';
import { ElementEventPublish } from '../../models/element-event-publish.model';

@Injectable({
  providedIn: 'root'
})
export class ElementEventPublisherService {

  constructor() { }

  element: HTMLElement;

  setElementRef(element: HTMLElement) {
    this.element = element;
  }

  sendEvent(elementEventPublish: ElementEventPublish) {
    this.element.setAttribute('eventfromshell', JSON.stringify(elementEventPublish));
  }
}

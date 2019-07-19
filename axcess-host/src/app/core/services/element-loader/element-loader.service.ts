import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/guards/authentication/authentication-service/auth.service';
import { ElementEventSubscriberService } from '../element-event-subscriber/element-event-subscriber.service';
import { ElementEventPublisherService } from '../element-event-publisher/element-event-publisher.service';

@Injectable({
  providedIn: 'root'
})
export class ElementLoaderService {

  constructor(
    private authService: AuthService, 
    private elementEventSubscriberService: ElementEventSubscriberService,
    private elementEventPublisherService:ElementEventPublisherService) { }

  load(url: string, dvName: string, elName: string): void {
    const content = document.getElementById(dvName);
    this.clearInnerHTML(content);
    const script = document.createElement('script');
    script.src = url;
    script.onload = this.onScriptLoaded;
    content.appendChild(script);
    const webAppElement:HTMLElement = document.createElement(elName)
    this.elementEventPublisherService.setElementRef(webAppElement);
    webAppElement.setAttribute('state', 'init');
    webAppElement.setAttribute('content', JSON.stringify({ authToken: this.authService.getToken() }));
    webAppElement.setAttribute('eventfromshell','Test');
    webAppElement.addEventListener("ShellEvent", this.onShelleEvent.bind(this));
    content.appendChild(webAppElement);
  }

  onShelleEvent(event) {
    this.elementEventSubscriberService.handleEvent(event);
  }

  onScriptLoaded() {
    eval('delete window.webpackJsonp');
  }

  clearInnerHTML(e: HTMLElement) {
    e.innerHTML = "";
  }
}

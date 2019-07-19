import { Injectable } from '@angular/core';
import { AlertService } from '../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class ElementEventSubscriberService {

  constructor(private alertService: AlertService) { }

  handleEvent(eventData) {
    let event = eventData.detail;
    switch (event.eventType) {
      case "alert":
        this.alertService.addAlert(event.eventData.message, event.eventData.alertType)
        break;
      case "notification":
        this.alertService.addAlert(event.eventData.message, event.eventData.alertType)
        break;
      case "modal":
        this.alertService.addAlert(event.eventData.message, event.eventData.alertType)
        break;
      default:
        break;
    }
  }

}

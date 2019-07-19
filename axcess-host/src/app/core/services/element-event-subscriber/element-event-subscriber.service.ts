import { Injectable } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { ModalBasicService } from '../modal-basic/modal-basic.service';

@Injectable({
  providedIn: 'root'
})
export class ElementEventSubscriberService {

  constructor(private alertService: AlertService,private modalBasicService: ModalBasicService) { }

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
        this.modalBasicService.open();
        break;
      default:
        break;
    }
  }

}

import { Injectable } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { ModalBasicService } from '../modal-basic/modal-basic.service';
import { NotificationService } from '../notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class ElementEventSubscriberService {

  constructor(private alertService: AlertService, private modalBasicService: ModalBasicService, private notificationService: NotificationService) { }

  handleEvent(eventData) {
    let event = eventData.detail;
    switch (event.eventType) {
      case "alert":
        this.alertService.addAlert({ senderAppName: event.eventData.senderAppName, message: event.eventData.message, type: event.eventData.alertType })
        break;
      case "notification":
        this.notificationService.push({ senderAppName: event.eventData.senderAppName, notificationText: event.eventData.notificationText })
        break;
      case "modal":
        this.modalBasicService.open({ modalTitle: event.eventData.modalTitle, modalBody: event.eventData.modalBody });
        break;
      default:
        break;
    }
  }

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalBasic } from '../../models/modal-basic.model';
import { ElementEventPublisherService } from '../element-event-publisher/element-event-publisher.service';

@Injectable({
  providedIn: 'root'
})
export class ModalBasicService {

  modalStatus: Subject<boolean> = new Subject<boolean>();
  modalData: ModalBasic = new ModalBasic();

  constructor(private elementEventPublisherService: ElementEventPublisherService) { }

  open(modalData: ModalBasic) {
    this.modalData = modalData;
    this.modalStatus.next(true);
  }

  close(result:string) {
    this.elementEventPublisherService.sendEvent({ eventName: "modalClosed", eventData: result });
    this.modalStatus.next(false);
  }

}

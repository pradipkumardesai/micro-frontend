import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalBasicService {

  modalStatus:Subject<boolean>=new Subject<boolean>();

  constructor(private modalService: NgbModal) { 


  }

  open(){
   
    this.modalStatus.next(true);
  }

  close(){
   
    this.modalStatus.next(false);
  }

}

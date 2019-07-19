import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicService } from '../../services/modal-basic/modal-basic.service';

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.scss']
})
export class ModalBasicComponent implements OnInit {

  @ViewChild("content") modalContent: TemplateRef<any>;

  ngOnInit(): void {
    this.modalBasicService.modalStatus.subscribe(modalStatus => {
      if (modalStatus)
        this.open(this.modalContent)
    });
  }

  closeResult: string;
  modalInstance: any;
  // instantiating the ngmodal service in constructor
  constructor(private modalService: NgbModal, private modalBasicService: ModalBasicService) {
    NgbModalRef.prototype['ca'] = NgbModalRef.prototype.close;
    NgbModalRef.prototype.close = function (reason: string) {
      let ca = document.querySelector('.custom-modal');
      if (ca) {
        ca.classList.remove('fadeInRight');
        ca.classList.add('fadeOutRight');
        setTimeout(() => {
          this['ca'](reason);
        }, 200);
      } else {
        this['ca'](reason);
      }
    };
  }

  openWindowCustomClass(contents) {
    this.modalInstance = this.modalService.open(contents, {
      windowClass: 'custom-modal fadeInRight animated',
      backdropClass: 'custom-modal-backdrop',
    }).result.then((result) => {
      this.closeResult = `Closed with:`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }
  open(content) {
    // call open function modal instance to open the modal with given properties
    this.modalService.open(content, { centered: true }).result.then((result) => {
      // this function is called when close function of modal instance is called
      this.modalBasicService.close();
      this.closeResult = `Closed with:`;
    }, (reason) => {
      this.modalBasicService.close();
      // this function is called when dismiss function of modal instance is called
      this.closeResult = `Dismissed`;
    });
  }

  private getDismissReason(reason: any): string {
    // logging the reason of how modal is closed by ESC key or BackDrop is clicked or any other reason
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with:`;
    }
  }

}

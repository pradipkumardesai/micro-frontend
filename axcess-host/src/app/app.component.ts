import { Component, OnInit } from '@angular/core';
import { ModalBasicService } from './core/services/modal-basic/modal-basic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private ser: ModalBasicService) { }
  
}

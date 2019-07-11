import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuPanelService {

  isPanelOpen: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.hidePanel();
  }

  hidePanel() {
    this.isPanelOpen.next(false);
  }

  showPanel() {
    this.isPanelOpen.next(true);
  }

  setFlag(flag: boolean) {
    this.isPanelOpen.next(flag);
  }
}

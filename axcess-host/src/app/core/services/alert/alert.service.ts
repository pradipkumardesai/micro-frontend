import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from '../../models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alerts: Array<Alert> = Array<Alert>();

  constructor() {
  }

  addAlert(alert:Alert) {
    this.alerts.push(alert)
  }

  removeAlert(alert:Alert){
    this.alerts.splice(this.alerts.indexOf(alert),1);
  }
}

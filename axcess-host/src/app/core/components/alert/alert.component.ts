import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert/alert.service';
import { Alert, AlertType } from '../../models/alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  alerts: Array<Alert> = [];
  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alerts = this.alertService.alerts;
  }

  closeAlert(alert:Alert) { 
    this.alertService.removeAlert(alert);
  }
}

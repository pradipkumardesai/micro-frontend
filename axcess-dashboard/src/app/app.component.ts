import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponentTax implements OnInit, OnChanges {

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {

    if (changes.eventfromshell) {
      if (!changes.eventfromshell.firstChange)
        this.evenFromShellData = changes.eventfromshell.currentValue;
    }

  }
  ngOnInit(): void {

  }
  title = 'app-dashboard';

  evenFromShellData: any = null;

  @Input()
  content: any;

  @Output()
  ShellEvent: EventEmitter<any> = new EventEmitter<any>();//EventFromShell

  @Input()
  eventfromshell: any;

  sendMess() {
    this.ShellEvent.emit({
      eventType: "alert",
      eventData: {
        senderAppName: "Dashboard",
        alertType: "success",
        message: "Hello from dashboard app"
      }
    });
  }

  showModal() {
    this.ShellEvent.emit({
      eventType: "modal",
      eventData: {
        modalTitle: "Dashboard",
        modalBody: "Hello from dashboard app"
      }
    });
  }

  sendNotification() {
    this.ShellEvent.emit({
      eventType: "notification",
      eventData: {
        senderAppName: "Dashboard",
        notificationText: "Hello from dashboard app"
      }
    });
  }

}

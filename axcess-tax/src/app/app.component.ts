import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root-tax',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponentTax {
 
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
   
  }
  ngOnInit(): void {

  }
  title = 'app-tax';

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
        alertType: "success",
        message: "Hello from dashboard app"
      }
    });
  }

  showModal() {
    this.ShellEvent.emit({
      eventType: "modal",
      eventData: {
        alertType: "success",
        message: "Hello from dashboard app"
      }
    });
  }

  sendNotification(){
    this.ShellEvent.emit({
      eventType: "notification",
      eventData: {
        senderAppName: "Tax",
        notificationText: "Hello from dashboard app"
      }
    });
  }
}

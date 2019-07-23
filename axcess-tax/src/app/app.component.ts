import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root-tax',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponentTax {
 
  ngOnChanges(changes: SimpleChanges): void {

    if (changes.eventfromshell) {
      if (!changes.eventfromshell.firstChange)
        this.evenFromShellData = changes.eventfromshell.currentValue;
    }

  }
  ngOnInit(): void {

  }
  title = 'app-Tax';

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
        senderAppName: "Tax",
        alertType: "success",
        message: "Hello from Tax"
      }
    });
  }

  showModal() {
    this.ShellEvent.emit({
      eventType: "modal",
      eventData: {
        modalTitle: "Tax",
        modalBody: "Hello from Tax"
      }
    });
  }

  sendNotification() {
    this.ShellEvent.emit({
      eventType: "notification",
      eventData: {
        senderAppName: "Tax",
        notificationText: "Hello from Tax"
      }
    });
  }
}

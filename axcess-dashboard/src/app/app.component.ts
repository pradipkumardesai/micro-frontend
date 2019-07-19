import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponentTax implements OnInit, OnChanges {

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("ngOnChanges" + JSON.stringify(changes));
  }
  ngOnInit(): void {

  }
  title = 'app-dashboard';

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

}

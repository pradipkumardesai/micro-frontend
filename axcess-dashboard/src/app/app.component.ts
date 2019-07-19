import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponentTax implements OnInit {
  ngOnInit(): void {

  }
  title = 'app-dashboard';

  @Input()
  content: any;

  @Output()
  ShellEvent: EventEmitter<any> = new EventEmitter<any>();

  sendMess() {
    this.ShellEvent.emit({
      eventType: "alert",
      eventData: {
        alertType: "success",
        message: "Hello from dashboard app"
      }
    });
  }

}

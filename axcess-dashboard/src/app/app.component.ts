import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponentTax implements OnInit {
  ngOnInit(): void {
    console.log("shellevent ...")
    this.onShellevent.emit("hello");
  }
  title = 'app-dashboard';

  @Input()
  content:any;

  @Output() 
  onShellevent: EventEmitter<string> = new EventEmitter<string>();

  sendMess(){
    console.log("sendMess ...")
    this.onShellevent.emit("hello");
  }
  
}

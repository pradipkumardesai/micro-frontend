import { Injectable } from '@angular/core';
import { Notification } from "../../models/notification.model";
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  unreadNotificationCount:  BehaviorSubject<number> = new BehaviorSubject<number>(0);
  notifications: Array<Notification> = new Array<Notification>();

  constructor() { 
    this.unreadNotificationCount.subscribe((data:Number)=>{

    })
  }

  push(notification: Notification) {
    debugger;
    if (notification) {
      this.notifications.push(notification)
      this.unreadNotificationCount.next(this.unreadNotificationCount.value+1);
    }
  }

  clearCount(){
    this.unreadNotificationCount.next(0);
  }

  getAllNotifications(){
    return this.notifications;
  }
}

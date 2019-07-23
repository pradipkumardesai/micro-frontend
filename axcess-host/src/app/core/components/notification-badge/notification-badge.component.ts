import { Component, OnInit } from '@angular/core';
import { NotificationService } from "../../services/notification/notification.service";
import { Notification } from "../../models/notification.model";

@Component({
  selector: 'app-notification-badge',
  templateUrl: './notification-badge.component.html',
  styleUrls: ['./notification-badge.component.scss']
})
export class NotificationBadgeComponent implements OnInit {

  unreadNotificationCount: number = 0;
  notifications: Array<Notification> = new Array<Notification>();

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.unreadNotificationCount.subscribe(data => { this.unreadNotificationCount = data });
    this.notifications = this.notificationService.getAllNotifications();
  }


  showNotifications() {
    this.notificationService.clearCount();
  }

}

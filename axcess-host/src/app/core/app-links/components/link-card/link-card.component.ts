import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MenuPanelService } from 'src/app/core/services/menu-panel/menu-panel.service';


@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss']
})
export class LinkCardComponent implements OnInit {

  @Input()
  linkGroup: any;

  constructor(private router: Router, private menuPanelService: MenuPanelService) { }

  ngOnInit() {
  }

  linkClicked(ldDescription: string) {
    switch (ldDescription) {
      case "Staff Manager":
      case "Client Manager":
        this.router.navigate(['/', 'am']);
        break;
      default:
        this.router.navigate(['/', 'tax']);
        break;
    }
    this.menuPanelService.hidePanel();
  }

}

import { Component, OnInit } from '@angular/core';
import { AppLinkService } from '../../services/app-link/app-link.service';

@Component({
  selector: 'app-app-links',
  templateUrl: './app-links.component.html',
  styleUrls: ['./app-links.component.scss']
})
export class AppLinksComponent implements OnInit {

  links:any;

  constructor(private appLinkService:AppLinkService) { }

  ngOnInit() {
    this.appLinkService.getLinks().subscribe(links => {
      this.links = links;
      console.log(JSON.stringify(this.links));
    });
  }

}

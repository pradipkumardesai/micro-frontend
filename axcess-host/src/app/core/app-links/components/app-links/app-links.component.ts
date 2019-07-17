import { Component, OnInit } from '@angular/core';

import { AppLinkService } from '../../services/app-link/app-link.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import * as fromCoreRedurec from "src/app/core/state/core.reducer";
import * as CoreActions from "src/app/core/state/core.actions";

@Component({
  selector: 'app-app-links',
  templateUrl: './app-links.component.html',
  styleUrls: ['./app-links.component.scss']
})
export class AppLinksComponent implements OnInit {

  links: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // this.appLinkService.getLinks().subscribe(links => {
    //   this.links = links;
    // });

    this.store.pipe(select(fromCoreRedurec.getAppLinks)).subscribe(appLinks => {
      console.log("AppLinksComponent > ngOnInit > subscribe");
      this.links = appLinks;
    });

    this.store.dispatch(new CoreActions.LoadAppLinks());
  }

}

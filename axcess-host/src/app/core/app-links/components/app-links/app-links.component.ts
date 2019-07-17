import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from 'src/app/state/app.state';
import * as fromCoreRedurec from "src/app/core/state/core.reducer";
import * as CoreActions from "src/app/core/state/core.actions";
import { LinkGroup } from '../../models/link-group.model';

@Component({
  selector: 'app-app-links',
  templateUrl: './app-links.component.html',
  styleUrls: ['./app-links.component.scss']
})
export class AppLinksComponent implements OnInit {

  links: Array<LinkGroup>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.pipe(select(fromCoreRedurec.getAppLinks)).subscribe(appLinks => {
      this.links = appLinks;
    });

    this.store.dispatch(new CoreActions.LoadAppLinks());
  }

}

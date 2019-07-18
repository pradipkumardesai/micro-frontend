import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppsConfigService } from '../../services/apps-config/apps-config.service';
import { AuthService } from 'src/app/guards/authentication/authentication-service/auth.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import * as fromCoreRedurec from "src/app/core/state/core.reducer";
import * as CoreActions from "src/app/core/state/core.actions";

@Component({
  selector: 'app-axcess-shell',
  templateUrl: './axcess-shell.component.html',
  styleUrls: ['./axcess-shell.component.scss']
})
export class AxcessShellComponent implements OnInit {
  title = 'axcess-host';
  isMenuPanelVisible: boolean = false;

  constructor(private store: Store<AppState>, private route: Router, private authService: AuthService, private activatedRoute: ActivatedRoute, private appsConfigService: AppsConfigService) { }

  ngOnInit(): void {

    this.store.pipe(select(fromCoreRedurec.getMenuPanelFlag)).subscribe(isMenuPanelOpen => {
      this.isMenuPanelVisible = isMenuPanelOpen;
    });

    this.activatedRoute.params.subscribe((param) => {
      this.appsConfigService.loadModule(param.id);
    });

  }

  doLogout() {
    this.authService.logout();
  }

  toggleMenuPanel() {
    this.store.dispatch(new CoreActions.ToggleMenuPanelFlag(!this.isMenuPanelVisible));
  }

  goToDashboard() {
    this.store.dispatch(new CoreActions.ToggleMenuPanelFlag(false));
    this.route.navigate(["/", "dashboard"]);
  }

}

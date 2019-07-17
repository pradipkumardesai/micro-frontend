import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppsConfigService } from '../../services/apps-config/apps-config.service';
import { AuthService } from 'src/app/guards/authentication/authentication-service/auth.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

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

    this.store.pipe(select("core")).subscribe(data => {
      if (data)
        this.isMenuPanelVisible = data.isMenuPanelOpen;
    });

    this.activatedRoute.params.subscribe((param) => {
      this.appsConfigService.loadModule(param.id);
    });

  }

  doLogout() {
    this.authService.logout();
  }

  toggleMenuPanel() {
    this.store.dispatch({ type: 'IS_MENU_PANEL_OPEN', payload: !this.isMenuPanelVisible });
  }

  goToDashboard() {
    this.route.navigate(["/", "dashboard"]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppsConfigService } from '../../services/apps-config/apps-config.service';
import { AuthService } from 'src/app/guards/authentication/authentication-service/auth.service';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-axcess-shell',
  templateUrl: './axcess-shell.component.html',
  styleUrls: ['./axcess-shell.component.scss']
})
export class AxcessShellComponent implements OnInit {
  title = 'axcess-host';
  isMenuPanelVisible: boolean = false;

  constructor(private store: Store<any>, private route: Router, private authService: AuthService, private activatedRoute: ActivatedRoute, private appsConfigService: AppsConfigService) { }

  ngOnInit(): void {
   
    this.store.pipe(select("core")).subscribe(data => {
      if (data)
        this.isMenuPanelVisible = data.showName;
    });

    this.activatedRoute.params.subscribe((param) => {
      this.appsConfigService.loadModule(param.id);
    });

  }

  doLogout() {
    this.authService.logout();
  }

  toggleMenuPanel() {
    this.store.dispatch({ type: 'TOGGLE_SHOW_NAME', payload: !this.isMenuPanelVisible });
  }

  goToDashboard() {
    this.route.navigate(["/", "dashboard"]);
  }

}

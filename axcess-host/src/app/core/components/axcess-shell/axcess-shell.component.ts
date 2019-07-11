import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ElementLoaderService } from '../../services/element-loader/element-loader.service';
import { AppsConfigService } from '../../services/apps-config/apps-config.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/guards/authentication/authentication-service/auth.service';
import { MenuPanelService } from '../../services/menu-panel/menu-panel.service';

@Component({
  selector: 'app-axcess-shell',
  templateUrl: './axcess-shell.component.html',
  styleUrls: ['./axcess-shell.component.scss']
})
export class AxcessShellComponent implements OnInit {
  title = 'axcess-host';
  isMenuPanelVisible: boolean = false;

  constructor(private route: Router, private menuPanelService: MenuPanelService, private authService: AuthService, private cookieService: CookieService, private activatedRoute: ActivatedRoute, private elementLoaderService: ElementLoaderService, private appsConfigService: AppsConfigService) { }

  ngOnInit(): void {
    this.menuPanelService.isPanelOpen.subscribe(isOpen => {
      this.isMenuPanelVisible = isOpen;
    });
    this.activatedRoute.params.subscribe((param) => {
      debugger;
      this.appsConfigService.loadModule(param.id);
    });
  }

  doLogout() {
    this.authService.logout();
  }

  toggleMenuPanel() {
    this.menuPanelService.setFlag(!this.isMenuPanelVisible);
  }

  goToDashboard() {
    this.route.navigate(["/", "dashboard"]);
  }

}

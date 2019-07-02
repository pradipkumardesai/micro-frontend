import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementLoaderService } from '../../services/element-loader/element-loader.service';
import { AppsConfigService } from '../../services/apps-config/apps-config.service';


@Component({
  selector: 'app-axcess-shell',
  templateUrl: './axcess-shell.component.html',
  styleUrls: ['./axcess-shell.component.scss']
})
export class AxcessShellComponent implements OnInit {
  title = 'axcess-host';

  constructor(private activatedRoute: ActivatedRoute, private elementLoaderService: ElementLoaderService, private appsConfigService: AppsConfigService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.appsConfigService.loadModule(param.id);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementLoaderService } from '../../services/element-loader/element-loader.service';

@Component({
  selector: 'app-axcess-shell',
  templateUrl: './axcess-shell.component.html',
  styleUrls: ['./axcess-shell.component.scss']
})
export class AxcessShellComponent implements OnInit {
  title = 'axcess-host';

  constructor(private activatedRoute: ActivatedRoute, private elementLoaderService: ElementLoaderService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.loadElement(param.id);
    });
  }

  loadElement(paramId: string) {
    switch (paramId) {
      case "tax":
        this.loadTax();
        break;
      case "am":
        this.loadAdminMnager();
        break;
      default:
        console.log("Invalid module");
        break;
    }
  }

  loadAdminMnager() {
    this.elementLoaderService.load("http://localhost/wk-admin-manager/axcess-fam.all.js", 'content', "axcess-fam");
  }

  loadTax() {
    this.elementLoaderService.load("http://localhost/wk-tax/axcess-tax.all.js", 'content1', "axcess-tax");
  }

}

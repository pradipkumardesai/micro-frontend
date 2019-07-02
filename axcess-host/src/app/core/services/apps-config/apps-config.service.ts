import { Injectable } from '@angular/core';
import  modules from "../../../../assets/apps-configs.json";
import { ElementLoaderService } from '../element-loader/element-loader.service.js';
import { Module } from '../../models/module.model.js';

@Injectable({
  providedIn: 'root'
})
export class AppsConfigService {

  constructor(private elementLoaderService: ElementLoaderService) { }

  loadModule(moduleName: string) {
    let moduleInfo: Module = this.getModuleByName(moduleName);
    if (moduleInfo !== null)
      this.elementLoaderService.load(moduleInfo.url, "content", moduleInfo.elementName);
  }

  getModuleByName(moduleName: string): Module {
    let moduleInfo: Module = null;
    modules.forEach(module => {
      if (module.moduleName === moduleName) {
        moduleInfo = new Module();
        moduleInfo.elementName = module.elementName;
        moduleInfo.moduleName = module.moduleName;
        moduleInfo.url = module.url;
      }
    });
    return moduleInfo;
  }
}

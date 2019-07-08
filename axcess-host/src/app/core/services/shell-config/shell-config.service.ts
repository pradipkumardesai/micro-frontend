import { Injectable } from '@angular/core';
import shellConfig from "../../../../assets/shell.config.json";

@Injectable({
  providedIn: 'root'
})
export class ShellConfigService {

  constructor() { }

  getAuthServerURL(): string {
    return shellConfig["authServerURL"];
  }

  getAuthCookieName(): string {
    return shellConfig["authCookieName"];
  }

  getAuthTokQuryPrmName(): string {
    return shellConfig["authTokQuryPrmName"];
  }

}

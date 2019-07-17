import { Action } from '@ngrx/store';
import { LinkGroup } from '../app-links/models/link-group.model';


export enum CoreActionTypes {
    ToggleMenuPanelFlag = "IS_MENU_PANEL_OPEN",
    LoadAppLinks = "LOAD_APP_LINKS",
    LoadAppLinksSuccess = "LOAD_APP_LINKS_SUCCESS"
}

export class ToggleMenuPanelFlag implements Action {
    readonly type = CoreActionTypes.ToggleMenuPanelFlag;
    constructor(public payload: boolean) {}
}

export class LoadAppLinks implements Action {
    readonly type = CoreActionTypes.LoadAppLinks;
}

export class LoadAppLinksSuccess implements Action {
    readonly type = CoreActionTypes.LoadAppLinksSuccess;
    constructor(public payload: Array<LinkGroup>) {
    }
}

export type CoreActions = ToggleMenuPanelFlag | LoadAppLinks | LoadAppLinksSuccess;
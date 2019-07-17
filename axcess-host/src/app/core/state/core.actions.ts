import { Action } from '@ngrx/store';


export enum CoreActionTypes {
    ToggleMenuPanelFlag = "IS_MENU_PANEL_OPEN",
    LoadAppLinks = "LOAD_APP_LINKS",
    LoadAppLinksSuccess = "LOAD_APP_LINKS_SUCCESS"
}

export class ToggleMenuPanelFlag implements Action {

    readonly type = CoreActionTypes.ToggleMenuPanelFlag;

    constructor(public payload: boolean) {

    }
}

export class LoadAppLinks implements Action {

    readonly type = CoreActionTypes.LoadAppLinks;
   
}

export class LoadAppLinksSuccess implements Action {

    readonly type = CoreActionTypes.LoadAppLinksSuccess;
    constructor(public payload: any) {
            console.log("LoadAppLinksSuccess > constructor"+ JSON.stringify(payload));
    }
}

export type CoreActions = ToggleMenuPanelFlag | LoadAppLinks | LoadAppLinksSuccess;
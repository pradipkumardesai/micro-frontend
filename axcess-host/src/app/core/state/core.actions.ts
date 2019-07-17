import { Action } from '@ngrx/store';


export enum CoreActionTypes {
    ToggleMenuPanelFlag = "IS_MENU_PANEL_OPEN"
}

export class ToggleMenuPanelFlag implements Action {

    readonly type = CoreActionTypes.ToggleMenuPanelFlag;

    constructor(public payload: boolean) {

    }
}

export type CoreActions = ToggleMenuPanelFlag;
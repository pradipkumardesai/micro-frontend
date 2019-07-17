import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoreActions, CoreActionTypes } from './core.actions';
import { LinkGroup } from '../app-links/models/link-group.model';

export function reducer(state: CoreState = initialCoreState, action: CoreActions): CoreState {

    switch (action.type) {
        case CoreActionTypes.ToggleMenuPanelFlag:
            return {
                ...state,
                isMenuPanelOpen: action.payload
            }
            break;
        case CoreActionTypes.LoadAppLinksSuccess:
            return {
                ...state,
                appLinks: action.payload
            
            }
        default:
            return state;
    }
}

export interface CoreState {
    isMenuPanelOpen: boolean;
    appLinks: LinkGroup[];
}

const initialCoreState: CoreState = {
    isMenuPanelOpen: false,
    appLinks: []
}

const getCoreState = createFeatureSelector<CoreState>("core");

export const getMenuPanelFlag = createSelector(getCoreState, state => state.isMenuPanelOpen);


export const getAppLinks = createSelector(getCoreState, state => state.appLinks);
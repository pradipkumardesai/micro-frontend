import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoreActions, CoreActionTypes } from './core.actions';

export function reducer(state: CoreState = initialCoreState, action: CoreActions): CoreState {

    switch (action.type) {
        case CoreActionTypes.ToggleMenuPanelFlag:
            return {
                ...state,
                isMenuPanelOpen: action.payload
            }
        default:
            return state;
    }
}

export interface CoreState {
    isMenuPanelOpen: boolean;
}

const initialCoreState: CoreState = {
    isMenuPanelOpen: false
}

const getCoreState = createFeatureSelector<CoreState>("core");

export const getMenuPanelFlag = createSelector(getCoreState, state => state.isMenuPanelOpen);
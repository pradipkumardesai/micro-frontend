export function reducer(state: CoreState = initialCoreState, action): CoreState {

    switch (action.type) {
        case "IS_MENU_PANEL_OPEN":
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
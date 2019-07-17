export function reducer(state, action) {
    
    switch (action.type) {
        case "TOGGLE_SHOW_NAME":
            return {
                ...state,
                showName: action.payload
            }

        default:
            return state;
    }
}
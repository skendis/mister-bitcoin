import types from "../types";

const initState = {
    contacts: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case types.FETCH_CONTACTS:
            return { ...state, contacts: action.data };
        default:
            return state;
    }
}

export default rootReducer;
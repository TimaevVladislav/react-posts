import {COLOR_ALERT, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "./types"

const initialState = {
    loading: false,
    alert: null,
    color: ""
}


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true }
        case HIDE_LOADER:
            return { ...state, loading: false }
        case SHOW_ALERT:
            return { ...state, alert: action.payload }
        case COLOR_ALERT:
            return { ...state, color: action.payload }
        case HIDE_ALERT:
            return { ...state, alert: null, color: "" }

        default: return state
    }
}
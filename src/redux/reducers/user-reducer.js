import { Types } from '../constants/user-types';

const initialState = {
    isLoggedIn: false,
    inInitialState: false,
    token: null,
    error: null
}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case Types.LOG_IN:
            return { ...state, isLoggedIn: true, token: action.payload.token };
        case Types.LOG_OUT:
            return { ...initialState, inInitialState: false };
        case Types.SETTING_INITIAL_STATE:
            return { ...state, inInitialState: action.payload };
        case Types.ERROR:
            return { ...state, error: action.payload };
        default:
            return { ...state };
    }
}
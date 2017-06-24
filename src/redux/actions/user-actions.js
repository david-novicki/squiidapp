import { Types } from '../constants/user-types';
import API from '../api/user';
import userService from '../../services/user';

export function logIn(token) {
    return async function (dispatch) {
        try {
            await API.logIn(token);
            dispatch({ type: Types.LOG_IN, payload: { token } })
        } catch (error) {
            console.log('error logging in', error);
            dispatch({ type: Types.ERROR, payload: 'Error when logging in' });
        }
    }
}
export function logOff() {
    return async function (dispatch) {
        try {
            await API.logOff();
            dispatch({ type: Types.LOG_OUT })
        } catch (error) {
            console.log('error logging off', error);
            dispatch({ type: Types.ERROR, payload: 'Error while logging off' });
        }
    }
}
export function setInitialState() {
    return async function (dispatch) {
        try {
            let token = await userService.getToken();
            if (token && token !== '' && token !== 'undefined')
                dispatch({ type: Types.LOG_IN, payload: { token: token } });
            else
                dispatch({ type: Types.LOG_OUT });
            dispatch({ type: Types.SETTING_INITIAL_STATE, payload: true })
        } catch (error) {
            console.log(error);
            dispatch({ type: Types.ERROR, payload: 'Error authenticating' });
        }
    }
}
export function setError(message) {
    return { type: Types.ERROR, payload: message };
}
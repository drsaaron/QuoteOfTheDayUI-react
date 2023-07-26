/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

import ActionTypes from '../actions/ActionTypes';

const initialState = {
    user: {},
    token: null,
    errorMessage: null,
    tokenMonitorInterval: -1
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.USER_LOGGED_IN:
            return {
                ...state,
                user: action.user,
                token: action.token,
                errorMessage: null
            };

        case ActionTypes.USER_LOGGED_OUT:
            return {
                ...state,
                token: null
            };

        case ActionTypes.USER_LOGIN_FAILURE:
            return {
                ...state,
                errorMessage: action.errorMessage
            };

        case ActionTypes.TOKEN_MONITOR_INTERVAL_ID_UPDATE:
            return {
                ...state,
                tokenMonitorInterval: action.intervalId
            };
}
};

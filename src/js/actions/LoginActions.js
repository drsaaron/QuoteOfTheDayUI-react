/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

import ActionTypes from './ActionTypes';
import request from 'superagent';

const AUTHENTICATE_URL_ROOT = "/authenticate";

export function userLoginFetch(user, history) {
    return dispatch => {
        request.post(AUTHENTICATE_URL_ROOT)
                .send(user)
                .set('Content-Type', 'application/json')
                .then(res => {
                    return JSON.parse(res.text);
                })
                .then(data => {
                    if (data.message) {
                        //login error
                    } else {
			console.log("JWT token = " + data.jwttoken);
                        dispatch({
                            type: ActionTypes.USER_LOGGED_IN,
                            token: data.jwttoken,
                            user: data.user
                        });
                    }
                    return data;
                })
                .then(data => history("/"))
                .catch(exception => {
                    console.error(exception);
                    console.error("exception fields: " + Object.keys(exception));
                    console.error("response: " + Object.keys(exception.response));
                    console.error("body: " + Object.keys(exception.response.body));
                    console.error("message: " + exception.response.body.message);
                    console.error("unauthorized: " + exception.response.unauthorized);
                });
    };
}

export function loginForm(navigate) {
    navigate("/login");
}

export function updateTokenMonitorInterval(intervalId) {
    return dispatch => {
        dispatch({type: ActionTypes.TOKEN_MONITOR_INTERVAL_ID_UPDATE, intervalId });
    };
}

export function logout() {
    return dispatch => {
        dispatch({type: ActionTypes.USER_LOGGED_OUT});
    };
}

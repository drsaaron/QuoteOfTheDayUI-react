import ActionTypes from './ActionTypes';

export function addApplicationVersion(version) {
    return dispatch => {
	dispatch({
	    type: ActionTypes.APPLICATION_VERSION_ADDED,
	    appVersion: version
	});
    };
}

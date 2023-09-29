import ActionTypes from '../actions/ActionTypes';

const initialState = {
    appVersion: "0"
};

export default function applicationDataReducer(state = initialState, action) {
    switch (action.type) {
    case ActionTypes.APPLICATION_VERSION_ADDED:
	console.log("reducer got version " + action.appVersion);
	return {
	    ...state,
	    appVersion: action.appVersion
	};
	
    default:
	return state;
    }
};

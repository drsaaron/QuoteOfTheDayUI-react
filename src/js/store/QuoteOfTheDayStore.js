/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import ActionTypes from '../actions/ActionTypes';
import SourceCodeService from '../services/SourceCodeService';
import QuotesForSourceCodeService from '../services/QuotesForSourceCodeService';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { retrieveSourceCodes } from '../actions/SourceCodeActions';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history);

// create the store
const store = createStore(rootReducer, {}, applyMiddleware(SourceCodeService, QuotesForSourceCodeService, historyMiddleware));

export default store;
    
// retrieve source codes to kick off the app.  Is this the right way to go?
store.dispatch(retrieveSourceCodes());
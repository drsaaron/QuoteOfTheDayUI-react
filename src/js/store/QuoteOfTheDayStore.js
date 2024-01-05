/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { createStore, applyMiddleware } from 'redux';
import createRootReducer from '../reducers/rootReducer';
import SourceCodeService from '../services/SourceCodeService';
import QuotesForSourceCodeService from '../services/QuotesForSourceCodeService';
import QuoteService from '../services/QuoteService';
import QuoteOfTheDayService from '../services/QuoteOfTheDayService';
import { createBrowserHistory } from 'history';
import { thunk } from 'redux-thunk';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createBrowserHistory();

// create the store
const store = createStore(createRootReducer(history), {}, applyMiddleware(SourceCodeService, QuotesForSourceCodeService, QuoteService, QuoteOfTheDayService, thunk));

export default store;
    


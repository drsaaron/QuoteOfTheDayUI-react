/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { combineReducers } from 'redux';
import SourceCodeReducer from './SourceCodeReducer';
import QuotesForSourceCodeReducer from './QuotesForSourceCodeReducer';
import QuoteDetailsReducer from './QuoteDetailsReducer';
import QuoteOfTheDayReducer from './QuoteOfTheDayReducer';
import EditQuoteReducer from './EditQuoteReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers( {
    sourceCodes: SourceCodeReducer,
    quotesForSourceCode: QuotesForSourceCodeReducer,
    quoteDetails: QuoteDetailsReducer,
    quoteOfTheDay: QuoteOfTheDayReducer,
    editQuote: EditQuoteReducer,
    router: routerReducer
});

export default rootReducer;
    

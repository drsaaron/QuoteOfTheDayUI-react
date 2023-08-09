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
import LoginReducer from './LoginReducer';

const applicationStore = (history) => combineReducers( {
    sourceCodes: SourceCodeReducer,
    quotesForSourceCode: QuotesForSourceCodeReducer,
    quoteDetails: QuoteDetailsReducer,
    quoteOfTheDay: QuoteOfTheDayReducer,
    editQuote: EditQuoteReducer,
    login: LoginReducer
});

export default applicationStore;

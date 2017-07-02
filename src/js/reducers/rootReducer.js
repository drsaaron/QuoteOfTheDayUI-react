/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { combineReducers } from 'redux';
import SourceCodeReducer from './SourceCodeReducer';
import QuotesForSourceCodeReducer from './QuotesForSourceCodeReducer';

const rootReducer = combineReducers( {
    sourceCodes: SourceCodeReducer,
    quotesForSourceCode: QuotesForSourceCodeReducer
});

export default rootReducer;
    

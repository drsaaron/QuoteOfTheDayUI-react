/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { combineReducers } from 'redux';
import SourceCodeReducer from './SourceCodeReducer';

const rootReducer = combineReducers( {
    sourceCodes: SourceCodeReducer
});

export default rootReducer;
    

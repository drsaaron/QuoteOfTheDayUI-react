/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import ActionTypes from '../actions/ActionTypes';
import SourceCodeService from '../services/SourceCodeService';

const store = createStore(rootReducer, {}, applyMiddleware(SourceCodeService));

export default store;
    
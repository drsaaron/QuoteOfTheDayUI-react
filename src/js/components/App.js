/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import Main from './Main';
import { Provider } from 'react-redux';
import store from '../store/QuoteOfTheDayStore';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Provider store={store}>
                    <Main />
                </Provider>
                );
    }
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import Main from './Main';
import QuoteDetails from './QuoteDetails';
import { Provider } from 'react-redux';
import store, { history } from '../store/QuoteOfTheDayStore';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import EditQuote from './EditQuote';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <Switch>
                            <Route exact path="/" component={Main} />
                            <Route path="/quoteDetails/:quoteNumber" component={QuoteDetails} />
                            <Route path="/editQuote/:quoteNumber" component={EditQuote} />
                        </Switch>
                    </ConnectedRouter>
                </Provider>
                );
    }
}

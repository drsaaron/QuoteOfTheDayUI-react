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
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import EditQuote from './EditQuote';
import AddQuote from './AddQuote';
import AddSourceCode from './AddSourceCode';

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
                            <Route path="/addQuote/:sourceCode" component={AddQuote} />
			    <Route patch="/addSourceCode" component={AddSourceCode} />
                        </Switch>
                    </ConnectedRouter>
                </Provider>
                );
    }
}

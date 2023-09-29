/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import Main from './Main';
import QuoteDetails from './QuoteDetails';
import { Provider } from 'react-redux';
import store, { history } from '../store/QuoteOfTheDayStore';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import EditQuote from './EditQuote';
import AddQuote from './AddQuote';
import AddSourceCode from './AddSourceCode';
import Login from './Login';
import { addApplicationVersion } from '../actions/ApplicationDataActions';

const {version} = require("../../../package.json");

const App = (props) => {
    store.dispatch(addApplicationVersion(version));
    return (
            <Provider store={store}>
                <BrowserRouter history={history}>
                    <Routes>
                        <Route path="/" element={ <Main /> } />
                        <Route path="/quoteDetails/:quoteNumber" element={ <QuoteDetails /> } />
                        <Route path="/editQuote/:quoteNumber" element={ <EditQuote /> } />
                        <Route path="/addQuote/:sourceCode" element={ <AddQuote /> } />
                        <Route path="/addSourceCode" element={ <AddSourceCode /> } />
                        <Route path="/login" element={ <Login /> } />
                    </Routes>
                </BrowserRouter>
            </Provider>
    );
};

export default App;


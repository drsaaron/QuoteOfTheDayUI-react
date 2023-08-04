/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { useEffect } from 'react';
import Header from './Header';
import SourceCodeList from './SourceCodeList';
import QuotesForSourceCodeList from './QuotesForSourceCodeList';
import QuoteOfTheDay from './QuoteOfTheDay';
import { connect } from 'react-redux';
import { retrieveQuotesForSourceCode } from '../actions/SourceCodeActions';
import { showQuoteDetails, addQuote, addSourceCode, goHome } from '../actions/NavigationActions';
import { retrieveQuoteOfTheDay } from '../actions/QuoteOfTheDayActions';
import { useNavigate } from 'react-router-dom';
import { loginForm, logout, updateTokenMonitorInterval } from '../actions/LoginActions';

const {version} = require("../../../package.json");

const mapStateToProps = (state) => {
    return {
        quoteOfTheDay: state.quoteOfTheDay,
        sourceCodes: state.sourceCodes,
        quotesForSourceCode: state.quotesForSourceCode,
	login: state.login
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveQuoteOfTheDay: (runDate, token) => dispatch(retrieveQuoteOfTheDay(runDate, token)),
        retrieveQuotesForSourceCode: (sourceCode, token) => dispatch(retrieveQuotesForSourceCode(sourceCode, token)),
        showQuoteDetails: (quoteNumber, navigate, token) => dispatch(showQuoteDetails(quoteNumber, navigate, token)),
        addQuote: (sourceCode, navigate) => dispatch(addQuote(sourceCode.number, navigate)),
	addSourceCode: (navigate) => dispatch(addSourceCode(navigate)),
	goHome: (navigate) => dispatch(goHome(navigate)),
	loginForm: (navigate) => loginForm(navigate),
	logout: () => dispatch(logout()),
	updateTokenMonitorInterval: (intervalId) => dispatch(updateTokenMonitorInterval(intervalId))
    };
};

const Main = (props) => {

    /* if the JWT token is define, i.e. user is logged in, periodically check for expiration.
       when expired, logout. Storing the interval ID in state (via useState) does not seem to work
       when navigating to child pages and back.  Store store in teh redux store. */
    const checkTokenExpiration = (token) => {
	var parsedToken = JSON.parse(atob(token.split('.')[1]));
	var duration = parsedToken.exp * 1000 - Date.now();
	if (parsedToken.exp * 1000 < Date.now()) {
	    console.log("token expired, logging out");
	    props.logout();
	}
    };
    
    const startJwtPolling = () => {
	var jwtToken = props.login.token;
	var intervalId = props.login.tokenMonitorInterval;
	if (intervalId < 0 && jwtToken !== null) {
	    var i = setInterval(() => checkTokenExpiration(jwtToken), 60000);
	    props.updateTokenMonitorInterval(i);
	}
    };

    const stopJwtPolling = () => {
	var intervalId = props.login.tokenMonitorInterval;
	if (intervalId > 0) {
	    clearInterval(intervalId);
	    props.updateTokenMonitorInterval(-1);
	}
    };
    
    // whenever the JWT token is null, navigate to login
    useEffect(() => {
	var jwtToken = props.login.token;
	startJwtPolling();
	if (jwtToken == null) {
	    console.log("no token, going to login page");
	    props.loginForm(navigate);
	}
	return stopJwtPolling;
    }, [props.login.token]);
    
    const navigate = useNavigate();
    console.log("token = " + props.login.token);
    
    return (
        <div>
            <Header navigate={navigate} goHome={goHome} version={version} />
            <QuoteOfTheDay quoteOfTheDay={props.quoteOfTheDay} retrieveQuoteOfTheDay={props.retrieveQuoteOfTheDay} retrieveQuotesForSourceCode={props.retrieveQuotesForSourceCode} login={props.login} navigate={navigate} showDetails={props.showQuoteDetails} />
	    <div id="appDataContainer">
            <SourceCodeList addSourceCode={props.addSourceCode} sourceCodes={props.sourceCodes} addQuote={props.addQuote} retrieveQuotesForSourceCode={props.retrieveQuotesForSourceCode} login={props.login} navigate={navigate} />
            <QuotesForSourceCodeList quotesForSourceCode={props.quotesForSourceCode} navigate={navigate} showQuoteDetails={props.showQuoteDetails} login={props.login} />
	    </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

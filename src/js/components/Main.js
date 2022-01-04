/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import Header from './Header';
import SourceCodeList from './SourceCodeList';
import QuotesForSourceCodeList from './QuotesForSourceCodeList';
import QuoteOfTheDay from './QuoteOfTheDay';
import { connect } from 'react-redux';
import { retrieveQuotesForSourceCode } from '../actions/SourceCodeActions';
import { showQuoteDetails, addQuote, addSourceCode } from '../actions/NavigationActions';
import { retrieveQuoteOfTheDay } from '../actions/QuoteOfTheDayActions';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        quoteOfTheDay: state.quoteOfTheDay,
        sourceCodes: state.sourceCodes,
        quotesForSourceCode: state.quotesForSourceCode
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveQuoteOfTheDay: (runDate) => dispatch(retrieveQuoteOfTheDay(runDate)),
        retrieveQuotesForSourceCode: (sourceCode) => dispatch(retrieveQuotesForSourceCode(sourceCode)),
        showQuoteDetails: (quoteNumber, navigate) => dispatch(showQuoteDetails(quoteNumber, navigate)),
        addQuote: (sourceCode, navigate) => dispatch(addQuote(sourceCode.number, navigate)),
	addSourceCode: (navigate) => dispatch(addSourceCode(navigate))
    };
};

const Main = (props) => {

    const navigate = useNavigate();
    
    return (
        <div>
            <Header navigate={navigate} />
            <QuoteOfTheDay quoteOfTheDay={props.quoteOfTheDay} retrieveQuoteOfTheDay={props.retrieveQuoteOfTheDay} retrieveQuotesForSourceCode={props.retrieveQuotesForSourceCode} navigate={navigate} showDetails={props.showQuoteDetails} />
	    <div id="appDataContainer">
                <SourceCodeList addSourceCode={props.addSourceCode} sourceCodes={props.sourceCodes} addQuote={props.addQuote} retrieveQuotesForSourceCode={props.retrieveQuotesForSourceCode} navigate={navigate} />
                <QuotesForSourceCodeList quotesForSourceCode={props.quotesForSourceCode} navigate={navigate} showQuoteDetails={props.showQuoteDetails} />
	    </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

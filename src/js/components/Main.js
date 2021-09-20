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
        showQuoteDetails: (quoteNumber) => dispatch(showQuoteDetails(quoteNumber)),
        addQuote: (sourceCode) => dispatch(addQuote(sourceCode.number)),
	addSourceCode: () => dispatch(addSourceCode())
    };
};

class Main extends Component {

    render() {
        return (
                <div>
                    <Header />
                    <QuoteOfTheDay quoteOfTheDay={this.props.quoteOfTheDay} retrieveQuoteOfTheDay={this.props.retrieveQuoteOfTheDay} retrieveQuotesForSourceCode={this.props.retrieveQuotesForSourceCode} showDetails={this.props.showQuoteDetails} />
		    <div id="appDataContainer">
                        <SourceCodeList addSourceCode={this.props.addSourceCode} sourceCodes={this.props.sourceCodes} addQuote={this.props.addQuote} retrieveQuotesForSourceCode={this.props.retrieveQuotesForSourceCode} />
                        <QuotesForSourceCodeList quotesForSourceCode={this.props.quotesForSourceCode} showQuoteDetails={this.props.showQuoteDetails} />
		    </div>
                </div>
                );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { editQuote } from '../actions/NavigationActions';
import QuoteText from './QuoteText';
import QuoteOfTheDayHistory from './QuoteOfTheDayHistory';
import Header from './Header';
import { useParams } from 'react-router-dom';

function editQuoteCallback(event, quoteNumber) {
    event.preventDefault();
    editQuote(quoteNumber);
}

const QuoteDetails = (props) => {

    var params = useParams();
    
    var quoteNumber = params.quoteNumber;
    var quote = props.quoteDetails.quote;
    var usable = quote.usable ? 'Yes' : 'No';

    return (
        <div>
            <Header />
            <h1>Details for #{quoteNumber}</h1>
            
            <div id="quoteDetailText">
                <div id="quoteDetailsSource" className="QuoteSource">Source: <em>{props.quoteDetails.sourceCode.text}</em></div>
                <br />
                <QuoteText quote={quote} />
                <br />
                <div id="quoteDetailUsable">Usable: {usable}</div>
            </div>
            
            <button onClick={(event) => editQuoteCallback(event, quoteNumber) }>Edit</button>
                
            <QuoteOfTheDayHistory history={props.quoteDetails.history} />
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        quoteDetails: state.quoteDetails
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editQuote: (quoteNumber) => dispatch(editQuote(quoteNumber))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteDetails);

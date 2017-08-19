/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { retrieveQuoteDetails, editQuote } from '../actions/QuoteActions';
import QuoteText from './QuoteText';
import QuoteOfTheDayHistory from './QuoteOfTheDayHistory';

class QuoteDetails extends Component {
    constructor(props) {
        super(props);
        
        this.editQuote = this.editQuote.bind(this);
    }

    getQuoteNumber() {
        return this.props.match.params.quoteNumber;
    }

    editQuote(event) {
        event.preventDefault();
        this.props.editQuote(this.getQuoteNumber());
    }
    
    render() {
        var quoteNumber = this.getQuoteNumber();
        var quote = this.props.quoteDetails.quote;
        var usable = quote.usable ? 'Yes' : 'No';
        
        return (
                <div>
                    <h1>Details for #{quoteNumber}</h1>
                
                    <div id="quoteDetailText">
                        <QuoteText quote={quote} />
                        <br />
                        <div id="quoteDetailUsable">Usable: {usable}</div>
                    </div>
                    
        <button onClick={this.editQuote}>Edit</button>
                
                    <QuoteOfTheDayHistory history={this.props.quoteDetails.history} />
                </div>
                );
    }

    componentDidMount() {
        // retrieve details.
        var quoteNumber = this.getQuoteNumber();
        console.log("retrieving details for quote " + quoteNumber);
        this.props.retrieveDetails(quoteNumber);
    }
}

const mapStateToProps = (state) => {
    return {
        quoteDetails: state.quoteDetails
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveDetails: (quoteNumber) => dispatch(retrieveQuoteDetails(quoteNumber)),
        editQuote: (quoteNumber) => dispatch(editQuote(quoteNumber))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteDetails);
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { retrieveQuoteOfTheDay } from '../actions/QuoteOfTheDayActions';
import QuoteText from './QuoteText';
import { retrieveQuotesForSourceCode } from '../actions/SourceCodeActions';

const mapStateToProps = (state) => {
    return {
        quoteOfTheDay: state.quoteOfTheDay
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveQuoteOfTheDay: (runDate) => dispatch(retrieveQuoteOfTheDay(runDate)),
        retrieveQuotesForSourceCode: (sourceCode) => dispatch(retrieveQuotesForSourceCode(sourceCode))
    };
};

function today() {
    var t = new Date();
    return t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate();
}

class QuoteOfTheDay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            runDate: today()
        };

        this.handleSourceClick = this.handleSourceClick.bind(this);
    }

    handleSourceClick(event) {
        console.log("getting quotes for " + this.props.quoteOfTheDay.sourceCode.number);

        event.preventDefault();
        this.props.retrieveQuotesForSourceCode(this.props.quoteOfTheDay.sourceCode);
    }

    render() {
        var quoteNumber = (this.props.quoteOfTheDay.qotd) ? this.props.quoteOfTheDay.qotd.quoteNumber : -1;
        var runDate = (quoteNumber > 0) ? this.props.quoteOfTheDay.qotd.runDate : this.state.runDate;
        return (
                <div id="quoteOfTheDay">
                    <h2>Quote of the day</h2>
                    Number: {quoteNumber} Run date = {runDate}
                    <QuoteText quote={this.props.quoteOfTheDay.quote} />
                    <div className="QuoteSource">Source: <em><a href="#" onClick={this.handleSourceClick}>{this.props.quoteOfTheDay.sourceCode.text}</a></em></div>
                </div>
                );
    }

    componentDidMount() {
        this.props.retrieveQuoteOfTheDay(this.state.runDate);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteOfTheDay);
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { retrieveQuoteOfTheDay } from '../actions/QuoteOfTheDayActions';
import QuoteText from './QuoteText';
import Async from 'react-promise';

const mapStateToProps = (state) => {
    return {
        quoteOfTheDay: state.quoteOfTheDay
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveQuoteOfTheDay: (runDate) => dispatch(retrieveQuoteOfTheDay(runDate))
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
    }

    render() {
        var quoteNumber = (this.props.quoteOfTheDay.qotd) ? this.props.quoteOfTheDay.qotd.quoteNumber : -1;
        var runDate = (quoteNumber > 0) ? this.props.quoteOfTheDay.qotd.runDate : this.state.runDate;
        return (
                <div id="quoteOfTheDay">
                    Number: {quoteNumber} Run date = {runDate}
                    <QuoteText quote={this.props.quoteOfTheDay.quote} />
                </div>
                );
    }

    componentDidMount() {
        this.props.retrieveQuoteOfTheDay(this.state.runDate);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteOfTheDay);
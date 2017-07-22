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
import { showQuoteDetails } from '../actions/QuoteActions';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const mapStateToProps = (state) => {
    return {
        quoteOfTheDay: state.quoteOfTheDay
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveQuoteOfTheDay: (runDate) => dispatch(retrieveQuoteOfTheDay(runDate)),
        retrieveQuotesForSourceCode: (sourceCode) => dispatch(retrieveQuotesForSourceCode(sourceCode)),
        showDetails: (quoteOfTheDay) => dispatch(showQuoteDetails(quoteOfTheDay.quoteNumber))
    };
};

class QuoteOfTheDay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            runDate: this.props.quoteOfTheDay.runDate,
            maxDate: moment()
        };

        this.handleSourceClick = this.handleSourceClick.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.showDetails = this.showDetails.bind(this);
        
        this.dateFormat = "YYYY-MM-DD";
    }

    dateAsString() {
        return this.state.runDate.format(this.dateFormat);
    }
    
    handleSourceClick(event) {
        console.log("getting quotes for " + this.props.quoteOfTheDay.sourceCode.number);

        event.preventDefault();
        this.props.retrieveQuotesForSourceCode(this.props.quoteOfTheDay.sourceCode);
    }
    
    showDetails(event) {
        event.preventDefault();
        this.props.showDetails(this.props.quoteOfTheDay.qotd);
    }
    
    handleDateChange(date) {
        this.setState({ runDate: date });
    }

    render() {
        var quoteNumber = this.props.quoteOfTheDay.qotd.quoteNumber || -1;
    
        return (
                <div id="quoteOfTheDay">
                    <h2>Quote of the day</h2>
                    <DatePicker maxDate={this.state.maxDate} selected={this.state.runDate} onChange={this.handleDateChange} dateFormat={this.dateFormat}/>
                    Quote #<a href="#" onClick={this.showDetails}>{quoteNumber}</a>
                    <QuoteText quote={this.props.quoteOfTheDay.quote} />
                    <div className="QuoteSource">Source: <em><a href="#" onClick={this.handleSourceClick}>{this.props.quoteOfTheDay.sourceCode.text}</a></em></div>
                </div>
                );
    }

    getQuoteOfTheDay() {
        var runDate = this.dateAsString();
        console.log("getting quote of the day for " + runDate);
        this.props.retrieveQuoteOfTheDay(runDate);
    }
    
    componentDidMount() {
        if (this.props.quoteOfTheDay.initialized === false) {
         this.getQuoteOfTheDay();
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState !== null && prevState.runDate !== this.state.runDate) {
            this.getQuoteOfTheDay();
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteOfTheDay);
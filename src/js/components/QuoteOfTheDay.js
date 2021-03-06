/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import QuoteText from './QuoteText';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class QuoteOfTheDay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            runDate: this.props.quoteOfTheDay.runDate,
            maxDate: new Date()
        };

        this.handleSourceClick = this.handleSourceClick.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.showDetails = this.showDetails.bind(this);
        
    }
    
    handleSourceClick(event) {
        console.log("getting quotes for " + this.props.quoteOfTheDay.sourceCode.number);

        event.preventDefault();
        this.props.retrieveQuotesForSourceCode(this.props.quoteOfTheDay.sourceCode);
    }
    
    showDetails(event) {
        event.preventDefault();
        this.props.showDetails(this.props.quoteOfTheDay.qotd.quoteNumber);
    }
    
    handleDateChange(date) {
        this.setState({ runDate: date });
        this.getQuoteOfTheDay(date);
    }

    render() {
        var quoteNumber = this.props.quoteOfTheDay.qotd.quoteNumber || -1;
    
        return (
                <div id="quoteOfTheDay">
                    <h2>Quote of the day</h2>
                    <DatePicker maxDate={this.state.maxDate} selected={this.state.runDate} onChange={this.handleDateChange} />
                    Quote #<a href="#" onClick={this.showDetails}>{quoteNumber}</a>
                    <QuoteText quote={this.props.quoteOfTheDay.quote} />
                    <div className="QuoteSource">Source: <em><a href="#" onClick={this.handleSourceClick}>{this.props.quoteOfTheDay.sourceCode.text}</a></em></div>
                </div>
                );
    }

    getQuoteOfTheDay(runDate) {
        console.log("getting quote of the day for " + runDate);
        this.props.retrieveQuoteOfTheDay(runDate);
    }
    
}

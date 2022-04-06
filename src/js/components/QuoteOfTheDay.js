/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {useState} from 'react';
import QuoteText from './QuoteText';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const QuoteOfTheDay = (props) => {

    const [runDate, setRunDate] = useState(props.quoteOfTheDay.runDate);
    const maxDate = new Date();

    const handleSourceClick = (event) => {
        console.log("getting quotes for " + props.quoteOfTheDay.sourceCode.number);

        event.preventDefault();
        props.retrieveQuotesForSourceCode(props.quoteOfTheDay.sourceCode);
    }
    
    const showDetails = (event) => {
        event.preventDefault();
        props.showDetails(props.quoteOfTheDay.qotd.quoteNumber, props.navigate);
    }
    
    const handleDateChange = (date) => {
	setRunDate(date);
        getQuoteOfTheDay(date);
    }

    const getQuoteOfTheDay = (runDate) => {
        console.log("getting quote of the day for " + runDate);
        props.retrieveQuoteOfTheDay(runDate);
    }

    var quoteNumber = props.quoteOfTheDay.qotd.quoteNumber || -1;
    
    return (
        <div id="quoteOfTheDay">
            <h2>Quote of the day</h2>
            <DatePicker maxDate={maxDate} selected={runDate} onChange={handleDateChange} />
            Quote #<a href="/" onClick={showDetails}>{quoteNumber}</a>
            <QuoteText quote={props.quoteOfTheDay.quote} />
            <div className="QuoteSource">Source: <em><a href="/" onClick={handleSourceClick}>{props.quoteOfTheDay.sourceCode.text}</a></em></div>
        </div>
    );
}

export default QuoteOfTheDay;

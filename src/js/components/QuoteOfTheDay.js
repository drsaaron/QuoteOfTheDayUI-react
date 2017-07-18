/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { retrieveQuoteOfTheDay } from '../actions/QuoteOfTheDayActions';

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

class QuoteOfTheDay extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            runDate: '2017-07-17'
        };
    }
    
    render() {
        var quoteNumber = (this.props.quoteOfTheDay.qotd) ? this.props.quoteOfTheDay.qotd.quoteNumber : -1;
        return (
                <div id="quoteOfTheDay">
                    Number: {quoteNumber}
                </div>
                );
    }
    
    componentDidMount() {
        this.props.retrieveQuoteOfTheDay(this.state.runDate);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteOfTheDay);
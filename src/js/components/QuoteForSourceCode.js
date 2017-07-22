/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import QuoteText from './QuoteText';
import { showQuoteDetails } from '../actions/QuoteActions';
import { connect } from 'react-redux';

class QuoteForSourceCode extends Component {
    constructor(props) {
        super(props);
        
        this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler(event) {
        event.preventDefault();
        this.props.showDetails(this.props.quote);
    }

    render() {
        var quote = this.props.quote;

        return (
                <article className="quote">
                    <a href="#" onClick={this.clickHandler}>{quote.number}</a>
                    <br />
                    <QuoteText quote={quote} />
                </article>
                );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showDetails: (quote) => dispatch(showQuoteDetails(quote.number))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteForSourceCode);
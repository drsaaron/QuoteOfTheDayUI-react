/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { retrieveQuoteDetails } from '../actions/QuoteActions';
import QuoteText from './QuoteText';
import QuoteOfTheDayHistory from './QuoteOfTheDayHistory';

class QuoteDetails extends Component {
    constructor(props) {
        super(props);
    }

    getQuoteNumber() {
        return this.props.match.params.quoteNumber;
    }

    render() {
        var quoteNumber = this.getQuoteNumber();

        return (
                <div>
                    Details for #{quoteNumber}
                
                    <div id="quoteDetailText">
                        <QuoteText quote={this.props.quoteDetails.quote} />
                    </div>
                    
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
        retrieveDetails: (quoteNumber) => dispatch(retrieveQuoteDetails(quoteNumber))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteDetails);
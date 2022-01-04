/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateQuote } from '../actions/QuoteActions';
import QuoteEditor from './QuoteEditor';
import Header from './Header';

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateQuote: (quote) => dispatch(updateQuote(quote))
    };
};

class EditQuote extends Component {
    constructor(props) {
        super(props);

        this.handleSave = this.handleSave.bind(this);
    }

    getQuoteNumber() {
        return this.props.match.params.quoteNumber;
    }

    handleSave(updatedQuote) {
        this.props.updateQuote(updatedQuote);
    }

    render() {
        return (
                <div>
                    <Header />
                    <QuoteEditor editLabel="Save" editCallback={this.handleSave} />
                </div>
                );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EditQuote);

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import { prepareAddQuote, saveQuote } from '../actions/QuoteActions';
import { connect } from 'react-redux';
import QuoteEditor from './QuoteEditor';
import Header from './Header';

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        prepareAddQuote: (sourceCode) => dispatch(prepareAddQuote(sourceCode)),
        saveQuote: (newQuote) => dispatch(saveQuote(newQuote))
    };
};

class AddQuote extends Component {
    constructor(props) {
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(newQuote) {
        this.props.saveQuote(newQuote);
    }

    render() {
        return (
                <div>
                    <Header />
                    <QuoteEditor editLabel="Add" editCallback={this.handleAdd} />
                </div>
                );
    }

    componentDidMount() {
        var sourceCode = this.props.match.params.sourceCode;
        console.log("preparing to add quote to source " + sourceCode);
        this.props.prepareAddQuote(sourceCode);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuote);
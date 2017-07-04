/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';

class QuoteDetails extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
                <div>I am a detail</div>
                );
    }
}

const mapStateToProps = (state) => {
    return {
        quoteDetails: state.quoteDetails
    };
};

export default connect(mapStateToProps)(QuoteDetails);
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { connect } from 'react-redux';
import { updateQuote } from '../actions/QuoteActions';
import QuoteEditor from './QuoteEditor';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateQuote: (quote, navigate) => dispatch(updateQuote(quote, navigate))
    };
};

const EditQuote = (props) => {

    var navigate = useNavigate();

    return (
        <div>
            <Header navigate={navigate} />
            <QuoteEditor navigate={navigate} editLabel="Save" editCallback={props.updateQuote} />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditQuote);

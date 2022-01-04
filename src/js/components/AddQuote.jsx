/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { saveQuote } from '../actions/QuoteActions';
import { connect } from 'react-redux';
import QuoteEditor from './QuoteEditor';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveQuote: (newQuote, navigate) => dispatch(saveQuote(newQuote, navigate))
    };
};

const AddQuote = (props) => {

    var navigate = useNavigate();

    return (
        <div>
            <Header navigate={navigate} />
            <QuoteEditor editLabel="Add" editCallback={props.saveQuote} navigate={navigate} />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuote);

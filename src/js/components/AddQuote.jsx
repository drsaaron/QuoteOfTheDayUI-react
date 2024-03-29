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
import { goHome } from '../actions/NavigationActions';

const mapStateToProps = (state) => {
    return {
	login: state.login
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveQuote: (newQuote, navigate, token) => dispatch(saveQuote(newQuote, navigate, token)),
	goHome: (navigate) => dispatch(goHome(navigate))
    };
};

const AddQuote = (props) => {

    var navigate = useNavigate();

    return (
        <div>
            <Header navigate={navigate} goHome={props.goHome} />
            <QuoteEditor editLabel="Add" editCallback={props.saveQuote} navigate={navigate} login={props.login} />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuote);

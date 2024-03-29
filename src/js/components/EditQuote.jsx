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
import { goHome } from '../actions/NavigationActions';

const mapStateToProps = (state) => {
    return {
	login: state.login
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateQuote: (quote, navigate, token) => dispatch(updateQuote(quote, navigate, token)),
	goHome: (navigate) => dispatch(goHome(navigate))
    };
};

const EditQuote = (props) => {

    var navigate = useNavigate();

    return (
        <div>
            <Header navigate={navigate} goHome={props.goHome} />
            <QuoteEditor navigate={navigate} editLabel="Save" editCallback={props.updateQuote} login={props.login} />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditQuote);

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { connect } from 'react-redux';
import { editQuote } from '../actions/NavigationActions';
import QuoteText from './QuoteText';
import QuoteOfTheDayHistory from './QuoteOfTheDayHistory';
import Header from './Header';
import { useParams, useNavigate } from 'react-router-dom';
import { goHome } from '../actions/NavigationActions';

const QuoteDetails = (props) => {

    var params = useParams();
    
    var quoteNumber = params.quoteNumber;
    var quote = props.quoteDetails.quote;
    var usable = quote.usable ? 'Yes' : 'No';
    var navigate = useNavigate();

    return (
        <div>
            <Header navigate={navigate} goHome={props.goHome} />
            <h1>Details for #{quoteNumber}</h1>
            
            <div id="quoteDetailText">
                <div id="quoteDetailsSource" className="QuoteSource">Source: <em>{props.quoteDetails.sourceCode.text}</em></div>
                <br />
                <QuoteText quote={quote} />
                <br />
                <div id="quoteDetailUsable">Usable: {usable}</div>
            </div>
            
            <button onClick={(event) => { event.preventDefault(); props.editQuote(quoteNumber, navigate, props.login.token); } }>Edit</button>
                
            <QuoteOfTheDayHistory history={props.quoteDetails.history} />
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        quoteDetails: state.quoteDetails,
	login: state.login
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editQuote: (quoteNumber, navigate, token) => dispatch(editQuote(quoteNumber, navigate, token)),
	goHome: (navigate) => dispatch(goHome(navigate))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteDetails);

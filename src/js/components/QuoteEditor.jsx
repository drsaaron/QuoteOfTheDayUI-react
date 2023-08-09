/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { connect } from 'react-redux';
import { quoteDataUpdate } from '../actions/QuoteActions';

const mapStateToProps = (state) => {
    return {
        editQuote: state.editQuote
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
	quoteDataUpdate: (updatedQuote) => dispatch(quoteDataUpdate(updatedQuote))
    };
};

const QuoteEditor = (props) => {

    var text = props.editQuote.quote.text;
    var usable = props.editQuote.quote.usable;
    var sourceCode = props.editQuote.sourceCode;
    
    const handleEdit = (event) => {
        event.preventDefault();
        var updatedQuote = {
            ...props.editQuote.quote,
            text: text,
            usable: usable,
            sourceCode: sourceCode
        };
        props.editCallback(updatedQuote, props.navigate, props.login.token);
    };

    const handleTextChange = (event) => {
	var updatedQuote = {
	    ...props.editQuote.quote,
	    text: event.target.value
	};
	props.quoteDataUpdate(updatedQuote);
    }

    const handleUsableChange = (event) => {
	var updatedQuote = {
	    ...props.editQuote.quote,
	    usable: event.target.checked
	};

	props.quoteDataUpdate(updatedQuote);
    }

    const handleSourceCodeChange = (event) => {
	var updatedQuote = {
	    ...props.editQuote.quote,
	    sourceCode: event.target.value
	};

	props.quoteDataUpdate(updatedQuote);
    }
    
    var sourceCodeDisabled = props.editQuote.sourceCode > 0;
    return (
        <div id="quoteEditor">
            { props.editQuote.quoteNumber > 0 ? <h2>Editting #{props.editQuote.quoteNumber}</h2> : <h2>Adding quote</h2> }
            
            <form action="post">
                <table>
                    <tbody>
                        <tr><td>Source:</td>
			    <td>
				<select value={sourceCode} onChange={handleSourceCodeChange} disabled={sourceCodeDisabled}>
				    {props.editQuote.sourceCodes.map(sourceCode => <option key={sourceCode.number} value={sourceCode.number}>{sourceCode.text}</option>) }
				</select>
			    </td>
			</tr>
                        <tr><td>Text:</td><td><textarea value={text} cols="80" rows="20" onChange={handleTextChange} /></td></tr>
                        <tr><td>Usable:</td><td><input type="checkbox" id="usable" checked={usable} onChange={handleUsableChange} /></td></tr>
                        <tr><td colSpan="2"><button className="submit" onClick={(event) => handleEdit(event)}>{props.editLabel}</button></td></tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteEditor);

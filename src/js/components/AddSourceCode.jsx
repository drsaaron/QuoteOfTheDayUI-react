import React, {useState, useEffect} from 'react';
import { addSourceCode, prepareAddSourceCode } from '../actions/SourceCodeActions';
import { connect } from 'react-redux';
import Header from './Header';
import {useNavigate} from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
	sourceCodes: state.sourceCodes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
	addSourceCode: (sourceCode, navigate) => dispatch(addSourceCode(sourceCode, navigate)),
	prepareAddSourceCode: () => dispatch(prepareAddSourceCode())
    };
};

const AddSourceCode = (props) => {

    const [text, setText] = useState(props.sourceCodes.defaultSourceCode.text);
    const navigate = useNavigate();
    
    // on mount, prepare the state for adding
    const prepareAddSourceCode = props.prepareAddSourceCode;
    useEffect(() => {
	prepareAddSourceCode();
    }, [prepareAddSourceCode]);

    const addSourceCode = (event) => {
	event.preventDefault();
	var newSource = { number: props.sourceCodes.defaultSourceCode.number, text: text };
	props.addSourceCode(newSource, navigate);
    }

    const handleTextChange = (event) => {
	setText(event.target.value);
    }

    return (
	    <div>
		<Header />

		<div id="newSourceCodeEditor">
		    <form action="post">
			<label>
			    New quote source:
			    <input type="text" name="text" value={text} onChange={handleTextChange} />
			</label>
			<input type="submit" value="Submit" onClick={addSourceCode} />
		    </form>
		</div>
	    </div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSourceCode);

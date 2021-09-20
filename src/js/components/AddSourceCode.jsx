import React, {useState, useEffect} from 'react';
import { addSourceCode, prepareAddSourceCode } from '../actions/SourceCodeActions';
import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => {
    return {
	sourceCodes: state.sourceCodes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
	addSourceCode: (sourceCode) => dispatch(addSourceCode(sourceCode)),
	prepareAddSourceCode: () => dispatch(prepareAddSourceCode())
    };
};

const AddSourceCode = (props) => {

    const [text, setText] = useState(props.sourceCodes.sourceCode.text);

    // on mount, prepare the state for adding
    const prepareAddSourceCode = props.prepareAddSourceCode;
    useEffect(() => {
	prepareAddSourceCode()
    }, [prepareAddSourceCode]);

    const addSourceCode = (event) => {
	event.preventDefault();
	var newSource = { number: props.sourceCodes.sourceCode.number, text: text };
	props.addSourceCode(newSource);
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
			    <input type="text" name="text" value={text} onChange={(event) => handleTextChange(event)} />
			</label>
			<input type="submit" value="Submit" onClick={(event) => addSourceCode(event)} />
		    </form>
		</div>
	    </div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSourceCode);

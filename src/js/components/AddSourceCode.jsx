import React, {Component} from 'react';
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

class AddSourceCode extends Component {

    constructor(props) {
	super(props);

	this.state = {
	    text: this.props.sourceCodes.sourceCode.text
	};

	this.handleTextChange = this.handleTextChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(event) {
	this.setState({
	    ...this.state,
	    text: event.target.value
	});
    }

    handleSubmit(event) {
	event.preventDefault();
	var newCode = {
	    number: this.props.sourceCodes.sourceCode.number,
	    text: this.state.text
	};
	this.props.addSourceCode(newCode);
    }
    
    render() {
	return (
	    <div>
		<Header />

		<div id="newSourceCodeEditor">
		    <form action="post">
			<label>
			    New quote source:
			    <input type="text" name="text" onChange={this.handleTextChange} />
			</label>
			<input type="submit" value="Submit" onClick={this.handleSubmit} />
		    </form>
		</div>
	    </div>
	);
    }

    componentDidMount() {
	this.props.prepareAddSourceCode();
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSourceCode);

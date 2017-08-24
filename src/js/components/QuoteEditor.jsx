/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        editQuote: state.editQuote
    };
};

class QuoteEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'quote',
            usable: true
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleUsableChange = this.handleUsableChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log("new props");
        this.setState({...this.state, text: nextProps.editQuote.quote.text, usable: nextProps.editQuote.quote.usable || false});
    }

    handleTextChange(event) {
        this.setState({...this.state, text: event.target.value});
    }

    handleUsableChange(event) {
        this.setState({...this.state, usable: event.target.checked});
    }

    handleEdit(event) {
        event.preventDefault();
        var updatedQuote = {...this.props.editQuote.quote, text: this.state.text, usable: this.state.usable};
        this.props.editCallback(updatedQuote);
    }

    render() {
        return (
                <div id="quoteEditor">
                    # {this.props.editQuote.quoteNumber} 
                
                    <form action="post">
                        <table>
                            <tbody>
                                <tr><td>Text:</td><td><textarea value={this.state.text} cols="80" rows="20" onChange={this.handleTextChange} /></td></tr>
                                <tr><td>Usable:</td><td><input type="checkbox" id="usable" checked={this.state.usable} onChange={this.handleUsableChange} /></td></tr>
                                <tr><td colSpan="2"><button className="submit" onClick={this.handleEdit}>{this.props.editLabel}</button></td></tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                );
    }
}

export default connect(mapStateToProps)(QuoteEditor);
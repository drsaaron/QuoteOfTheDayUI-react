/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const SourceCodeListItem = (props) => {

    const clickHandler = (event) => {
        event.preventDefault();
        props.retrieveQuotesForSourceCode(props.sourceCode, props.login.token);
    }
    
    const addQuote = (event) => {
        event.preventDefault();
        props.addQuote(props.sourceCode, props.navigate);
    }
    
    return (
        <li><a href="/" onClick={clickHandler}>{props.sourceCode.text}</a> <button onClick={addQuote}>+</button></li>
    );
};

export default SourceCodeListItem;

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const QuoteOfTheDayHistoryForYear = (props) => {

    var year = props.year;
    var history = props.history;
    
    return (
        <article>
            {year}
            <ul>
                { history.map(datum => <li key={datum.runDate}>{datum.runDate}</li>) }
            </ul>
        </article>
    );
}

export default QuoteOfTheDayHistoryForYear;

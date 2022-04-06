import React from 'react';
import renderer from 'react-test-renderer';

import QuoteOfTheDayHistory from './QuoteOfTheDayHistory';

describe('quote of the day history', () => {
    test('no history', () => {
	const history = {};
	const component = renderer.create(<QuoteOfTheDayHistory history={history} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
    });

    test('with history', () => {
	const history = {
	    2001: [ { runDate: '2001-01-01' }, { runDate: '2001-02-01' } ],
	    2002: [ { runDate: '2002-10-01' } ]
	};
	const component = renderer.create(<QuoteOfTheDayHistory history={history} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
    });
});

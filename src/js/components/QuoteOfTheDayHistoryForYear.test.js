import React from 'react';
import renderer from 'react-test-renderer';

import QuoteOfTheDayHistoryForYear from './QuoteOfTheDayHistoryForYear';

describe('quote of the day history for year', () => {
    test('basic', () => {
	const year = 2001;
	const history = [ { runDate: '2001-06-01' }, { runDate: '2001-07-01' } ];
	const component = renderer.create(<QuoteOfTheDayHistoryForYear year={year} history={history} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
    });
});

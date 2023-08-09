import React from 'react';
import renderer from 'react-test-renderer';

import QuoteOfTheDay from './QuoteOfTheDay';

describe('header', () => {
    test('basic', () => {
	const qotd = {
	    runDate: 1000,
	    sourceCode: {
		number: 10,
		text: 'test source'
	    },
	    quote: {
		number: 5,
		text: 'I am a quote'
	    },
	    qotd: {
		quoteNumber: 5
	    }
	};
	const component = renderer.create(<QuoteOfTheDay quoteOfTheDay={qotd} login={{token: "schmo"}} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
    });
});

import React from 'react';
import renderer from 'react-test-renderer';

const goHome = (navigate) => {};

import QuoteText from './QuoteText';

describe('header', () => {
    test('basic', () => {
	const quote = { text: 'I am a quote\nHear me roar' };
	const component = renderer.create(<QuoteText quote={quote} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
    });

    test('empty text', () => {
	const quote = { text: '' };
	const component = renderer.create(<QuoteText quote={quote} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
    });

    test('embedded HTML', () => {
	const quote = { text: 'I am <em>formatted</em>\nBut you can still hear me roar' };
	const component = renderer.create(<QuoteText quote={quote} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
    });
});

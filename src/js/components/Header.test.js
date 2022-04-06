import React from 'react';
import renderer from 'react-test-renderer';

const goHome = (navigate) => {};

import Header from './Header';

describe('header', () => {
    test('basic', () => {
	const component = renderer.create(<Header goHome={goHome} version="jest test" />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
    });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const rootReducer = (history) => { return {}; };
const store = createStore(rootReducer);

import Header from './Header';

describe('header', () => {
    test('basic', () => {
	const component = renderer.create(<Provider store={store}><Header /></Provider>);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
    });
});

import React from 'react';
import renderer from 'react-test-renderer';
import store from '../store/QuoteOfTheDayStore';
import { Provider } from 'react-redux';
import { addApplicationVersion } from  '../actions/ApplicationDataActions';

const goHome = (navigate) => {};

import Header from './Header';

describe('header', () => {
    store.dispatch(addApplicationVersion('jest test'));
    test('basic', () => {
	const component = renderer.create(<Provider store={store}><Header goHome={goHome}  /></Provider>);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
    });
});

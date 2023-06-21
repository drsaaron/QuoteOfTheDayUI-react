import React from 'react';
import renderer from 'react-test-renderer';

import SourceCodeListItem from './SourceCodeListItem';

describe('SourceCodeListItem', () => {
    test('basic', () => {
	var sourceCode = { text: "I am some text" };
	const component = renderer.create(<SourceCodeListItem sourceCode={sourceCode} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

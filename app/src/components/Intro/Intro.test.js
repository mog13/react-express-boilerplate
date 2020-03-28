import React from 'react';
import {render} from '@testing-library/react';

import Intro from './Intro';


describe('using the Intro component', ()=> {

	it('should render', () => {
		const {queryByText} = render(<Intro/>);
		expect(queryByText('HELLO WORLD')).not.toBeNull();
	});

	it('should render a given message', () => {
		const message = 'test';
		const {queryByText} = render(<Intro message={message}/>);
		expect(queryByText(message)).not.toBeNull();
	});
});

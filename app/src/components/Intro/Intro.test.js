import React from 'react';
import {render} from '@testing-library/react';

import {withStore} from '../../utils/test';
import Intro from './Intro';


describe('using the Intro component', ()=> {

	it('should render', () => {
		const {queryByText} = render(withStore(<Intro/>));
		expect(queryByText('HELLO WORLD')).not.toBeNull();
	});

	it('should render a given message', () => {
		const message = 'test';
		const {queryByText} = render(withStore(<Intro message={message}/>));
		expect(queryByText(message)).not.toBeNull();
	});
});

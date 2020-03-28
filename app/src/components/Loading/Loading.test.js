import React from 'react';
import {render} from '@testing-library/react';

import Loading from './Loading';


describe('using the Intro component', ()=> {

	it('should render with no message by default', () => {
		const {queryByText} = render(<Loading/>);
		expect(queryByText('Loading')).toBeNull();
	});

	it('should use a default message', () => {
		const {queryByText} = render(<Loading showMessage={true}/>);
		expect(queryByText('Loading')).not.toBeNull();
	});

	it('should use the message passed', () => {
		const message = 'hello';
		const {queryByText} = render(<Loading message={message} showMessage={true}/>);
		expect(queryByText(message)).not.toBeNull();
	});

});

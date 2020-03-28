import React from 'react';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';

export const emptyStoreObject = { };

const middleware = [];
export const mockStore = configureMockStore(middleware);

export const withStore = (Component, initialState = {}) => {
	let store;

	store = mockStore({
		...emptyStoreObject,
		...initialState
	});

	return <Provider store={store}>
		{Component}
	</Provider>;
};

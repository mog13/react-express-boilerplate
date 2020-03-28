import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Intro from './components/Intro/Intro';

import {createStore} from 'redux';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';

import './variables.scss';
import './index.scss';

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Intro/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

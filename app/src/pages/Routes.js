import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import Nav from '../components/Nav/Nav';
import Loading from '../components/Loading/Loading';


const HomePage = lazy(() => import('./HomePage'));
const OtherPage = lazy(() => import('./OtherPage'));

function Routes(){

	return <BrowserRouter>
		<Nav/>
		<Suspense fallback={<Loading/>}>
			<Switch>
				<Route exact path="/home" key="page-home" component={HomePage}/>
				<Route exact path="/other" key="page-other" component={OtherPage}/>
				<Route default>
					<Redirect to="/home"/>
				</Route>
			</Switch>
		</Suspense>
	</BrowserRouter>;
}

export default Routes;

import React from 'react';
import Intro from '../components/Intro/Intro';
import Loading from '../components/Loading/Loading';


function HomePage() {

	return <main id="page-home">
		<Intro/>
		<Loading/>
	</main>;
}

export default HomePage;

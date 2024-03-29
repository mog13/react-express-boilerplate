import React from 'react';
import * as PropTypes from 'prop-types';

import {useSelector} from 'react-redux';
import {getProjectName} from '../../store/reducers/example';

import reactLogo from '../../assets/react-logo.png';

import './Intro.scss';


function Intro({children, message}) {
	const projectName = useSelector(getProjectName);

	return <div className="intro">
		<h1 className="intro__message"> {message} </h1>
		<h2 className='intro__project'>from project: {projectName}</h2>
		<img className='intro__logo' src={reactLogo} alt="The logo for React"/>
		{children}
	</div>;
}

Intro.propTypes = {
	message: PropTypes.string,
	children: PropTypes.element
};

Intro.defaultProps = {
	message: 'HELLO WORLD'
};

export default Intro;

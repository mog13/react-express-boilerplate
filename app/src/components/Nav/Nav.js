import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav.scss';

function Nav (){

	return <div className="nav">
		<NavLink className="nav__link" to="/home"> Home </NavLink>
		<NavLink className="nav__link" to="/other"> Other </NavLink>
	</div>;
}

export default Nav;

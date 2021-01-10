import React from 'react';
import * as PropTypes from 'prop-types';

import './loading.scss';

function Loading({showMessage, message}) {
	return <div className="loading">
		<div className="loading__spinner"/>
		{showMessage && <h2 className="loading__message">{message}</h2>}
	</div>;
}

Loading.propTypes = {
	message: PropTypes.string,
	showMessage: PropTypes.bool
};

Loading.defaultProps = {
	message: 'Loading',
	showMessage: false
};

export default Loading;

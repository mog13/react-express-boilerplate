import React from "react";
import * as PropTypes from "prop-types";

import "./Intro.scss";

function Intro({message}) {
    return <div className="intro"><h1 className="intro__message"> {message} </h1></div>
}

Intro.propTypes = {
    message: PropTypes.string,
};

Intro.defaultProps = {
    message: 'HELLO WORLD'
};

export default Intro;

import React, { Fragment } from "react";

const TimeDisplay = ({ children, time }) => (
    <Fragment>
        <h3>{children}</h3>
        <p>{time}</p>
    </Fragment>
);

export default TimeDisplay;

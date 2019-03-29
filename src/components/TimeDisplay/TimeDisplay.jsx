import React, { Fragment } from "react";

const TimeDisplay = ({ children, time, timeUnit}) => (
    <Fragment>
        <h3>{children}
        {time} {timeUnit}</h3>
    </Fragment>
);

export default TimeDisplay;

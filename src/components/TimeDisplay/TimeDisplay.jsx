import React, { Fragment } from "react";

const TimeDisplay = ({ children, time }) => (
    <Fragment>
        <h3>{children}
        {time} mins</h3>
    </Fragment>
);

export default TimeDisplay;

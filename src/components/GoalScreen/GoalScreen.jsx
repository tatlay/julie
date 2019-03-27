import React, {Fragment} from "react";
import { Link } from "react-router-dom";

import Button from "../Button";

const StartScreen = () => (
    <Fragment>
        <h3>This is the goal selection screen</h3>
        <Link to="/time-muscles-screen">
            <Button>Next</Button>
        </Link>
    </Fragment>
   
);

export default StartScreen;

import React, {Fragment} from "react";
import { Link } from "react-router-dom";

import Button from "../Button";

const StartScreen = () => (
    <Fragment>
		<h1 className="startscreen__workout">Work Out with Julie!</h1>    
        <h3>This is the goal selection screen</h3>
        <Link to="/time-muscles-screen">
            <Button className="goalscreen__next">Next</Button>
        </Link>
    </Fragment>
   
);

export default StartScreen;

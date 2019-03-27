import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";

const StartScreen = () => (
    <div className="startscreen__background">
    	
	    <Link to="/goal-screen"><h1>Julie</h1>
	        <Button>Get Started</Button>
	    </Link>
	</div>
);

export default StartScreen;

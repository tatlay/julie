import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";

const StartScreen = () => (
    <Link to="/goal-screen">
        <Button>Get Started</Button>
    </Link>
);

export default StartScreen;

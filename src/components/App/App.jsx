import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInScreen from "../SignInScreen";
import StartScreen from "../startScreen";
import TimeMusclesScreen from "../TimeMusclesScreen";
import WorkoutSheetScreen from "../WorkoutSheetScreen";
import "../../styles/main.css";

const App = () => (
    <Router>
        <Fragment>
            <Switch>
				<Route exact path="/sign-in-screen" component={SignInScreen} />            
                <Route exact path="/" component={StartScreen} />
                <Route exact path="/time-muscles-screen" component={TimeMusclesScreen} />
                <Route exact path="/workout-sheet-screen" component={WorkoutSheetScreen} />
            </Switch>
        </Fragment>
    </Router>
);

export default App;

import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../../data/history";
import StartScreen from "../startScreen";
import TimeMusclesScreen from "../TimeMusclesScreen";
import WorkoutSheetScreen from "../WorkoutSheetScreen";
import "../../styles/main.css";

const App = () => (
    <Router history={ history }>
        <Fragment>
            <Switch>
                <Route exact path="/" component={StartScreen} />
                <Route exact path="/time-muscles-screen" component={TimeMusclesScreen} />
                <Route exact path="/workout-sheet-screen" component={WorkoutSheetScreen} />
            </Switch>
        </Fragment>
    </Router>
);

export default App;

import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import StartScreen from "../startScreen";
import GoalScreen from "../GoalScreen";

const App = () => (
    <Router>
        <Fragment>
            <h1>My App</h1>
            <Switch>
                <Route exact path="/" component={StartScreen} />
                <Route exact path="/goal-screen" component={GoalScreen} />
            </Switch>
        </Fragment>
    </Router>
);

export default App;

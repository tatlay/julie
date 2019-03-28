import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import TimeDisplay from "../TimeDisplay";
import Table from "../Table";
import Button from "../Button";

const WorkoutSheetScreen = ({ exerciseFocus, workoutTimeMins, restTime }) => (
    <Fragment>
    	<div class="workoutSheetScreen_wrapper">
    	<h1 class="timemusclescreen__title">Workout with Julie</h1>
        <h1>{exerciseFocus}</h1>
        <TimeDisplay time={workoutTimeMins}>Workout Time:</TimeDisplay>
        <TimeDisplay time={restTime}>Rest Time:</TimeDisplay>
        <Table />

        <Link to="/">
            <Button>Done</Button>
        </Link>
    	</div>
    </Fragment>
);

export default WorkoutSheetScreen;

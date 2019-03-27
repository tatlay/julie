import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import TimeDisplay from "../TimeDisplay";
import Table from "../Table";
import Button from "../Button";

const WorkoutSheetScreen = ({ exerciseFocus, workoutTimeMins, restTime }) => (
    <Fragment>
        <h1>{exerciseFocus}</h1>
        <TimeDisplay time={workoutTimeMins}>Workout Time:</TimeDisplay>
        <TimeDisplay time={restTime}>Rest Time:</TimeDisplay>
        <Table />

        <Link to="/">
            <Button>Done</Button>
        </Link>
    </Fragment>
);

export default WorkoutSheetScreen;

import React, { Fragment } from "react";

import TimeDisplay from "../TimeDisplay";
import Table from "../Table";
import Button from "../Button";

const WorkoutSheetScreen = ({ exerciseFocus, workoutTimeMins, restTime }) => (
    <Fragment>
        <h1>{exerciseFocus}</h1>
        <TimeDisplay time={workoutTimeMins}>Workout Time:</TimeDisplay>
        <TimeDisplay time={restTime}>Rest Time:</TimeDisplay>
        <Table />
        <Button>Done</Button>
    </Fragment>
);

export default WorkoutSheetScreen;

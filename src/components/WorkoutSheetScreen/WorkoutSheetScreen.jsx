import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import TimeDisplay from "../TimeDisplay";
import Table from "../Table";
import Button from "../Button";

const WorkoutSheetScreen = ({ exerciseFocus, workoutTimeMins, restTime }) => {

    return (
        <Fragment>

            <div className="workoutSheetScreen_wrapper">
            <h1 className="timemusclescreen__title">Workout with Julie</h1>
                {exerciseFocus ? 
                    <h1 className="workoutsheetscreen_h1">
                        {`Focus: ${exerciseFocus.join(", ")}`}
                    </h1>
                    :
                    null
                }

            <TimeDisplay time={workoutTimeMins} timeUnit={"Mins"}>Workout Time:</TimeDisplay>
            <TimeDisplay time={restTime} timeUnit={"Secs"}>Rest between sets is </TimeDisplay>
            
            <div className="timemusclescreen_divide"></div>
            <Table />
            <div className="timemusclescreen_divide"></div>

            <Link to="/">
                <Button>Done</Button>
            </Link>
            </div>
        </Fragment>
    )
}

export default WorkoutSheetScreen;
